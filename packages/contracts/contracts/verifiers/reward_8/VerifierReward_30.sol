//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// 2019 OKIMS
//      ported to solidity 0.6
//      fixed linter warnings
//      added requiere error messages
//
//
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
library Pairing {
    struct G1Point {
        uint X;
        uint Y;
    }
    // Encoding of field elements is: X[0] * z + X[1]
    struct G2Point {
        uint[2] X;
        uint[2] Y;
    }
    /// @return the generator of G1
    function P1() internal pure returns (G1Point memory) {
        return G1Point(1, 2);
    }
    /// @return the generator of G2
    function P2() internal pure returns (G2Point memory) {
        // Original code point
        return G2Point(
            [11559732032986387107991004021392285783925812861821192530917403151452391805634,
             10857046999023057135944570762232829481370756359578518086990519993285655852781],
            [4082367875863433681332203403145435568316851327593401208105741076214120093531,
             8495653923123431417604973247489272438418190587263600148770280649306958101930]
        );

/*
        // Changed by Jordi point
        return G2Point(
            [10857046999023057135944570762232829481370756359578518086990519993285655852781,
             11559732032986387107991004021392285783925812861821192530917403151452391805634],
            [8495653923123431417604973247489272438418190587263600148770280649306958101930,
             4082367875863433681332203403145435568316851327593401208105741076214120093531]
        );
*/
    }
    /// @return r the negation of p, i.e. p.addition(p.negate()) should be zero.
    function negate(G1Point memory p) internal pure returns (G1Point memory r) {
        // The prime q in the base field F_q for G1
        uint q = 21888242871839275222246405745257275088696311157297823662689037894645226208583;
        if (p.X == 0 && p.Y == 0)
            return G1Point(0, 0);
        return G1Point(p.X, q - (p.Y % q));
    }
    /// @return r the sum of two points of G1
    function addition(G1Point memory p1, G1Point memory p2) internal view returns (G1Point memory r) {
        uint[4] memory input;
        input[0] = p1.X;
        input[1] = p1.Y;
        input[2] = p2.X;
        input[3] = p2.Y;
        bool success;
        // solium-disable-next-line security/no-inline-assembly
        assembly {
            success := staticcall(sub(gas(), 2000), 6, input, 0xc0, r, 0x60)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }
        require(success,"pairing-add-failed");
    }
    /// @return r the product of a point on G1 and a scalar, i.e.
    /// p == p.scalar_mul(1) and p.addition(p) == p.scalar_mul(2) for all points p.
    function scalar_mul(G1Point memory p, uint s) internal view returns (G1Point memory r) {
        uint[3] memory input;
        input[0] = p.X;
        input[1] = p.Y;
        input[2] = s;
        bool success;
        // solium-disable-next-line security/no-inline-assembly
        assembly {
            success := staticcall(sub(gas(), 2000), 7, input, 0x80, r, 0x60)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }
        require (success,"pairing-mul-failed");
    }
    /// @return the result of computing the pairing check
    /// e(p1[0], p2[0]) *  .... * e(p1[n], p2[n]) == 1
    /// For example pairing([P1(), P1().negate()], [P2(), P2()]) should
    /// return true.
    function pairing(G1Point[] memory p1, G2Point[] memory p2) internal view returns (bool) {
        require(p1.length == p2.length,"pairing-lengths-failed");
        uint elements = p1.length;
        uint inputSize = elements * 6;
        uint[] memory input = new uint[](inputSize);
        for (uint i = 0; i < elements; i++)
        {
            input[i * 6 + 0] = p1[i].X;
            input[i * 6 + 1] = p1[i].Y;
            input[i * 6 + 2] = p2[i].X[0];
            input[i * 6 + 3] = p2[i].X[1];
            input[i * 6 + 4] = p2[i].Y[0];
            input[i * 6 + 5] = p2[i].Y[1];
        }
        uint[1] memory out;
        bool success;
        // solium-disable-next-line security/no-inline-assembly
        assembly {
            success := staticcall(sub(gas(), 2000), 8, add(input, 0x20), mul(inputSize, 0x20), out, 0x20)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }
        require(success,"pairing-opcode-failed");
        return out[0] != 0;
    }
    /// Convenience method for a pairing check for two pairs.
    function pairingProd2(G1Point memory a1, G2Point memory a2, G1Point memory b1, G2Point memory b2) internal view returns (bool) {
        G1Point[] memory p1 = new G1Point[](2);
        G2Point[] memory p2 = new G2Point[](2);
        p1[0] = a1;
        p1[1] = b1;
        p2[0] = a2;
        p2[1] = b2;
        return pairing(p1, p2);
    }
    /// Convenience method for a pairing check for three pairs.
    function pairingProd3(
            G1Point memory a1, G2Point memory a2,
            G1Point memory b1, G2Point memory b2,
            G1Point memory c1, G2Point memory c2
    ) internal view returns (bool) {
        G1Point[] memory p1 = new G1Point[](3);
        G2Point[] memory p2 = new G2Point[](3);
        p1[0] = a1;
        p1[1] = b1;
        p1[2] = c1;
        p2[0] = a2;
        p2[1] = b2;
        p2[2] = c2;
        return pairing(p1, p2);
    }
    /// Convenience method for a pairing check for four pairs.
    function pairingProd4(
            G1Point memory a1, G2Point memory a2,
            G1Point memory b1, G2Point memory b2,
            G1Point memory c1, G2Point memory c2,
            G1Point memory d1, G2Point memory d2
    ) internal view returns (bool) {
        G1Point[] memory p1 = new G1Point[](4);
        G2Point[] memory p2 = new G2Point[](4);
        p1[0] = a1;
        p1[1] = b1;
        p1[2] = c1;
        p1[3] = d1;
        p2[0] = a2;
        p2[1] = b2;
        p2[2] = c2;
        p2[3] = d2;
        return pairing(p1, p2);
    }
}
contract VerifierReward8 {
    using Pairing for *;
    struct VerifyingKey {
        Pairing.G1Point alfa1;
        Pairing.G2Point beta2;
        Pairing.G2Point gamma2;
        Pairing.G2Point delta2;
        Pairing.G1Point[] IC;
    }
    struct Proof {
        Pairing.G1Point A;
        Pairing.G2Point B;
        Pairing.G1Point C;
    }
    function verifyingKey() internal pure returns (VerifyingKey memory vk) {
        vk.alfa1 = Pairing.G1Point(
            20491192805390485299153009773594534940189261866228447918068658471970481763042,
            9383485363053290200918347156157836566562967994039712273449902621266178545958
        );

        vk.beta2 = Pairing.G2Point(
            [4252822878758300859123897981450591353533073413197771768651442665752259397132,
             6375614351688725206403948262868962793625744043794305715222011528459656738731],
            [21847035105528745403288232691147584728191162732299865338377159692350059136679,
             10505242626370262277552901082094356697409835680220590971873171140371331206856]
        );
        vk.gamma2 = Pairing.G2Point(
            [11559732032986387107991004021392285783925812861821192530917403151452391805634,
             10857046999023057135944570762232829481370756359578518086990519993285655852781],
            [4082367875863433681332203403145435568316851327593401208105741076214120093531,
             8495653923123431417604973247489272438418190587263600148770280649306958101930]
        );
        vk.delta2 = Pairing.G2Point(
            [18411831180517594691465520799671051230590669446600446095690682963396516139956,
             16235481822416810674754880226902998048783905730654913197247304813605032608785],
            [10066312994116764527153970630732912896445095022966640063364464377694540596132,
             5444206154101165024089290603660505243541330926537261880945731134204569079945]
        );
        vk.IC = new Pairing.G1Point[](26);
        
        vk.IC[0] = Pairing.G1Point( 
            7930841586335143611779761774107472610191692158606527792484862257554229421795,
            11618403288079313657882414813805220384527617099840276691457490049263365424734
        );                                      
        
        vk.IC[1] = Pairing.G1Point( 
            17047505820198816479685316346183527147624586347709798429676426356026219937432,
            13777908757979521189706751502821651549805848585150499740272012576101257356871
        );                                      
        
        vk.IC[2] = Pairing.G1Point( 
            1498761904417293291693940661028296683101291974808482174229189882028382443952,
            2994523429468544224310271672243603075606816080877902957301223508439657674130
        );                                      
        
        vk.IC[3] = Pairing.G1Point( 
            13657998282625231832726365841131379715176434581282869461732834705926572250017,
            5472969299813382645831916154602619935979295982644315918797674830000599387464
        );                                      
        
        vk.IC[4] = Pairing.G1Point( 
            4734699938206757141193314478499998498792778034956080182944341161665191655014,
            10304344133736392682059812996827298205402133640534738069608993341927393304930
        );                                      
        
        vk.IC[5] = Pairing.G1Point( 
            7868596825783623623914767346985966886685862634121186021033733019063532479198,
            17472061510680375413422534912699734524293931258281297640325343656605115811003
        );                                      
        
        vk.IC[6] = Pairing.G1Point( 
            11249387655764073880666341933513503332121441144992962951243946164949516593062,
            8689458298268126575296579237703673229917326832823167583275045393994763784005
        );                                      
        
        vk.IC[7] = Pairing.G1Point( 
            13746926742179423410833393132518437670760436545485549074107650593948125610596,
            3161706210735730652699315437697901034413948155227004403958270049505569911819
        );                                      
        
        vk.IC[8] = Pairing.G1Point( 
            15740949727411097580269684435088604144407126784809591932015602648191636535308,
            10405807728671915331835451257812465035065401728203555182222525792437573059309
        );                                      
        
        vk.IC[9] = Pairing.G1Point( 
            19636064161911288762795641898583590559817129104296265167788744664055099775175,
            21447130365459137215999634903917680747984324513024960052697513268437748117796
        );                                      
        
        vk.IC[10] = Pairing.G1Point( 
            2383616611179845540246056234170864829681904314931805459293031218707796374105,
            16957205516038739012188950217672464005577991091172235628150666586778079695160
        );                                      
        
        vk.IC[11] = Pairing.G1Point( 
            21874894614668865719861689326014040184009666348575290405743552730941797897206,
            15008311343150322509060856640444955934822208585298577692257698286196579432395
        );                                      
        
        vk.IC[12] = Pairing.G1Point( 
            21243527769119220453179278914983346759641676132051453023356877114268273038142,
            20129425055723117928860498078452628463843610829418679223759104744329187524690
        );                                      
        
        vk.IC[13] = Pairing.G1Point( 
            3336443940134153131431523128812574551917472135133759453994867512156496360178,
            12239403336109387195226233111208920983006202241148487001134949423216697180111
        );                                      
        
        vk.IC[14] = Pairing.G1Point( 
            15679918588446519174805333708519428404397773598532358754578934793911023697271,
            15857712549040117413468518002468215907171938034757201403882924519447807871576
        );                                      
        
        vk.IC[15] = Pairing.G1Point( 
            13836868144183862131523698099586103022955100295550956884095596041642898174637,
            2041676500046838332447305081730627461549613872402939877829554562562403217506
        );                                      
        
        vk.IC[16] = Pairing.G1Point( 
            17864899480539251406870267952884836806737873636258947841965186351039875770033,
            6105048401739013693417793091847823571966663769222381335085344291540244712510
        );                                      
        
        vk.IC[17] = Pairing.G1Point( 
            17148755536380572492813613489910763573737151460989739944733339542513392353132,
            3193140395430340646846722455467337916629194054641662662370096122642915019113
        );                                      
        
        vk.IC[18] = Pairing.G1Point( 
            11631958555721684518938182731078367362957933100896882118796785263073810513278,
            16181942194719446281653374951355324290210440446568962455862189949783351117912
        );                                      
        
        vk.IC[19] = Pairing.G1Point( 
            14382988358767409715428905929222539326524336298911626320427075898138968610281,
            6902674524491018598812587662137753781692830169611602421323838238250827314115
        );                                      
        
        vk.IC[20] = Pairing.G1Point( 
            12028543416804119096298066318147186672605483742395835144896864507769949580309,
            7277240894830297110690986771259131831410295802376327763039027377443897612563
        );                                      
        
        vk.IC[21] = Pairing.G1Point( 
            17574726891050916328647168405012484410036460372728175641814232683801666265241,
            18577864619708501401576125980301954716653566559463378457607822591233767721823
        );                                      
        
        vk.IC[22] = Pairing.G1Point( 
            18650264095188582166501894108589932107062566232352820143754216281697242396669,
            1294370522833669268107822795273453674327093516202131042718655722301773481753
        );                                      
        
        vk.IC[23] = Pairing.G1Point( 
            2103061564670800186331736856659058016323616594166711430017949454888480882588,
            20842623310172433328713174277699184305541439169324728290857395300521726200950
        );                                      
        
        vk.IC[24] = Pairing.G1Point( 
            17298712993894735194235876220797957861339679901508978169808320758070995177457,
            12524480335241153095945035148905859487677448664637630116498693922163390470491
        );                                      
        
        vk.IC[25] = Pairing.G1Point( 
            12787831936000701978658390994701515682429267288207474326032241406173429846909,
            280185265686037126447197592609697926099434287498316991801925668877572629814
        );                                      
        
    }
    function verify(uint[] memory input, Proof memory proof) internal view returns (uint) {
        uint256 snark_scalar_field = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
        VerifyingKey memory vk = verifyingKey();
        require(input.length + 1 == vk.IC.length,"verifier-bad-input");
        // Compute the linear combination vk_x
        Pairing.G1Point memory vk_x = Pairing.G1Point(0, 0);
        for (uint i = 0; i < input.length; i++) {
            require(input[i] < snark_scalar_field,"verifier-gte-snark-scalar-field");
            vk_x = Pairing.addition(vk_x, Pairing.scalar_mul(vk.IC[i + 1], input[i]));
        }
        vk_x = Pairing.addition(vk_x, vk.IC[0]);
        if (!Pairing.pairingProd4(
            Pairing.negate(proof.A), proof.B,
            vk.alfa1, vk.beta2,
            vk_x, vk.gamma2,
            proof.C, vk.delta2
        )) return 1;
        return 0;
    }
    /// @return r  bool true if proof is valid
    function verifyProof(
            uint[2] memory a,
            uint[2][2] memory b,
            uint[2] memory c,
            uint[25] memory input
        ) public view returns (bool r) {
        Proof memory proof;
        proof.A = Pairing.G1Point(a[0], a[1]);
        proof.B = Pairing.G2Point([b[0][0], b[0][1]], [b[1][0], b[1][1]]);
        proof.C = Pairing.G1Point(c[0], c[1]);
        uint[] memory inputValues = new uint[](input.length);
        for(uint i = 0; i < input.length; i++){
            inputValues[i] = input[i];
        }
        if (verify(inputValues, proof) == 0) {
            return true;
        } else {
            return false;
        }
    }
}
