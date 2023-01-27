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
contract VerifierMASP8_2 {
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
            [18561875307968397244623816584169467081006779859534748789994748359708092163054,
             11589836160019581647965543004456124313289556500794331974905555484144250970228],
            [3832109232423305083135564948603909400847016264341495412551528999508040877200,
             20889420129714768322082586250123628646049855149752090049519038743059300435214]
        );
        vk.IC = new Pairing.G1Point[](40);
        
        vk.IC[0] = Pairing.G1Point( 
            15944074355489976753391618725101155726529733772476592861077224122237771822505,
            295668442165536071101909567494437598387665208111284518385635369288162433935
        );                                      
        
        vk.IC[1] = Pairing.G1Point( 
            17451057394412591072180963509094778641732302944673211579722376743055641709746,
            4423536441953402722391447705628592050296069231690201730109207373748041433243
        );                                      
        
        vk.IC[2] = Pairing.G1Point( 
            5834286797811590527282290781292574727945868913143406020580009516536112624775,
            9279947111823194142005217512769182435509007012152909250952846072723856757447
        );                                      
        
        vk.IC[3] = Pairing.G1Point( 
            6254582879352465364570073632494065681508554421043646157252315871129850355676,
            7925517162837707031626822562342033065173746728118518506389611455241914247281
        );                                      
        
        vk.IC[4] = Pairing.G1Point( 
            6080093250057575234533332714070967040921730408619317070431709113531977108687,
            10241495579565843711051346872676469070117240742564807954480028132582921902705
        );                                      
        
        vk.IC[5] = Pairing.G1Point( 
            5474646157148023153171080712938568031358574413828457788693910872701370601777,
            1150735165768018202419241347871857500289716409941809500069023061622624205889
        );                                      
        
        vk.IC[6] = Pairing.G1Point( 
            6415107294572957377271035650309142864852413303307851892609746222100160837130,
            21137101133681351474849573542074804544761011055606833128508683536378731884080
        );                                      
        
        vk.IC[7] = Pairing.G1Point( 
            707105689622899385919450078207746760698524946569076632516633209778375156994,
            6619908130085665406436875341736159819782595095195974339357536965975074862030
        );                                      
        
        vk.IC[8] = Pairing.G1Point( 
            18316520913984010225571654976829223521775256162550565711711577887490557322178,
            4370548758172901375716942509859059705175620912258959044309901253357277359103
        );                                      
        
        vk.IC[9] = Pairing.G1Point( 
            16552780611737955544744424812913821550459881326930843141768247680834943866693,
            6768334714914677419835568382934374249228706277106401788749535244824898961384
        );                                      
        
        vk.IC[10] = Pairing.G1Point( 
            11294201681769867596652422741794044304167783359951486074676490058859336462316,
            5710479449085014273651024972748910396243547666436672931929532871176679665671
        );                                      
        
        vk.IC[11] = Pairing.G1Point( 
            9026077922519114449459091485804727617058066416043288245339576539671244876758,
            12642453629192039907203854052769230575656294501320141189962049656677038783548
        );                                      
        
        vk.IC[12] = Pairing.G1Point( 
            11615341917503177598991521931423131434498341226979571221040450003022699308329,
            21326515802588396147156719166405869327563456692466673076466803048155125154175
        );                                      
        
        vk.IC[13] = Pairing.G1Point( 
            18037845860207590639673021835067536477364162438009816113334918602650298671576,
            4761099787520555260350084773117248808446201538486746302342009440472493844842
        );                                      
        
        vk.IC[14] = Pairing.G1Point( 
            18724163141231065332979088572130813915908025008338215292834147596371880872430,
            6635596581202233131051414985786848578106925394342997760622603130019964977100
        );                                      
        
        vk.IC[15] = Pairing.G1Point( 
            1262709732389599342466593131803541557247504346180946916435798712873423240922,
            9105864446473336470422503508115957756231384078046002278353189332509990884470
        );                                      
        
        vk.IC[16] = Pairing.G1Point( 
            16067498039580667252493864515664814458253019705452174051074178090072464086108,
            21292137468364212046136106629053296207212992732697840488196314450791255469725
        );                                      
        
        vk.IC[17] = Pairing.G1Point( 
            10783481933004909632189492808272162032036512512453972757742765368622214913827,
            14364905492709532234792877897523988608984254047032511466891956641778877637950
        );                                      
        
        vk.IC[18] = Pairing.G1Point( 
            1910873998432009709782506465273455665737147603214344331906728958498493478649,
            13942836279570717176986127508791464213207101439726275532965718965867328983860
        );                                      
        
        vk.IC[19] = Pairing.G1Point( 
            3569311061649268541511515234354176649595210141694107517350293044210485378761,
            12539236543143897013460640321694165322199145338841890772696161524035502614976
        );                                      
        
        vk.IC[20] = Pairing.G1Point( 
            17573861108663422135916798015561135821183318712568547495437812712885778254591,
            3367363825983139833153199142406207243524511345079839299887377433027786110170
        );                                      
        
        vk.IC[21] = Pairing.G1Point( 
            8749017632408357354677143669318630683065231252803121711165372121086829480805,
            17669944421430968314780825937498327048902951748516957548251816490087025479076
        );                                      
        
        vk.IC[22] = Pairing.G1Point( 
            14133336362833726872752813472407691014011198220469799201699879570463171822747,
            16736056452667970672139736734337317830101513104867328075352799247452967063006
        );                                      
        
        vk.IC[23] = Pairing.G1Point( 
            9737299246540597276971564642699042523980112600293076890252357727418482273552,
            2832050159278831495223671323583040673410852034331651471968050748082134516937
        );                                      
        
        vk.IC[24] = Pairing.G1Point( 
            1762729966682549037527717390494048335089193065526302191839080043212688951227,
            8157582915917323411041031565989665407984485795070919848379718463967607525608
        );                                      
        
        vk.IC[25] = Pairing.G1Point( 
            20937856512401127144233968397922292861817905596708405098402994886393038744714,
            21667972652803578008066042275743410399742652171265981402516236024075361878063
        );                                      
        
        vk.IC[26] = Pairing.G1Point( 
            3513337474914751673734137283476901964240166679658357252249108392071077439712,
            17103203130125122082714655970118281493086667382430534322448340624196295892143
        );                                      
        
        vk.IC[27] = Pairing.G1Point( 
            6272713625750656397793191732254112333564540547948838996545168823839730535964,
            19988997678270610849148167174258998582988649532912225639572574993025717377213
        );                                      
        
        vk.IC[28] = Pairing.G1Point( 
            6976052029671734816048581410805131796690689629608257377341590671750214822462,
            15084061988364249806524533346881850050620827261101764322703579773701733413545
        );                                      
        
        vk.IC[29] = Pairing.G1Point( 
            21757696377171787622485167660078972196163750625493960328183017728224141015384,
            17035955080811402824161644824565181614055630676393857935438680634756350722388
        );                                      
        
        vk.IC[30] = Pairing.G1Point( 
            12551005141937671596574255306143475507158533034638422787691083345887767253611,
            17366705620234897057371840713552260398576037820359637240596647589098932521550
        );                                      
        
        vk.IC[31] = Pairing.G1Point( 
            17466959527659978846175550263290177713876964935017382420914608229227287506799,
            14778482224800018195637538356351437150018059131699820701776066903496482044785
        );                                      
        
        vk.IC[32] = Pairing.G1Point( 
            4147359478053350651768298873541449155916687665009116073684606296139521285367,
            19259481973842467306160011833841384422124736578444837433958644954214075685159
        );                                      
        
        vk.IC[33] = Pairing.G1Point( 
            4847784915032792722765594298794029372620497182528689453325227757175058892426,
            902159347510621584877312153068621933615464784573882777319284553620804917327
        );                                      
        
        vk.IC[34] = Pairing.G1Point( 
            13279541539857767104316059799307305069617589574917661703374646641932376510823,
            17545696038078863511878241667067775235929517718127577909779687125510861839431
        );                                      
        
        vk.IC[35] = Pairing.G1Point( 
            16385834469405866689348559736832425745345001871038778356028807879017399601815,
            16762295538282751280568436851075443084797199709481996609360866361803254476768
        );                                      
        
        vk.IC[36] = Pairing.G1Point( 
            5327490698272948454057177211504764183301309776145621655019459965006014348576,
            20055967240079815931535646421068251108095833973792971170653868433978670029670
        );                                      
        
        vk.IC[37] = Pairing.G1Point( 
            12891134774452509482630551837395148448126133080867040477523643137587641889507,
            14956901141521046174210672269741700936759044538584735221555533757600015821391
        );                                      
        
        vk.IC[38] = Pairing.G1Point( 
            8607833000861825294829829631003736585687914141402525713524527873867824133890,
            15515210060087776158558590565538721010292255629290973661042253206686483810320
        );                                      
        
        vk.IC[39] = Pairing.G1Point( 
            8609971016371026385461826342120083633374819376403713797878903299714665262785,
            6371667404365412633107072033218542376473364458408909217891253332461000572591
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
            uint[39] memory input
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
