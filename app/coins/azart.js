var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

var azartCurrencyUnits = [
	{
		name:"AZART",
		multiplier:1,
		default:true,
		values:["", "azart", "AZART"],
		decimalPlaces:8
	},
	{
		name:"mAZART",
		multiplier:1000,
		values:["mazart"],
		decimalPlaces:5
	},
	{
		name:"bits",
		multiplier:1000000,
		values:["bits"],
		decimalPlaces:2
	},
	{
		name:"sat",
		multiplier:100000000,
		values:["sat", "satoshi"],
		decimalPlaces:0
	}
];

module.exports = {
	name:"Azart",
	ticker:"AZART",
	logoUrl:"/img/logo/azart.png",
	siteTitle:"Azart Explorer",
	siteDescriptionHtml:"<b>Azart Explorer</b> is <a href='https://github.com/janoside/btc-rpc-explorer). If you run your own [Azart Full Node](https://bitcoin.org/en/full-node), **Azart Explorer** can easily run alongside it, communicating via RPC calls. See the project [ReadMe](https://github.com/janoside/btc-rpc-explorer) for a list of features and instructions for running.",
	nodeTitle:"Azart Full Node",
	nodeUrl:"https://bitcoin.org/en/full-node",
	demoSiteUrl: "https://chain.azartpay.com",
	miningPoolsConfigUrls:[
		"https://raw.githubusercontent.com/blockchain/Blockchain-Known-Pools/master/pools.json",
		"https://raw.githubusercontent.com/btccom/Blockchain-Known-Pools/master/pools.json"
	],
	maxBlockWeight: 4000000,
	currencyUnits:azartCurrencyUnits,
	currencyUnitsByName:{"AZART":azartCurrencyUnits[0], "mAZART":azartCurrencyUnits[1], "bits":azartCurrencyUnits[2], "sat":azartCurrencyUnits[3]},
	baseCurrencyUnit:azartCurrencyUnits[3],
	feeSatoshiPerByteBucketMaxima: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 50, 75, 100, 150],
	genesisBlockHash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
	genesisCoinbaseTransactionId: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
	genesisCoinbaseTransaction: {
		"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0804ffff001d02fd04ffffffff0100f2052a01000000434104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac00000000",
		"txid": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
		"hash": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
		"size": 204,
		"vsize": 204,
		"version": 1,
		"confirmations":475000,
		"vin": [
			{
				"coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
				"sequence": 4294967295
			}
		],
		"vout": [
			{
				"value": 50,
				"n": 0,
				"scriptPubKey": {
					"asm": "04f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446a OP_CHECKSIG",
					"hex": "4104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac",
					"reqSigs": 1,
					"type": "pubkey",
					"addresses": [
						"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
					]
				}
			}
		],
		"blockhash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
		"time": 1230988505,
		"blocktime": 1230988505
	},
	genesisCoinbaseOutputAddressScripthash:"8b01df4e368ea28f8dc0423bcf7a4923e3a12d307c875e47a0cfbf90b5c39161",
	historicalData: [],
	exchangeRateData:{
		jsonUrl:"https://api.coinmarketcap.com/v1/ticker/Azart/",
		exchangedCurrencyName:"USD",
		responseBodySelectorFunction:function(responseBody) {
			if (responseBody[0] && responseBody[0].price_usd) {
				return responseBody[0].price_usd;
			}
			
			return -1;
		}
	},
	blockRewardFunction:function(blockHeight) {

	var nSubsidy = 0;
	var nSubsidyBase = 0;
      
	blockHeight = blockHeight-1;

	if(blockHeight < 100) {nSubsidyBase = 3750;} 
	if((blockHeight >= 100) & (blockHeight <= 3000)) {nSubsidyBase = 2;}
	if(blockHeight == 3332) {nSubsidyBase = 1000;}
	if(blockHeight == 5554) {nSubsidyBase = 1000;}
	if(blockHeight == 7776) {nSubsidyBase = 1000;}
	if(blockHeight == 9998) {nSubsidyBase = 1000;}
	if(blockHeight == 12221) {nSubsidyBase = 2500;}
	if(blockHeight == 14443) {nSubsidyBase = 2500;}
	if(blockHeight == 16665) {nSubsidyBase = 2500;}
	if(blockHeight == 18887) {nSubsidyBase = 2500;}
	if(blockHeight == 21600) {nSubsidyBase = 5000;}
	if(blockHeight == 43200) {nSubsidyBase = 5000;}
	if(blockHeight == 64800) {nSubsidyBase = 5000;}
	if(blockHeight == 86400) {nSubsidyBase = 5000;}
	if(blockHeight == 108000) {nSubsidyBase = 5000;}
	if(blockHeight == 129600) {nSubsidyBase = 5000;}
	if(blockHeight == 151200) {nSubsidyBase = 5000;}
	if(blockHeight == 172800) {nSubsidyBase = 5000;}
	if(blockHeight == 194400) {nSubsidyBase = 5000;}
	if(blockHeight == 216000) {nSubsidyBase = 5000;}
	if(blockHeight == 237600) {nSubsidyBase = 5000;}
	if(blockHeight == 259200) {nSubsidyBase = 5000;}
	if(blockHeight == 395280) {nSubsidyBase = 10000;}
	if(blockHeight == 527040) {nSubsidyBase = 10000;}
	if(blockHeight == 658800) {nSubsidyBase = 10000;}
	if(blockHeight == 790560) {nSubsidyBase = 10000;}
	if(blockHeight == 922320) {nSubsidyBase = 10000;}
	if(blockHeight == 1054080) {nSubsidyBase = 10000;}
	if(blockHeight == 1185840) {nSubsidyBase = 10000;}
	if(blockHeight == 1317600) {nSubsidyBase = 10000;}
 
	if(nSubsidyBase == 0) {
	    nSubsidy = (21.000009 - (0.000009 * blockHeight));
	} else {
	    nSubsidy = nSubsidyBase;
	}

	if((nSubsidy) < 2) {nSubsidy = 2;}

       var nSuperblockPart = (blockHeight > 64800) ? nSubsidy/10 : 0;

       eras = [ new Decimal8(nSubsidy - nSuperblockPart) ];

		for (var i = 1; i < 34; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

		var index = Math.floor(blockHeight / 210000);

		return eras[index];


	}
};