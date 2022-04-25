window.addEventListener('load', function () {
                if (window.ethereum) {
                    window.web3 = new Web3(ethereum);
                    ethereum.enable()
                        .then(() => {
                            console.log("Ethereum enabled");

                            web3.eth.getAccounts(function (err, acc) {
                                if (err != null) {
                                    self.setStatus("There was an error fetching your accounts");
                                    return;
                                }
                                if (acc.length > 0) {
                                    console.log(acc);
                                }
                            });
                        })
                        .catch(() => {
                            console.warn('User didn\'t allow access to accounts.');
                            waitLogin();
                        });
                } else {
                    console.log("Non-Ethereum browser detected. You should consider installing MetaMask.");
                }
            });


function init() {

  var mintButton = document.getElementById("mintbtn");
  mintButton.innerText = "Transaction In Progress";
  mintButton.disabled = true;
  const whitelistAddresses = [
    "0x84aE2f756110352B432977d424beD9E22313fbA3",
    "0x157714a712a483C8e490F4276E2CCcA253A09a3a",
    "0x945A4cbae4eF06C0114F53457404A49a6765d9a6",
    "0x67fD8C5e6ca5f2db4eb0b57966C11D2B45F452dD",
    "0x2513c68fA53B18Ae552E441eB9D9C780bd37A2d8",
    "0x337060813b2353DC9689efACd5CeBAB65881Fc68",
    "0xfF804aA1a288b3f9626B031d2cA9BdCEE73f6c85",
    "0x440599f259c3b610642c3775d0703FCdfef03c93",
    "0x5cbf0e62f97ca78AcACB6eF554189Bcbdba3BEbA",
    "0x9cb39db7b663b8a6a2e038e2f56e58d507a32088",
    "0xA6aE963A928bccA7f427cCe4BD66Cddd54f0fab3",
    "0x34A168dF6b4cDafd97040b24d54788Dbfda33199",
    "0x1B6aC0E2eAD4ce8e968ead9e57d3B8216d00558E",
    "0x5932978e846BFFe78cC51AA01C5FbF1919088AC8",
    "0xd802e753576AC46790494A64F4525De79A7Ea8FF",
    "0x83F3538642ed35A28E97991b0D318a98Ff2fC381",
    "0xcBBCDc4C108D1376D76E07860610A3890beDB389",
    "0x5f21090282f659a0a89CfDC6298455C144aEF6ae",
    "0x2fa7DCBdb8F08038E9EA666dD1678D66a90F8d50",
    "0xb3756Da873e52175FE350FdCE318549a63326a3d",
    "0x982083f8F2a15fd588685f6F0E7372c3642f3936",
    "0x5EC90Cca6069bc4C5ABf5D5AeD68111B2cDA47fA",
    "0xdaBFA623A6068523ac26fE703f837DA5A1744C30",
    "0x330AA0a042347313B68Be4CB629323488CF19D20",
    "0xc53EF2Ea0785822373FEd4a416a75B8961AD7da1",
    "0xc93f85364A40e05045f92FD1F11229a132E7DEE7",
    "0xDD145433DB6E5113C3216F125FF675a54dA1AED5",
    "0xF412FF9A78594a44DCD036f1185eacaBb1000Dd9",
    "0x79cC337f2b28833A317B63512330890E7F1269DD",
    "0x894FB6D686080B72d61F97Afb9FCC00DaBD53C52",
    "0x37526111205d2391c5d5B8E961c6503B0053ca94",
    "0xd5d43b0225698F273D9e007229e371ae5cB9d4Bf",
    "0xD575b524Da6A3d10924c5614FEe69D9Af1806a09",
    "0xF3C2e372504C8079D540EC759fD240c9F7cbfaaB",
    "0x43Ec5640E18F7384761d8817AA55d38C9a03D855",
    "0x503c456F6344224Cd9e0E4a6fECA323017E388E8",
    "0xB6293ca4916c044e346e3dED43F71D937456C836",
    "0xE27f91dD0aC362EbA67b7Fc7f88187df25509d6d",
    "0xa7591749E367Fe3f7799941f962fb68C5F0D2FA9",
    "0xc97fe7E57b30916895bFe3FEA3C59B49147E8a84",
    "0x73116290B6eA7639f8C5831102c82208a03eC11c",
    "0xb4a6c41C79D8d208a74486cBE90Ee2bD24Ba23c5",
    "0x7072999dc1fABf1Eb5039219091EAdA2e279DeeF",
    "0x97FB43a567487C3312911e57b72a2917a5F077A6",
    "0xe8067471cE0b43cceA6e81A5f80a41BE59B05AC8",
    "0xA508366192c57d7e4810fbf61356e4c3D4DA1610",
    "0x03ebDB65a4B1d2C16dd24968316Bc441FBa8Ad13",
    "0xD89522b2C23137C356FbF9090341Fd74432FA4A2",
    "0x8C212bF75cdfeA6A4C5e40E7023f80eDB17f80F4",
    "0xEE31d60c2b92acd23B72D7bB88a3C6b23DBDC821",
    "0x714BfD7ec3db984A875E719082f922B8e7aC71AD",
    "0x1947C4a5903C399B5534db423A45E3965c4B9a5C",
    "0x84B31BbEbCBC0e9a7D5462ef4Ffe58739435DE77",
    "0xC598ab0B1eb7beA4b8c5A4BcDD26aFa64686B344",
    "0x4fB5Ae963c4fDa03D98Fc3ff8ff287FDF49dE548",
    "0x5c6cE6ccF6D9FC425FC0D5de49c36e270cBdd667",
    "0x453CFa55aa73e0901d8D4fC91999c0649a37Be65",
    "0x8cbF241963B608d491D36518a328a6Ff7Dd82040",
    "0xd847efd6bC3Ca443a22ea4f204955B8AB79e35eB",
    "0xF6D16557767f76C35bCe496bC5414ebd70517CBd",
    "0x10c45c8B122916Cb0C4B01f3DF54E34b46B0Bc9b",
    "0xb1274bA1E30F138986f281c19FBb0874ca278192",
    "0xdec6d5bDa5FFee3c5f5080c63cCE22396442ece0",
    "0x4818bB09165d43DBA211a56D215dD913b749FA4D",
    "0x338f6ba8E1CB80964f30A088157c75957E2Fe563",
    "0xD9788d280C6A2A23F5986CEfE3A22CEb03895BDE",
    "0x3fC1832f425f5c491d6A6B6f9DF1783F7E591959",
    "0x90424f8A6026E1198CDdc1382963Fe331f60B0E5",
    "0x2f170E06d19B8c32c89220BCF215B6FCaA444D18",
    "0xf67B110994a30529Fb80f75F86ce4c2BDc7679d8",
    "0x7697C2958cb36975e7249A9059fBeba5fd62cEe8",
    "0x34fEFF28071b5635688679cEe044E86D29304E7b",
    "0x58fc0A7B90A661831F60621CaDfDc579ab9c05dF",
    "0xA28CDd60bCF443eA117659013928cc56AEdc572e",
    "0x59B5fe24f78a6B6e26207b6af242e341986858d3",
    "0x779a5a334F71Ed74cf6509Ae73E93E1441628b32",
    "0xCBaE0841D72C6e1BDC4e3a85Dea5497822F27d18",
    "0x80874B5155bF0ff22962C01Ee766B632a7A12219",
    "0x154F6e027B4987C6CCAa5d82809fB39Ced052EcF",
    "0x6eF23ae0bdeb2b7Df65D59a32392F833F2389Bfa",
    "0x6891334BfE2EFb5a40930397D4DF65826BCf193e",
    "0x8922639Fd2B3000864448Ff52c81d6d6F4B56FB5",
    "0xa60cee75d63D0C53342739781D0c4cf52EFF3c8F",
    "0x5cf965d823c867288a537fc2061fadbf7fd7a4e8",
    "0x346c94cEC7cBdAa12253C4959e382Ca8D1aBBB94",
    "0x4e4D2b36F9f0DF8b2F3Bfaa32E04FDE1E78bb560",
    "0x9F7837b667AFB0aceC5d315447FDe31DA550A644",
    "0x5F794Eac242FEdB3C3d1137b157Bf0d328960e4F",
    "0x39364e5bd0aCB20DCE41eaE194c69a5d9b4FF451",
    "0xdf9ac5B98a27DB8Bcfff1F27830Ff121154B8609",
    "0x341D13B93a9e6eC3B9b2B5C3EE7747D6eC95Cf69",
    "0xCF95cEc457A16c3F2e7c3205dae53526eeCAB0bE",
    "0x4A1D34D2d1e35790562B062BEc329784B1aD191b",
    "0x686CE7704Cd6563F05C5389Be6354883f03F7f6B",
    "0x5cB477a415a158Be5819Bdc84177948f97980D19",
    "0x1bb1063E98d85D25c398f033293a3F91DBCa7Ac0",
    "0x7CE7eDBEda6A5eD09588b758D5245EF0D7587d80",
    "0x3b183B08932725d976F4646489B9164131563e1c",
    "0x7833bb98bf9b155f9824e36b2ec5d7e708a88f9f",
    "0x662524fa5E9353fC29C1A2BEd0dba6F9cEA84043",
    "0xc5e0d3188b8FCf6BF8f79B5770CF63067CcAE55d",
    "0xD89863049aABCd4626590fdebD00aF11D8233173",
    "0x64786a62ad601a9830ffb48b6b0085b9e8adefd2",
    "0x4c5E55F093dDA6b59a1072F9d39598d60F28E65f",
    "0xc082bdB52B9F341d8ab5D8aE9dA708d13c230cca",
    "0x465B10c045b96cC33f946285d814aa45F33d2131",
    "0xFEb4589082971162a5d0a36D1b1dED0cDee28BdE",
    "0xB3FCe91e25289661484Ff4b5b6BE2a3Ee5a4A83d",
    "0x964BE8e582C2C7045fD8B7a44376AAC7B48F0129",
    "0xB8fa2824F3f9030a99c445C8Ab03116C14eD4855",
    "0xa562b7f167369c9cf01ca62336e44d6d1b5a7ab2",
    "0x901c20dfe0e6bef2d51d2B15111bbE1335171aD1",
    "0xb8a9E697757b3767047e27c9B1cDAA2A2eF0C0D8",
    "0x4893da1C09228ab22d56c622b888eB9b5fa589D3",
    "0x32DB22Dc3432DF1D5BE8bbBDBb790c4EB59ffA23",
    "0xBFFc3dd2490c44015c6eA06d62B8bFac7F666663",
    "0x624D3fFF641F6B93724Bb96F59Fd306690C62ef2",
    "0x742cbBBd1d5D5EaeA01E909679C2733d60a10Db7",
    "0x400e55e2589BB0407e4DF9deDd9b1842572787A2",
    "0xb59e46C683E930a093763885DcCDad10AaD19a7b",
    "0x64C2838ae4EA458729FBF317C7BF5C47CD52B887",
    "0x097C8FA2846429eb2E60a7b4de6A360C3bfE744f",
    "0x842E2861bD7D401A5B916FE97dDE0165D37992fc",
    "0x525917F70E93Bb2329225A1Fb6a38Ba0c8CD1DD0",
    "0x6683b596eb69095771515f0e9401ae0c231f17b7",
    "0x01792159Bc843Bf661b94e2079123b31E193007d",
    "0xB47bf2478d795284A6843468357F1aA97a0eb3DA",
    "0x1DbBEc72Fc72406851aB9d42c18dc52aBEbBB287",
    "0x4957C2d6fb36d60e7438Ee3915F066e5392DC45B",
    "0x887a1F14D479E9Fdbb18bF9DC4af56f31F62B61D",
    "0xac7F43980FE846D4B49EA9153F38feD690877293",
    "0x0c69d98a8d8A46eB66F9FE67BF05f5B556F71F1a",
    "0x776112510F233bdF593B864ba1E7110fb6b06EE5",
    "0xd052f72f406fAc7A24809213b4CF86Cf4C62888a",
    "0x2222F721FA44b151eDB875414E80343164B71d4a",
    "0x8eF11b861a646eCB4a34d79493a5D74a8aEa3B78",
    "0x59A4097626d038Ba608001b69BF36C051c47E5aB",
    "0xA2908e1339ECc6723d8E94D9142e6E14D55327b5",
    "0x8E6aeb522Ef731E440Ea6dFDFAc06E37f2DE93c4",
    "0x353D48f0d95c6aC3bAEade8cf3bD1d63D3264b29",
    "0xcf46d7DeF9a16966661506EcD9f2235Cfa166377",
    "0xFaDF08352ee5Ec6e685cb64e19a5d89b2512D2a7",
    "0x3F30600669223E9503B66Ad4C1B31aFDC4363A30",
    "0xC331C643796597Eb5Ffbd75D31726c4ebEfE795a",
    "0x67278B044bad838F06e0C986dc3493B442FCef68",
    "0xAfe1cF9c6434a440CFD8847777B14E422AeB959b",
    "0xd34a6B9Fca0867988CDC602D60724F822F96ffFD",
    "0xdC2e59948ca907145114c40Ed5a77BF38D39d806",
    "0x551545C6aa92Cd6ED0E2fe9487008AC2bD91056A",
    "0xbAA671743125E2afa3AC2C1018Cab16BA8DCf071",
    "0x5906e1666410dded718ba20A4ccA92164Be4e25E",
    "0x423Ac9E50225cfdE8902071c62953013FdBF8181",
    "0x3A39b7693c1705ba1aA40f56B360CFc99dbc6fBB",
    "0xA0c384F2a19D7444477B101f789F4ab717cF5C2f",
    "0x4C85c0Af962545c81c3195694A36f63A0B27c198",
    "0xF6e804E28E9D308487faB89F644027B11a0A574F",
    "0x560e6dDf4d8C46E02B24B9257afdB0722102d0Ee",
    "0x8396a60f85bbA2939CD51fa6c8Bc5991245741E7",
    "0xc4c5264564189B60f7625B9b65D42B925aa1f00E",
    "0x666FE421091F0627ABC316EFe7B4B9F9eF54804C",
    "0x94c311cb9f6a7dd75B0b89A70e225F6e45B37424",
    "0x61Aa99A1F062d359d9Ae1b8B17EdE0Aca2fce6f5",
    "0x6deBB7159b0a8874A75ea91cD6EDA32763bAf215",
    "0x0f904798Fe3423f633fAb0C7b46b6F1F3b31AE25",
    "0xf9EEdDAA063cc799A80aDa98E17670Aef29E24c9",
    "0x090941a93cf21c0811D880C43a93A89fDfac3000",
    "0xFbdc1a93a05630955f3b3Cf42349A79e9590648A",
    "0xE39649E045e5A31ffE05B612997b49178973e5F7",
    "0x1EB380F121b3B337a4e033E91f0Ec5a2c35fAAFD",
    "0xbbdf53A794cD29F9f13a564CF866Bc99Ee5A6b03",
    "0xa2752263eBec601610dC0ee143cE4C74DDdE927F",
    "0x5dc031C11D2fB77Abaaa1573aA2C63285212B726",
    "0xCa95Cb3c749227F2DAbc94d20F1dec931616596e",
    "0x9B273FD51e5BE2Ad543e31F729FC65dCc1cd6fB3",
    "0x48a9AD02098e995cBD01ecA3Db82d339e6ea9845",
    "0xdf441583e2f978aebeefcd6232f525f8885aba32",
    "0x9bEB6829c7A83Ac1c10bCEc909daE125E5A01a61",
    "0x518657b6b2e32325283cDFE8886A2f0c0ae4C277",
    "0x654D556ab8104Da43Aba8eF8592691967d7F1C28",
    "0xCF66D49290141FA45eB7c2B57547C97908b8A661",
    "0x17d06Ae7Dd16551c99E831224d2f5e50e10daeeC",
    "0x123e1646cE629B06a0BE7f255cE022112C5eaFfd",
    "0xDC48157248d0020DF45AEe2e0BD1E25590038a88",
    "0x1ebB43e36Bef7748dafB95c9c420F6335891CB97",
    "0x15bD815A3F6Fb351b06Df8B0b82e0bE63a529270",
    "0x3b1e21A91870B3021E801233DB41c717c7002662",
    "0x76E5B98221904F0cD7822f877aE9a69eC68E2DF8",
    "0xAB751CbB6c32FA82DA14CAFD40d3e6D5Ba621Eda",
    "0x053CBA8511f4ec58f175057162a31EB7Bd0d812F",
    "0x06E3B9b3517968bE0C79200652CeCC67e8f786fA",
    "0xBa10cC68B5E371DDd8391201bdD34EdCaA4e40C3",
    "0x8Edab863c5C7EcCa66Aa6D09b1f1DC81F1875fb0",
    "0xc65e551863b3b582587e117d62005767385c5612",
    "0x6679896A64c7Bd7380a703343DFdbe0508aD9A3A",
    "0x4129B4B0016E62E8EC2d046CFD8a95CCdB134E36",
    "0xc3d18Fb1EcE6A34D813Ea15260692361f85e1AEB",
    "0x38447c8eEb9A429d7cac1Eb978404846F3622C9f",
    "0xBd6e93aFA62919539f69356330c5e2cEeE0996D7",
    "0x01d9003aD0B17673b863D8204Bc4Cdd113334039",
    "0xa2fcEc6B3AE4D1c3044FcBd04d91ac5049910Ea2",
    "0x45FE3116bfDFB985297901cc5412f052cdf7B317",
    "0x99b6A8e76cD558B88897a35108d0B47125b24E7B",
    "0xBeA90AE1a9A4aec663E3b8A519f395D318Bcab5d",
    "0x1252f6928aEb0Af94b66F26D89F841FB9106D92e",
    "0x266D7F9cB5e8F963043F62accDAa1d800e49B6Ee",
    "0x7196fB7F9f1DdA42B142dB8CfEBc28EC77A3f2A5",
    "0xE02aaDF578Fe5932B8e45af8b4116f6843BfA8Fe",
    "0x3bF5B872B581eC8912b43b3345097D13c41DBe29",
    "0x63571cC6f170aDEcE604671b635538BFfddcE647",
    "0x5493FA08317987918dd6d6D811912f358e79Bbd2",
    "0x8BD467562fb0FA218139b0550009d764007e9D2D",
    "0x9d1D2a0B4a4c01e76b8A62b26b9c3dd777A24c02",
    "0xc263F16782cA92b16674174969c4af167611E8D3",
    "0x15caF267bA32020623A2E35F6365662d1E9e9202",
    "0xB8011C2Fee57a382d5c27078A8b601392076364"
  ];

var abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newuri",
				"type": "string"
			}
		],
		"name": "setURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minted",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mintRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "supplies",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
var address = "0xCAA84d812e8922E0741cAB68dB9D102c6e4984eF";
const id = 1;
const amount = 1;
const contract = new web3.eth.Contract(abi, address);

//if metamask address is the same as address on the whitelist, then call mint function

web3.eth.getAccounts(function (err, acc) {
    if (err != null) {
        self.setStatus("There was an error fetching your accounts");
        return;
    }
    if (acc.length > 0) {
      for (let whitelistIndex = 0; whitelistIndex < whitelistAddresses.length; whitelistIndex++) {
        if(acc[0] == whitelistAddresses[whitelistIndex]){

          if(acc[0] == "0x84aE2f756110352B432977d424beD9E22313fbA3") {
            mintButton.innerText = "Transaction In Progress";
            contract.methods.mint(id, 5).send({from: acc[0]});
            console.log(" Developer account minted 4 Token: Check Opensea");
          }
          if(acc[0] != "0x84aE2f756110352B432977d424beD9E22313fbA3") {
            mintButton.innerText = "Transaction In Progress";
            contract.methods.mint(id, 1).send({from: acc[0]});
            console.log("Account minted 1 Token: Check Opensea");
          }

        }

      }
      mintButton.innerText = "Your Address is not on the whitelist, please the refresh page"

    }
});
mintButton.innerText = "Click Here To Mint";
}