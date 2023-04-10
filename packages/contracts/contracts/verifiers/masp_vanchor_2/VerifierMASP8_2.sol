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
				19053854912668384827274435496472873976131801296308240370835395865433524417289,
				15361230454354497474522662082033025715589856365513723643429935430095302907916
			],
			[
				431077964015933522444226281749973112948109424342050472540328021327447351813,
				9019600036337909040297081375665584039930854614451876142900714988015231561086
			]
		);
		vk.IC = new Pairing.G1Point[](40);

		vk.IC[0] = Pairing.G1Point(
			4084600974882797730696139627034636400184704590097682630247151802449018930853,
			2641395625472569885644783493684264996397920253183643311863510269697866469821
		);

		vk.IC[1] = Pairing.G1Point(
			17498133907098527341627487714953050546221341354305172911209130818639352225360,
			4041071245211942431321600887986187635814841921997118033028949431563899595538
		);

		vk.IC[2] = Pairing.G1Point(
			6622776834408359045767975131104619378177779093496743297484488409034471879890,
			1917522550505202294662624717152481638453873792819096799242558654015360091411
		);

		vk.IC[3] = Pairing.G1Point(
			14325766274186865032645329896744387513011682842559027038145190255816935410003,
			1124999077741748984202471119338255299265213311100383457244089196892443226788
		);

		vk.IC[4] = Pairing.G1Point(
			19709017804372565232064063090490831043401164763118959968849159200427935298092,
			12063616577116205069341316466447882659133095814682440440147095033831780834533
		);

		vk.IC[5] = Pairing.G1Point(
			5955728964215458967453850647405632003513133565894993012528390090252665725963,
			19451660254285228172050687051017954626073608523018178004720571568560558221862
		);

		vk.IC[6] = Pairing.G1Point(
			16081121311328410558827672125923627004383539665206801467020589858428535538649,
			2595967562325588403233775230423504749573930914741561047767904390884696414219
		);

		vk.IC[7] = Pairing.G1Point(
			4638479452731479471385414839547097038803070632533938749809654575743990989462,
			21091439019096103964130349547907491405310216912237561591295402922950583248459
		);

		vk.IC[8] = Pairing.G1Point(
			14689190136943537342077663589005539381512286367750112490298481505587025748745,
			2705039391391092327831581248503499531559291368640726493394977908564727890611
		);

		vk.IC[9] = Pairing.G1Point(
			13201329506601040742967250609866759189551852783794297408179146746828188548179,
			13221735680222768858358813933218850544244171852459873811009990081921306903348
		);

		vk.IC[10] = Pairing.G1Point(
			13226454452393797127900326409469858487097723971473476684312696559520390381060,
			11231171151080553694302062623966178839713647925045682057508583027053793409093
		);

		vk.IC[11] = Pairing.G1Point(
			9736960105153836260253803721866989672164364872740551042523164697040122288028,
			5041006284298959000899735083587295042261003270491279516855649268259356174181
		);

		vk.IC[12] = Pairing.G1Point(
			5193167158140726531540093620065837900113992677841282772494975645010973316297,
			6989149177940148217167809912891670909009920579558056081756921988062656938356
		);

		vk.IC[13] = Pairing.G1Point(
			5555370019776549594880350925296258748252552599367258774114948358318871780211,
			16989304154331473414467421741068366766160867760504966457587279456231473310359
		);

		vk.IC[14] = Pairing.G1Point(
			2668897166857503429978242275267099479943265170416421119804050250220823625728,
			16158955139309949746997120792167369175239567429754122319567559261814942665681
		);

		vk.IC[15] = Pairing.G1Point(
			18967712115318051643464324901906787192005023469988815372516504718751201503273,
			590522594249661883773785324560894159168798823443945690445426171172322427661
		);

		vk.IC[16] = Pairing.G1Point(
			8617566502797346826196717874369247331201357204647798917172936832216790865389,
			17628919332280003214257357611826114650526757773357219928054841685313591183063
		);

		vk.IC[17] = Pairing.G1Point(
			3156126864635066971731574976426739403140060485905824711290237650591130194859,
			2040241780811860556696561142373730352636137757896564752375480126880410761215
		);

		vk.IC[18] = Pairing.G1Point(
			292934493247022536576463973074330243901984681370975222860969997310377070325,
			7470766826103376899704799230297694152205965882858929022277634869215910001465
		);

		vk.IC[19] = Pairing.G1Point(
			3663277643984087679851704987163710368253084433571138818533613607807486050214,
			11644214737691298529115315815235866991172026396698012474559986285820570355742
		);

		vk.IC[20] = Pairing.G1Point(
			21105618446433434981224456146413321301529545983235796116230240540625138897556,
			6107520034670341633102649902157125593249764587407730786972353979852978726058
		);

		vk.IC[21] = Pairing.G1Point(
			19669247853676000428900448473864905079383820544607567759998940512481232521475,
			14022223898292082411549402476676534706538381934906031180277642308299587081324
		);

		vk.IC[22] = Pairing.G1Point(
			12524388680100415889394245851856102257228974430632773478135088069170999710167,
			16481325995404454864655540890545440610622893512411172163959391563077156045605
		);

		vk.IC[23] = Pairing.G1Point(
			12471329336415098525101952699394734824540871081085027726819242193384150402749,
			5170905182225668415149828921110653905396979514208809529921058267723697780324
		);

		vk.IC[24] = Pairing.G1Point(
			20416935763584484715020758403947173590385153288335196637586697594866670689920,
			225442723039968288574728429525084443576236286413450250501552883973809403279
		);

		vk.IC[25] = Pairing.G1Point(
			9543857833635998466679683638132705003924672628675054811997242924705746756868,
			5748477435971418932190591552895019228641812644345582226632335281380097103684
		);

		vk.IC[26] = Pairing.G1Point(
			3537810474738856864105828048674985766198013913802491673283748531679719429385,
			17348375914347887583150183557360423652683030284960678129447392485821999155656
		);

		vk.IC[27] = Pairing.G1Point(
			17729487347257644150148072599915658807661252264681936819567619959749348426249,
			9689028027406094020408556871552938385298999045740207141550668206280931453649
		);

		vk.IC[28] = Pairing.G1Point(
			15457952310860633179187717971577503838982262783155544172211370645653150926543,
			20479673004736091476005734328610981027582826541801798575731921948954619079485
		);

		vk.IC[29] = Pairing.G1Point(
			15627761220274179408630996339719716485900950037358473882643871865300131268322,
			10934620163923363987557154671912834882547730896192531802278479169539669652339
		);

		vk.IC[30] = Pairing.G1Point(
			10036691528584894329773156689693348634971415707279800391561017436586540820646,
			15182560616815616678236028999047159643458983907231314719609382816032225420695
		);

		vk.IC[31] = Pairing.G1Point(
			1383930615172003543393188503259917507656843713112560604953385737019765988812,
			9950916711057399001172253469501440144496940517385570975886083385104972574167
		);

		vk.IC[32] = Pairing.G1Point(
			13674721402126675834767833278349727020062704055404226927649100413830777558817,
			18147505905965306375416994721157627645448379735446267200422492757083101893759
		);

		vk.IC[33] = Pairing.G1Point(
			20893802746119154212196340634298017769411770289034749670900647967638104393172,
			14166647825788515467683504931017154627982396945662432062415731770452531540980
		);

		vk.IC[34] = Pairing.G1Point(
			15306664033836890431866696452876931301252800960302056470987267608248802631002,
			6881883680808370490834341031611128034331242998937170425434289898818168255303
		);

		vk.IC[35] = Pairing.G1Point(
			13926949222740456260709278162820724796080952496300223546498695530108045493876,
			6441734420729538709605068434346338532656346168048194175454546254218790614945
		);

		vk.IC[36] = Pairing.G1Point(
			1199785486619130102438976254003498217362750324737265337375759977929276867432,
			4121980849245316218405407531132448981307008135344290544363071541421339140519
		);

		vk.IC[37] = Pairing.G1Point(
			4073347148348149027308247189897233025745855167059592555908270650880116876570,
			324159120084809466544252998935946930040782089505466186415042162993666918662
		);

		vk.IC[38] = Pairing.G1Point(
			2468334784566700815287104595034735095878356466533770450084897600493564712467,
			2444418666954861404275946841478594471897666186209173568916916118853797095612
		);

		vk.IC[39] = Pairing.G1Point(
			14763388523682285050912101838879468553842636364567980225649316115879882763838,
			20157076644225747014652872330393562534274691052730677059257209273882809673915
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
		uint[39] memory input
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
