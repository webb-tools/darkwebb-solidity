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
pragma solidity ^0.8.5;

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
		return
			G2Point(
				[
					11559732032986387107991004021392285783925812861821192530917403151452391805634,
					10857046999023057135944570762232829481370756359578518086990519993285655852781
				],
				[
					4082367875863433681332203403145435568316851327593401208105741076214120093531,
					8495653923123431417604973247489272438418190587263600148770280649306958101930
				]
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
		if (p.X == 0 && p.Y == 0) return G1Point(0, 0);
		return G1Point(p.X, q - (p.Y % q));
	}

	/// @return r the sum of two points of G1
	function addition(
		G1Point memory p1,
		G1Point memory p2
	) internal view returns (G1Point memory r) {
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
			switch success
			case 0 {
				invalid()
			}
		}
		require(success, "pairing-add-failed");
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
			switch success
			case 0 {
				invalid()
			}
		}
		require(success, "pairing-mul-failed");
	}

	/// @return the result of computing the pairing check
	/// e(p1[0], p2[0]) *  .... * e(p1[n], p2[n]) == 1
	/// For example pairing([P1(), P1().negate()], [P2(), P2()]) should
	/// return true.
	function pairing(G1Point[] memory p1, G2Point[] memory p2) internal view returns (bool) {
		require(p1.length == p2.length, "pairing-lengths-failed");
		uint elements = p1.length;
		uint inputSize = elements * 6;
		uint[] memory input = new uint[](inputSize);
		for (uint i = 0; i < elements; i++) {
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
			success := staticcall(
				sub(gas(), 2000),
				8,
				add(input, 0x20),
				mul(inputSize, 0x20),
				out,
				0x20
			)
			// Use "invalid" to make gas estimation work
			switch success
			case 0 {
				invalid()
			}
		}
		require(success, "pairing-opcode-failed");
		return out[0] != 0;
	}

	/// Convenience method for a pairing check for two pairs.
	function pairingProd2(
		G1Point memory a1,
		G2Point memory a2,
		G1Point memory b1,
		G2Point memory b2
	) internal view returns (bool) {
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
		G1Point memory a1,
		G2Point memory a2,
		G1Point memory b1,
		G2Point memory b2,
		G1Point memory c1,
		G2Point memory c2
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
		G1Point memory a1,
		G2Point memory a2,
		G1Point memory b1,
		G2Point memory b2,
		G1Point memory c1,
		G2Point memory c2,
		G1Point memory d1,
		G2Point memory d2
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
			[
				4252822878758300859123897981450591353533073413197771768651442665752259397132,
				6375614351688725206403948262868962793625744043794305715222011528459656738731
			],
			[
				21847035105528745403288232691147584728191162732299865338377159692350059136679,
				10505242626370262277552901082094356697409835680220590971873171140371331206856
			]
		);
		vk.gamma2 = Pairing.G2Point(
			[
				11559732032986387107991004021392285783925812861821192530917403151452391805634,
				10857046999023057135944570762232829481370756359578518086990519993285655852781
			],
			[
				4082367875863433681332203403145435568316851327593401208105741076214120093531,
				8495653923123431417604973247489272438418190587263600148770280649306958101930
			]
		);
		vk.delta2 = Pairing.G2Point(
			[
				19856978707398088835289517921440778417130419084285420014745856007517413156265,
				20197441976799008623714829338362095878162502760686573419360647539941382075605
			],
			[
				16602219349966248955357555817336556559396858614947587462170655709795736135849,
				20462796622626741680880467100551680372241976224607850610138242735341020056591
			]
		);
		vk.IC = new Pairing.G1Point[](76);

		vk.IC[0] = Pairing.G1Point(
			17111198483006276735121691796193519202015320504528227577090587925052281960585,
			11279538685491986324422663661639604080902295810768784983430310101488584151645
		);

		vk.IC[1] = Pairing.G1Point(
			14813767244887050036697506246663244711295825652340412519404234726724206941317,
			15088481516458804366169739986727090253410400082424317867205535842210720334129
		);

		vk.IC[2] = Pairing.G1Point(
			19837337625030017827432815741265420192472855744848609698449498995129611126182,
			3181910941151508694236178758222344977904421765397356946734893610404933966486
		);

		vk.IC[3] = Pairing.G1Point(
			4361755630865790330510505403895787248960683390954342736832897777278408638078,
			4385578806366988095856830449492584238027428815705545460963687410035299800563
		);

		vk.IC[4] = Pairing.G1Point(
			14911628460086600444226048815266234595288080647023588174158719813777149441362,
			9730404336473747751068230946862608122660445238622177747399730836217538078489
		);

		vk.IC[5] = Pairing.G1Point(
			19740547412134796530993137368192390184691833531835668946751563196919014317063,
			10547220539798270707722987268282080471610615581742119859965222734191162390659
		);

		vk.IC[6] = Pairing.G1Point(
			18728950987272395815806969183009198351941779973683924124982505577668152495686,
			16392931115548182346120689959332859306329627644803985993494468074912657867200
		);

		vk.IC[7] = Pairing.G1Point(
			14158380551448812143221893347892696310596112133390290818787595613813489277158,
			592450914425158299918803137253467214732094882627166763868059418130805240897
		);

		vk.IC[8] = Pairing.G1Point(
			9490740673940588054109473395108538548965705288874987518836684327397626730150,
			18420779765113736699036373179071843762797458028631370807575130097503581352101
		);

		vk.IC[9] = Pairing.G1Point(
			2773474930540828769173266314011922737268042135740363922082371777910707037941,
			11972648125463906352165186290973078607827949242412579794411907224999874458239
		);

		vk.IC[10] = Pairing.G1Point(
			20593481722772215282266935379398693625534331084934640859912211431561202901556,
			9309502885435599513883402539498818725738996868610520448984087986312904361213
		);

		vk.IC[11] = Pairing.G1Point(
			21771264012898847008262039634104612174102486629090731845082052767539033478924,
			13909384731404249873696091678355190805272165073722538789428421132685600114839
		);

		vk.IC[12] = Pairing.G1Point(
			5543801617677670011632761255984135795223111483235217669183826240381528781266,
			3397721957337365971353612055120675786572478197541377033678149699238954818727
		);

		vk.IC[13] = Pairing.G1Point(
			16282087415758394478710667180062487660014044832420247392966070763942266109710,
			2966468432999534730376142652290030793810288872268699048027897214784202709107
		);

		vk.IC[14] = Pairing.G1Point(
			20572203285629170386258876940105032264606260416041501100075373424866866766966,
			19200102283712986005286012689519172157407318347728367640513889985114412219934
		);

		vk.IC[15] = Pairing.G1Point(
			9000628885563987589361759012838948317167550575558752021803016996407441570319,
			3684763976900932968972832598643443625624464579225115632830442729657384426249
		);

		vk.IC[16] = Pairing.G1Point(
			13184261177625337347506063074111469134620723042627984673332270480661126162011,
			13220722146208577256127194079447028004084934886196216488689485489677745665631
		);

		vk.IC[17] = Pairing.G1Point(
			21696100597635028979462838825293207159498510282199685349929308000597127536981,
			9789176698692054358545746879871814166049377035570735830791748126571215698310
		);

		vk.IC[18] = Pairing.G1Point(
			12452452312001284377922883943003170034793904920421052388879938808550505717450,
			15900800839539934788915204042586703247265202536228913135552256679168052203017
		);

		vk.IC[19] = Pairing.G1Point(
			14002145467147783696724262107778995052350926471767380062700260197601774450449,
			2362914869975491152541671879615029964291080349411408060185828809882379825444
		);

		vk.IC[20] = Pairing.G1Point(
			20883756827399448771097834965576945369842737884701402841752477448908602771281,
			8339889455999063301272964427173487731773014332815158836588426935236045911998
		);

		vk.IC[21] = Pairing.G1Point(
			7588754358836925223443811222592774504820884236465968299694475521494668794104,
			2857225295600435263892112161882642347152286548477118655331082547781244876338
		);

		vk.IC[22] = Pairing.G1Point(
			14048541162772398316756783359972614087339361584304253441968602397499801911848,
			6602896153218492720068828954754077739532883067850784175364106590447542083662
		);

		vk.IC[23] = Pairing.G1Point(
			10812538581279678934929340209431031105202225235059927460800347333937165777627,
			3412774186679283682585715645167416010229007755008561922763706846212822046775
		);

		vk.IC[24] = Pairing.G1Point(
			15035817546362478540470821625217659253010493304132393207599820190187487476336,
			10101028282616742167813220118201172779643350067989978818839698429190665379650
		);

		vk.IC[25] = Pairing.G1Point(
			10444998408807789332002695790456141124237263174862493540710894730701002638977,
			14681098107110712635463239611158465203247292885622342127358283829018252847241
		);

		vk.IC[26] = Pairing.G1Point(
			17871758546380571125542002755718829176889020108254148401829952972437077490971,
			827807285391498828250251115244166119953271721532613809192551805722501880040
		);

		vk.IC[27] = Pairing.G1Point(
			243360982018822198703450247514465859376410006385119045389041084715905068500,
			14962367917195681813367625638788719703977141883121942182870472107092754378819
		);

		vk.IC[28] = Pairing.G1Point(
			7747274349889314554143078754121017953397513166060270692129875627532060361413,
			2215726630735224920189010722256353926595820877672053802688259492766138195402
		);

		vk.IC[29] = Pairing.G1Point(
			3472478093616735923898211461531391447094863964156070144089640813640168115225,
			7652896269152165636528935438477901449034246539296938359457951647975410456213
		);

		vk.IC[30] = Pairing.G1Point(
			5998577889923819721247560874449212270226299522914909589665253455710060736889,
			6266121147579862088934513369924366306065295298666579468087385363185657833972
		);

		vk.IC[31] = Pairing.G1Point(
			9717690231855640716782008832737712111564502838614430998730466003165296485294,
			16004777076634710665599619428247911367836306806479597863888158694050114890400
		);

		vk.IC[32] = Pairing.G1Point(
			16119758834732757821252070264602628245500572664749209513107615592437030419662,
			8419978957787671428768898174009837281350005168187825629864337608597330495350
		);

		vk.IC[33] = Pairing.G1Point(
			21740032493471238058565380592379702895061549328712909552784915872382168503746,
			173143670623344891916178456193957596036440313989547472274087375358584820920
		);

		vk.IC[34] = Pairing.G1Point(
			12210223562366921331220969269963782533588206843204031327708530650417100898095,
			18381565632126213372117490170418698151680411384564128841262573412222307879275
		);

		vk.IC[35] = Pairing.G1Point(
			11033068919052607981982778133236827062628811756245502697599179954936633649636,
			3811644088929286950258764972623854387562487210508348494234470943835166135730
		);

		vk.IC[36] = Pairing.G1Point(
			8066133473534908331752469198318553841153459752374618803026224577281754530165,
			20573190098178757878711723551334338193666713185822181473213047956612277409383
		);

		vk.IC[37] = Pairing.G1Point(
			4184229676121547961956285548229234117338073362587758360795082658105231667273,
			10836026866500560609752309449644243563674412501840203572619307410070416461090
		);

		vk.IC[38] = Pairing.G1Point(
			13314230911502675912729297711954990293511508708565448477735330825353796554347,
			21058384945676632593002700303282046601305993169343336379811917608996015982179
		);

		vk.IC[39] = Pairing.G1Point(
			16303123108762141726898338195292361706836930449513928484341073139363573390641,
			6105382795260124548350343595933531788520786975949867841686234076122182491254
		);

		vk.IC[40] = Pairing.G1Point(
			8158580213764720168683858203671223918483161670606529742122416774749472944228,
			868031089455486040764017256283014697610454335122667771560222237363446493136
		);

		vk.IC[41] = Pairing.G1Point(
			7222282767458232951629687786026126494948566654387508883116066099629690592334,
			19260385510980781353323841975181226390470856164498095606206380615798788372677
		);

		vk.IC[42] = Pairing.G1Point(
			7602823225514948341882393818707447812828279361977777523584015964034989302189,
			235668925769009032399317743747336533747307739892100809878553222027750780739
		);

		vk.IC[43] = Pairing.G1Point(
			5891721277990046843270804331817131324615084118119591466748404527903316925215,
			6680726840403632053898100260329285180140563388314686252795239756829890733624
		);

		vk.IC[44] = Pairing.G1Point(
			16502453399074474278767003412161938531859070322187881641125996721429532122750,
			15993849772655731858052261291811095961720469159628279694016547070156717372890
		);

		vk.IC[45] = Pairing.G1Point(
			8708699596234948105695334311575502796516238430699177077452539658142393589890,
			12781245803466401411844966594219051165776258745892230144378216800189147922567
		);

		vk.IC[46] = Pairing.G1Point(
			11947590386596382882998984751361598214785719361295024259044356392223927791341,
			21805741313771956349674650102415513084231881680603794523073963020689671141561
		);

		vk.IC[47] = Pairing.G1Point(
			15533535365897938953384014695384080980325728034719809041449347201422374502994,
			6188248024980192172218736989252442745072043830108286053779951436501167045274
		);

		vk.IC[48] = Pairing.G1Point(
			8912118152098554166582208509519500790007623505259006079411145517729609078554,
			13956286539377694684399851868202670525882698855448909597455874809868267945651
		);

		vk.IC[49] = Pairing.G1Point(
			13396731864345874914487706343990222977896652060069032885996244584361410017669,
			1380970796254009897718849481175352642860671887826047928371959996435828745681
		);

		vk.IC[50] = Pairing.G1Point(
			2485291372661731474704067896425359982713490432185134333314615822589785939006,
			4433033753398076026790970391333681933752261561579521681108260194861099104197
		);

		vk.IC[51] = Pairing.G1Point(
			16137590437050486363459709585186070700299400048107219024215371239348206209799,
			18758230584639310689121897470650656815550336750548702009533065148066551355665
		);

		vk.IC[52] = Pairing.G1Point(
			15836604978454624124769519821451804424466363278654914774291313652144486112511,
			12419985654664588505296448784896127371224579168907587238573113551170063561212
		);

		vk.IC[53] = Pairing.G1Point(
			10700216922677745358189402584023777675725565212137753106669491452397053830291,
			5366067915274626118682765742807075753772400800324714402008055242257083748591
		);

		vk.IC[54] = Pairing.G1Point(
			12858822840950878420289306686134427589088375840150574399372487916821259162415,
			5257233445140975252970003003927979592622456238654343644345526231849476316000
		);

		vk.IC[55] = Pairing.G1Point(
			16719619199613636117640166053056718044423693240425638772753723301860213166136,
			20392312078478681162357869553463187284351993967005633487982909366939183574631
		);

		vk.IC[56] = Pairing.G1Point(
			186680719015132131539754198352523041818333771492448832379562666920469322171,
			16444505915678439637028171703875736489871665056557361178505428091031896251596
		);

		vk.IC[57] = Pairing.G1Point(
			1407510718813635513244819255210048406021716788483861263544816880039062977718,
			4749260674633221329441352786882197549442191514523318978776333022587628940003
		);

		vk.IC[58] = Pairing.G1Point(
			10946642445747793323218196995921657216142522218133098593912273783120806915216,
			20564149146187631483294257409685362834966181779609004240065504121298411734284
		);

		vk.IC[59] = Pairing.G1Point(
			8153550868581268245156075704316285085310716940235757431764070589199647632781,
			6833668541191566842364220069540756870382933659142712067304737071299283126753
		);

		vk.IC[60] = Pairing.G1Point(
			15713402610697952532682100581238315489075554011144352294606879258055835947833,
			1428378570624508067286973417309331013839851310647227105941011764312389655321
		);

		vk.IC[61] = Pairing.G1Point(
			20021410590877154260631124588811345269256908260051916763923501748542591314060,
			9601365014619641148686105292888398539753727360459783695520251974618459721219
		);

		vk.IC[62] = Pairing.G1Point(
			5443500134961167925735832208155285295338920624496529916845030682714454633993,
			10370586596796185159617793126927189467588147462161001357716270931457887095529
		);

		vk.IC[63] = Pairing.G1Point(
			11069315903185356844172231851002675235835238057992875190617865367806977165188,
			17133178009340459874942887086907767709178379018833212712046447782380286286107
		);

		vk.IC[64] = Pairing.G1Point(
			20946201534074667971610161599934954940468381827313881927863673509926946430776,
			12955162457929873703427740853666657147736230885106856425007122335783010959849
		);

		vk.IC[65] = Pairing.G1Point(
			10779713428933504346685569277992794760319431467629993034851843222644234384012,
			5545661162326520872203534168159623187321174372615419269859169440262265767432
		);

		vk.IC[66] = Pairing.G1Point(
			10542655612330462918166842834402032135788872385462987868523481941973644369380,
			13221711937160100614726640621919089716913503423661642418303069556421690693089
		);

		vk.IC[67] = Pairing.G1Point(
			20698783897714229440157118587057402004044205172440034287214514273719507879797,
			756612828470993749675314607086550474934727899392969147726316395927386961222
		);

		vk.IC[68] = Pairing.G1Point(
			12974081649308653018053366823060808846932606732013504074000515167295511167323,
			7411080857922416945197279224811265397378188375585579989037362262617391280514
		);

		vk.IC[69] = Pairing.G1Point(
			21451956696865046230262278119048764090882495983807665037683828554226064874191,
			11698907447655799128447215279482755314764202663265155300911378348438587222891
		);

		vk.IC[70] = Pairing.G1Point(
			20997844577817930091774755576112417546758538308867063330662400154553504242950,
			13431057023934718098497054701758521460361233125064773059284580653758535135033
		);

		vk.IC[71] = Pairing.G1Point(
			10754597754945772067227347912240686907500334798582136176274788466667634898411,
			2669070145552589859292264240219013599423005863181085632269379544037118887281
		);

		vk.IC[72] = Pairing.G1Point(
			21003820439769479303091074404508286500833641921410483750611235982264095427043,
			12173764811703966938412941613166666115197616255488258853155395232474715530508
		);

		vk.IC[73] = Pairing.G1Point(
			2667629639240557135705722407440879985473113534985769052090159605377195114198,
			868607072462352598660740636775332675080610966680839003114447183231560572194
		);

		vk.IC[74] = Pairing.G1Point(
			5003325948802806763381870592716545469020576171064583146516521028847741097695,
			14140206644382625963997494620755156562111250233184768007561391236718759479446
		);

		vk.IC[75] = Pairing.G1Point(
			3368485931617603598199770894854595974815110961437167154120698565708717246166,
			1156811985291189217135878039997691215015085039894637091463929900593640279689
		);
	}

	function verify(uint[] memory input, Proof memory proof) internal view returns (uint) {
		uint256 snark_scalar_field = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
		VerifyingKey memory vk = verifyingKey();
		require(input.length + 1 == vk.IC.length, "verifier-bad-input");
		// Compute the linear combination vk_x
		Pairing.G1Point memory vk_x = Pairing.G1Point(0, 0);
		for (uint i = 0; i < input.length; i++) {
			require(input[i] < snark_scalar_field, "verifier-gte-snark-scalar-field");
			vk_x = Pairing.addition(vk_x, Pairing.scalar_mul(vk.IC[i + 1], input[i]));
		}
		vk_x = Pairing.addition(vk_x, vk.IC[0]);
		if (
			!Pairing.pairingProd4(
				Pairing.negate(proof.A),
				proof.B,
				vk.alfa1,
				vk.beta2,
				vk_x,
				vk.gamma2,
				proof.C,
				vk.delta2
			)
		) return 1;
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
		for (uint i = 0; i < input.length; i++) {
			inputValues[i] = input[i];
		}
		if (verify(inputValues, proof) == 0) {
			return true;
		} else {
			return false;
		}
	}
}
