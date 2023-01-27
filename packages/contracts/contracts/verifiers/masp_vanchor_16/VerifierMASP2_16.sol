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
contract VerifierMASP2_16 {
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
            [16623952244192682418718916763896995173921223674863813742142434826203511251650,
             548617023197062311435963029365760949896481252281609850109447068402030439945],
            [5264514537326532028174408770141292087092127309628146599983158615266702663363,
             16431689289471304171705107622162726810621727558152020223318797527161849662721]
        );
        vk.IC = new Pairing.G1Point[](76);
        
        vk.IC[0] = Pairing.G1Point( 
            12430901364379818000802341635505828791714967289433023601159066853743269916695,
            7331771014086770204470833218668864904341596584107054188967768748983722302400
        );                                      
        
        vk.IC[1] = Pairing.G1Point( 
            438822981903643306292513945591860811618013680157446691137653484564784422337,
            10463755052970373528937095244519546943042255732376633406461849299056004587583
        );                                      
        
        vk.IC[2] = Pairing.G1Point( 
            5798834282877195069130249717613731908422248529076088863209403527119846141805,
            10105019455851483813484644349754980168165604215877778827678766799872033344040
        );                                      
        
        vk.IC[3] = Pairing.G1Point( 
            21323866107973452557778034827074111294164267032456110554475596939398218892416,
            19134093925214009367657834765320884297726799933707858303626618419918736918705
        );                                      
        
        vk.IC[4] = Pairing.G1Point( 
            3376835352496234958256276175319354763353515903318841598436837594615489749626,
            1383460878358665799127144647754570166807202987678443407847170399905264098957
        );                                      
        
        vk.IC[5] = Pairing.G1Point( 
            3279408761416165413918286572154700133716550848832737144337447539889370226512,
            9920273810018547371938399886114140657652821532570489757355750674114459917731
        );                                      
        
        vk.IC[6] = Pairing.G1Point( 
            12085758070412711444420724548298517141433125964625985383357274782873121043233,
            15635471925299451976254233781257494458047087670217454954125661030276696750154
        );                                      
        
        vk.IC[7] = Pairing.G1Point( 
            3122148450317517339894217697973990477089733084888122261000963608114596787353,
            10334972046031659564042594886843749959903850804037942223602708553382412656819
        );                                      
        
        vk.IC[8] = Pairing.G1Point( 
            11809166925913620709429796162019816959728197504865524273115022736737774557247,
            3161095907806712363144321609310417973350506555543548293278950829963966980248
        );                                      
        
        vk.IC[9] = Pairing.G1Point( 
            18483750617072025872380703943968678049845441918337682871730499238796448243359,
            16126892050367300556858873634080460207792492583543384517093084542830882898355
        );                                      
        
        vk.IC[10] = Pairing.G1Point( 
            4568926422887426212370276694726951395058045868732953694071975967523616811464,
            4459824678672387510524377190518690905208539751145361609075700463734939297996
        );                                      
        
        vk.IC[11] = Pairing.G1Point( 
            8814532074145718266387158712167567090277966649821503774393191420336231588542,
            1470818011050806879811080059419624064966984375633894794944208456968164017468
        );                                      
        
        vk.IC[12] = Pairing.G1Point( 
            1168555281154791975759907445150981611537369414247134040907139201733020906124,
            2745102583219604709863414573559041318616975644226812918705490196816313490001
        );                                      
        
        vk.IC[13] = Pairing.G1Point( 
            18453050121405745126164859580507189831856461164884385211847494432553529877184,
            7748073184223344245381971997441361300000858660104868789278516036304699335995
        );                                      
        
        vk.IC[14] = Pairing.G1Point( 
            7481721939268109062928558702011257375044770303306989747297623979966563230635,
            13903287425316859797363275676483062657035269215169814526676111416882948175304
        );                                      
        
        vk.IC[15] = Pairing.G1Point( 
            14812229786155169125850112343263491560612229319080763155540341367883863804913,
            18134127134374990250504150906424514505857885494100581875898144472307783085608
        );                                      
        
        vk.IC[16] = Pairing.G1Point( 
            9627588093636257176577414486662813671083859729469201176349587782772413254821,
            21555380151108402449610308726701783715157509624909676543215592391262077639251
        );                                      
        
        vk.IC[17] = Pairing.G1Point( 
            15969650837950731623823773817239772248364230355938656997536537017024722783571,
            2945417028329516343201605616940146576628730808437255919142187944980196727460
        );                                      
        
        vk.IC[18] = Pairing.G1Point( 
            18247660687740335884753692056134010625416130280369585581421405195553646231398,
            6021432229093508399871180377730578063021762171264709985024806767502047687390
        );                                      
        
        vk.IC[19] = Pairing.G1Point( 
            4727486949552551644086209787391685943905623513877928517645261005715845097140,
            4617560563848781633696716816440582925587372575074033536674278092828132229570
        );                                      
        
        vk.IC[20] = Pairing.G1Point( 
            18612840405569882181160925784545002324826598262999006649010954124496195206987,
            707508186494665614956582522820784943914478099527695516666304919438197866746
        );                                      
        
        vk.IC[21] = Pairing.G1Point( 
            19485362224639948655556441164558638655361742003501910207945422855561079368422,
            10067212237933590143237902556335381312019517200840977503051407237822166991081
        );                                      
        
        vk.IC[22] = Pairing.G1Point( 
            9075549004787504915124188445347509897773534855123043667722781060278421184578,
            18662316374100064388057821287130327476003413763951558459422964867382418607454
        );                                      
        
        vk.IC[23] = Pairing.G1Point( 
            4941313573501992805241207684516353335176580636110277105556427705055091713691,
            5451041998522070718600488210303797658837023625718539648111619090559315573587
        );                                      
        
        vk.IC[24] = Pairing.G1Point( 
            1569384508804995302205803401580627663162039652740742966837249219092541132923,
            3005444200180211241975509613503722149672373316038310838977130867482090447836
        );                                      
        
        vk.IC[25] = Pairing.G1Point( 
            9487762117837845598589527996813489218850080965718513159345291110116755367553,
            16534679403561243913094340897132084794214975684437567203554753424942063833017
        );                                      
        
        vk.IC[26] = Pairing.G1Point( 
            10242941798576529565211094640710067583768570713816550273302759215711268109226,
            9565118423113681109729184804359289101871224538430472604288858402680570412592
        );                                      
        
        vk.IC[27] = Pairing.G1Point( 
            19784754485274502456488426525577168839270478947034025840272438777304846006739,
            17294793621887883343366086227442165694331820153042637727202122393638870019031
        );                                      
        
        vk.IC[28] = Pairing.G1Point( 
            6989844396363682110046936805163825749815295075268889760256075217571912533458,
            13437093915330977630462915110584278331255018823411224381431771957869172135956
        );                                      
        
        vk.IC[29] = Pairing.G1Point( 
            4692272348926322554597107240381627648877351455791171345298819740397119923075,
            3916652249049048816111639572641042496267102505999913076628118383991439406556
        );                                      
        
        vk.IC[30] = Pairing.G1Point( 
            7297030179579028730944403627369152596552054043559839483815900739054316456569,
            13408006522374904642025308970431237119104913943277746748240297151456295045655
        );                                      
        
        vk.IC[31] = Pairing.G1Point( 
            20447042516687515328272691499156984438546616807247669399301618133251760895634,
            20979992028133171553872492839403290390791243514415443950235760565878571196430
        );                                      
        
        vk.IC[32] = Pairing.G1Point( 
            9719072953095572011526848071173521153483007253971188910893408415092255537546,
            6894981249190902376161623585614759154420953457352103774651525283456687367979
        );                                      
        
        vk.IC[33] = Pairing.G1Point( 
            15133538931563909655668269282072229543494237568648976133668551958638386765038,
            8382189871086331163021176327613314714742656879332254285519699247638223322397
        );                                      
        
        vk.IC[34] = Pairing.G1Point( 
            9063167299769830361821885972733461871459329477932218194742498397925010273152,
            14549512863777435045287165387825314491540829972945669827152423332157126275893
        );                                      
        
        vk.IC[35] = Pairing.G1Point( 
            18420524631834545878732157086198763756815611306740354014134750030622991416714,
            21469672618072315330601536582799151023265464011672788331627406291783208140367
        );                                      
        
        vk.IC[36] = Pairing.G1Point( 
            9188398461564556609310338542790667126939420854420688842692793377619270773864,
            4105203981163752553496730855684496276592849141610752013617116341455311184414
        );                                      
        
        vk.IC[37] = Pairing.G1Point( 
            17220069972843174701050702678747542481470819733583151837547322902769611708164,
            7940174657436793742459974250992849089159599011823491555087238598666207028545
        );                                      
        
        vk.IC[38] = Pairing.G1Point( 
            1405562100535895826185045998237257841871678337713265520975939164037862176184,
            20201633899209066268962259392054901491150073251395178795209343115250412191549
        );                                      
        
        vk.IC[39] = Pairing.G1Point( 
            8093351824028096780252190698879383040174464476810859809258639414314891308784,
            19198195461827368550991857685980102907548930602056052955661536902098945270604
        );                                      
        
        vk.IC[40] = Pairing.G1Point( 
            13420187710296200144995297687252075212329923483853180288738209566918421979714,
            21322558495708914614216426589732686815373905290683451252388143731110377443173
        );                                      
        
        vk.IC[41] = Pairing.G1Point( 
            6598180998425566701428109311798269267467358032646896732219998830014199479412,
            8464727637404546697930053187818254650102970695494223299151000677576898028153
        );                                      
        
        vk.IC[42] = Pairing.G1Point( 
            1994879523380459164456238824100497148376693294329892951457519209317845265682,
            12382101848638093163991236087213256820911361018552695501180075978002885662502
        );                                      
        
        vk.IC[43] = Pairing.G1Point( 
            19887336675155112788628135314891353091773398630146336029298504758703975317575,
            5408612355595035218558434114531864578431912350339399349580314643351110063767
        );                                      
        
        vk.IC[44] = Pairing.G1Point( 
            1692013506365650175359069908385963831156160930954627390116220530378954738158,
            14905497353128189017710629650369344420927042034779880292469923055917344664413
        );                                      
        
        vk.IC[45] = Pairing.G1Point( 
            17653021206046091947525602547343554306124263965577481460020756847517008179839,
            7102527277815993305657980536801538168329275814259728275006521130483971689348
        );                                      
        
        vk.IC[46] = Pairing.G1Point( 
            8629757665248046922357911922263812259164667388302619125983491331575483152308,
            16455795934041574022543251578668295357309088282245786384320985921696431902677
        );                                      
        
        vk.IC[47] = Pairing.G1Point( 
            14164788625577238685790040310840940138905943502989521051288928981676939585838,
            21835557885509217535172508787854286633688055643491191923075583692207360228630
        );                                      
        
        vk.IC[48] = Pairing.G1Point( 
            21530596418537550808262244078383653794497206426071805157489294380627048497460,
            5274119910434726223747822105912457454569509655963390451591704337674961081603
        );                                      
        
        vk.IC[49] = Pairing.G1Point( 
            7540677025198208193744581025789733615029650144474746259030031850430291735370,
            14014262861760652925300788752034415747108434150805248521303142708614971059417
        );                                      
        
        vk.IC[50] = Pairing.G1Point( 
            21781262286174934840181430675786368411893350321922938640566433994422939730616,
            20307800931172962588140652839765504412565965512987787273035838423380055581683
        );                                      
        
        vk.IC[51] = Pairing.G1Point( 
            10834582404772714049600101303338050363309246613644056049908129107320211431898,
            4139437861058290911818556540792371993162114862515658119548087298279613282069
        );                                      
        
        vk.IC[52] = Pairing.G1Point( 
            72894436389456316010204331256847383346210368252071504007229216825764734700,
            11520495774589971627476324016845382712952970415534286952085591065800233196959
        );                                      
        
        vk.IC[53] = Pairing.G1Point( 
            13245754693317781247687075869894629691780401707095813281764791717229888309557,
            8248212317664707052507737579205654990710279723342144364083743480991268809318
        );                                      
        
        vk.IC[54] = Pairing.G1Point( 
            17567237293329938506965951345578977105716482024996624991342226360581275143262,
            15317877061732502633568177775613509362034414929928281082672891002458980846534
        );                                      
        
        vk.IC[55] = Pairing.G1Point( 
            6494167108532421293798856388785095403483107051676632149871146705336070736139,
            11950308107693465217487452109262305508606948982007167413620392178721856334989
        );                                      
        
        vk.IC[56] = Pairing.G1Point( 
            12274668244085484694701079804122923181788101232256883299398823131748349529641,
            10380420214185318530061864443762900571389254265567066692029384427295092185078
        );                                      
        
        vk.IC[57] = Pairing.G1Point( 
            1797295212137404784978431648056600664819322994007194570617576319565977920154,
            4183221235801243779592923952568820187788706526072306280183965488575218168616
        );                                      
        
        vk.IC[58] = Pairing.G1Point( 
            2094617975597856009346790238395557675703960836100516597628627855010754049733,
            17509233399056118601545122750491933873731332822967909639392619051683275138704
        );                                      
        
        vk.IC[59] = Pairing.G1Point( 
            7069644726365185474392505685184611704069962250482974571608531128617044802467,
            17752119478228257530835721912325729042588468535849785515758524228223010827022
        );                                      
        
        vk.IC[60] = Pairing.G1Point( 
            12081861017749399237537713396915542804289067979073588186901693910740922811269,
            4170818060873934844555077133221000751879439436688548787622399900109666470932
        );                                      
        
        vk.IC[61] = Pairing.G1Point( 
            2750248290869682874620797175904782613363745700754370315327360764569504046014,
            18048290551114975700528228540628791527222286743437504173234087716749644871970
        );                                      
        
        vk.IC[62] = Pairing.G1Point( 
            15929937177077894507193515341202288368179318430526922537492168215203997321164,
            16375936241139912607336626939255871468822800758999277707356322796002173544232
        );                                      
        
        vk.IC[63] = Pairing.G1Point( 
            3761348003531841633866714474201154374340965945061995877318093306725228678881,
            19694904103769966317426997718867277325037527909864406992159296242342021262674
        );                                      
        
        vk.IC[64] = Pairing.G1Point( 
            8463622151797066080344046612578537611617142430197449344414030549773121583819,
            20574628803798107614575342422722153297005333243361009395809133829769799552553
        );                                      
        
        vk.IC[65] = Pairing.G1Point( 
            3710032561750291147754436774674107502440564933043678178953107910798872003619,
            12033971833991160014686084869560588696340794870309214557490616552272953211404
        );                                      
        
        vk.IC[66] = Pairing.G1Point( 
            14222348648109333729369128028443539094900478174233909128263382215450485269893,
            5203965772240484183965821616640591363608592135999506845110628573821903935680
        );                                      
        
        vk.IC[67] = Pairing.G1Point( 
            2912330674167424172341695610625707575765433233014881487351182097788326744570,
            11417453307360134385776902193287431414332142567722467588388041366660656748073
        );                                      
        
        vk.IC[68] = Pairing.G1Point( 
            5821203390555693692227707655904184171346828101975781180803549239072822291920,
            3099066020983288262079131236995687141382668960947611077584815678422311194467
        );                                      
        
        vk.IC[69] = Pairing.G1Point( 
            10507919130571148259623123145239673878302424277670183181120787974465685468697,
            4801453374455630476371749975639634665901289746447394166887003685444537542645
        );                                      
        
        vk.IC[70] = Pairing.G1Point( 
            19798093441921287269171661356410797618798664907727653154425247638002789497021,
            14321861390636520781800594365291933612330518796324805225520889409232900266846
        );                                      
        
        vk.IC[71] = Pairing.G1Point( 
            2339470950462946809755593406874196699009687453642124103237724442097468610884,
            9481225818884241429730178774359936492512500840913199905182204021806702470407
        );                                      
        
        vk.IC[72] = Pairing.G1Point( 
            6655649405338914636537964123367595171192452079534426860652899266760065199483,
            14282968787222393402344235765512867788716060212996135458342770082687458544443
        );                                      
        
        vk.IC[73] = Pairing.G1Point( 
            3787042779749479457411890883044001265639456315098634390405103051687953084792,
            9075901446003337063588587577204861113464611630433910749822578291794799314969
        );                                      
        
        vk.IC[74] = Pairing.G1Point( 
            11600762033929819697230892793264772260137086608937992493343460041312220697207,
            3927845731621839393312123835359153291972265170702750805228061200605483096329
        );                                      
        
        vk.IC[75] = Pairing.G1Point( 
            10769089016502172341300472846112843868490971237908532229548954895333262920219,
            14448724009528372067019899316898235918551755146958002143119901522089509929401
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
            uint[75] memory input
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
