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
contract VerifierMASP2_2 {
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
            [14957566293601481447908971943702184240365092013258457522822890591876513753187,
             4609044598693453885088496034224931975375523504573520643950191420318677002213],
            [16586609955950721411228657659006362676392275353029765885981302017001492071665,
             8615379389076046651224514370582336743780095602082283799107910890255482584755]
        );
        vk.IC = new Pairing.G1Point[](34);
        
        vk.IC[0] = Pairing.G1Point( 
            6239131406802519643523107509105600878680025689450239000286153135213634710912,
            3718859995679101970837732992736848053257965247727889530818729905507505280095
        );                                      
        
        vk.IC[1] = Pairing.G1Point( 
            11627101309921799080829464466163743160971296694626191387876519185377660289653,
            17934689531376475153583743528191386544888688257925232712772492586344648822696
        );                                      
        
        vk.IC[2] = Pairing.G1Point( 
            17645041150053461933672699247895449511221215761326836520571163834146360546844,
            12383004079177451696020966174400419819589008188128772959131644101132964242037
        );                                      
        
        vk.IC[3] = Pairing.G1Point( 
            16725569382472699297395407430695681911374663209659038426847995595224111890988,
            3478167914028724709622128136402130899914510396422051960790058590178284682740
        );                                      
        
        vk.IC[4] = Pairing.G1Point( 
            1358652630040257972106172953460016127395580566523736702276741072876975420627,
            1831683986053951607698019588892051938781086946094368043670769918570633681792
        );                                      
        
        vk.IC[5] = Pairing.G1Point( 
            12970207135838640868814944374295329533747502306648365205890597418299476653241,
            13017398586608053707855685040361598118597332666127689220165629493440135482055
        );                                      
        
        vk.IC[6] = Pairing.G1Point( 
            1761211409507765680014506291281546298450303291710010404408751374936714822187,
            1262801708236305478416738530919769081453174426328616551761984705564132165318
        );                                      
        
        vk.IC[7] = Pairing.G1Point( 
            13420379355648053509147476877129889629709144713595197391400384765970465437062,
            2497984769960946091530464236499613639239418142794286259042223097057068836968
        );                                      
        
        vk.IC[8] = Pairing.G1Point( 
            11724492946229356619391001698455801532328489559384793315321081759880587018169,
            8227026933115930884179377773438012522848704001153027562161733084963838399539
        );                                      
        
        vk.IC[9] = Pairing.G1Point( 
            20554889743034750842476822159975016992476586021321271540601480477583294031143,
            20775131534650687548488048542944780458045048469688268595225488871384849861921
        );                                      
        
        vk.IC[10] = Pairing.G1Point( 
            4088503934013649378705688836694321119114940668458853330404277705608847276914,
            19214483571057274688215693898340445607774403885229577667704955124819339224483
        );                                      
        
        vk.IC[11] = Pairing.G1Point( 
            17931054252792408547162878286855771366123600106646806350216405537976729116483,
            8056148190385031617592062504269677982810741279486243839132837247192828081628
        );                                      
        
        vk.IC[12] = Pairing.G1Point( 
            1708693510930982693707198729129863322072356231335099663767745895970837147624,
            13951852269091496762130667304791836119224166567571817970864119456769222775436
        );                                      
        
        vk.IC[13] = Pairing.G1Point( 
            7902327364181220427109538284254523583688970268615627741247281734092847740368,
            1708302562854042922961863808953374827073252770102676351614204676910824219965
        );                                      
        
        vk.IC[14] = Pairing.G1Point( 
            3147585832110743739241156868742803026872274258122640841822607513104960682951,
            18368330963958252841061456524241733768397621381409517598207917291246793092682
        );                                      
        
        vk.IC[15] = Pairing.G1Point( 
            3063161406800035820432745769971943732420108021836172875608432166900234079489,
            14955729135061099926569838878838168996468198274571674746560406909613993326442
        );                                      
        
        vk.IC[16] = Pairing.G1Point( 
            10238755421185839781937419162555496339076079672950055979723680373749533722370,
            8133979529560460645517734875319426900080165002960525938858897876027198182124
        );                                      
        
        vk.IC[17] = Pairing.G1Point( 
            2929686517566628582673242246389038606467252174171285745260161679299121523378,
            9901857579470477723939519802372505139731518633791111005844485689234604884040
        );                                      
        
        vk.IC[18] = Pairing.G1Point( 
            8845368900499198169706943302446485999220795774360397466139788535660283461652,
            20526722096276341988684552171603790611173409151099136683848925199989616556834
        );                                      
        
        vk.IC[19] = Pairing.G1Point( 
            4459938800999820621806697789462394756040157277924006991016540669924741182873,
            17003615782892120797499863735304788358828362608110865999561886721105105882467
        );                                      
        
        vk.IC[20] = Pairing.G1Point( 
            4048956341210368951603902126974711477481978208910063899495661705716346240493,
            7247753327705597511221810502741770680969625075781102091333552288912225107374
        );                                      
        
        vk.IC[21] = Pairing.G1Point( 
            14650905866392530842004587381370166187511043629316389595604329440473836213297,
            20023753454687511108441409603160201924084141637465760458404051428598454315242
        );                                      
        
        vk.IC[22] = Pairing.G1Point( 
            9811411634649290772958690828442630069711072586471289694445332970508621770646,
            19412042025665603059781112649255334566534118949387380214310122600806350388782
        );                                      
        
        vk.IC[23] = Pairing.G1Point( 
            7647435298624142626960778458679683528051621957055484171561349274023789810786,
            20503242651573719241492106696612636025825212234144666945801573471257068219191
        );                                      
        
        vk.IC[24] = Pairing.G1Point( 
            15019051273781770847786782557487688884797578956806803581788876219866140299799,
            19905269134231115371949646432043679139564577304944808011447510968705587935897
        );                                      
        
        vk.IC[25] = Pairing.G1Point( 
            15495632468394285708723748217650254499175057549309215580951393073649462055754,
            8639342388791986461619805570241521196755454992211004280087972616242957096501
        );                                      
        
        vk.IC[26] = Pairing.G1Point( 
            8784222093023458317382891838343915658293985128670211769251807831279681142217,
            6535566576652960008841945001661627870792334851633989014683447535929262005167
        );                                      
        
        vk.IC[27] = Pairing.G1Point( 
            14084813743382454530319065415993668109793519207636345437375135398618128436220,
            9547653554463595694026761331515471872632676397991280953175644652893997028275
        );                                      
        
        vk.IC[28] = Pairing.G1Point( 
            9181856343650444437837282774491097602930142333641162396595652670333121074168,
            11387150647850006535098142394787331847857950468247451530781734490541032776665
        );                                      
        
        vk.IC[29] = Pairing.G1Point( 
            9376565107622947668945882553942526212733856952676055130870900657841055553728,
            5184919777609056452656128921993069077308789393700013610386546659186573388943
        );                                      
        
        vk.IC[30] = Pairing.G1Point( 
            17001662936271624959190820676870713301506223180740525039893198339750249355276,
            10249615520486727521279968666055909084344887879983893177284039129985861820446
        );                                      
        
        vk.IC[31] = Pairing.G1Point( 
            4363705631020907335545835364676595859566274426958109965820942915970104975673,
            7569875356133120380994312804870131275189609303298079977962301623838470275599
        );                                      
        
        vk.IC[32] = Pairing.G1Point( 
            11978518795367374568873672083816772718878191016087690768345049636843266340686,
            16388036630431753852869979262855316705776665793683699676113175192026008052492
        );                                      
        
        vk.IC[33] = Pairing.G1Point( 
            2200263712387861633076906640092872432952855233296956880534673794012181759596,
            10776951564872457779674016735554257815191176928548164657580334765140389890234
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
            uint[33] memory input
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
