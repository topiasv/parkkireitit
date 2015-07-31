angular.module('starter.services', [])

.service('QueryService', function(){
	var _from;
	var _to;
	var _via;
	
	return {
		setFrom: function(from) {
			_from = from;
		},
		setTo: function(to) {
			_to = to;
		},
		setVia: function(via) {
			_via = via;
		},
		getFrom: function() {
			return _from;
		},
		getTo: function() {
			return _to;
		},
		getVia: function() {
			return _via;
		}
	}
})

.service('RouteService', function(){
	var routes = [
		// {
			// id: 0,
			// from: "Siuntio",
			// via: "Kirkkonummen asema",
			// to: "Tammasaarenkatu",
			// start: {
				// h: 6,
				// m: 30
			// },
			// end: {
				// h: 7,
				// m: 52
			// },
			// duration: {
				// h: 1,
				// m: 22
			// },
			// price: 0,
			// places: 6,
			// maxPlaces: 50,
			// route: [
				// {
					// start: "Siuntio",
					// transport: "car",
					// distance: 19.1,
					// duration: {
						// h: 0,
						// m: 22
					// },
					// end: "Kirkkonummen asema"
				// },
				// {
					// start: "Kirkkonummen asema",
					// transport: "parking",
					// details: "6/50",
					// distance: 0,
					// duration: {
						// h: 0,
						// m: 5
					// },
					// end: "Kirkkonummen asema"
				// },
				// {
					// start: "Kirkkonummen asema",
					// transport: "walk",
					// distance: 0.2,
					// duration: {
						// h: 0,
						// m: 6
					// },
					// end: "Kirkkonummen asema, laituri 4"
				// },
				// {
					// start: "Kirkkonummen asema, laituri 4",
					// transport: "bus",
					// details: "174",
					// distance: 19.1,
					// duration: {
						// h: 0,
						// m: 38
					// },
					// end: "Länsiväylä"
				// },
				// {
					// start: "Länsiväylä",
					// transport: "walk",
					// distance: 0.7,
					// duration: {
						// h: 0,
						// m: 10
					// },
					// end: "Tammasaarenkatu"
				// }
			// ]
		// }
		
	   [
		  {
			 "length":31354.833,
			 "duration":2760,
			 "legs":[
				{
				   "length":689,
				   "duration":573.78,
				   "type":"walk",
				   "locs":[
					  {
						 "coord":{
							"x":2524621,
							"y":6667640
						 },
						 "arrTime":"201507291445",
						 "depTime":"201507291445",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524632.6,
							"y":6667633.6
						 },
						 "arrTime":"201507291445",
						 "depTime":"201507291445",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524743.7,
							"y":6667673.2
						 },
						 "arrTime":"201507291447",
						 "depTime":"201507291447",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524799.6,
							"y":6667730.4
						 },
						 "arrTime":"201507291448",
						 "depTime":"201507291448",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524790.8,
							"y":6667876.3
						 },
						 "arrTime":"201507291451",
						 "depTime":"201507291451",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524743.8,
							"y":6668068
						 },
						 "arrTime":"201507291454",
						 "depTime":"201507291454",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524735.7,
							"y":6668085.3
						 },
						 "arrTime":"201507291454",
						 "depTime":"201507291454",
						 "name":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2524789,
							"y":6668080
						 },
						 "arrTime":"201507291455",
						 "depTime":"201507291455",
						 "name":"Kirkkotallintie",
						 "code":"6050252",
						 "shortCode":"Ki0552",
						 "stopAddress":"Vanha Rantatie"
					  }
				   ]
				},
				{
				   "length":30514,
				   "duration":2100,
				   "type":"5",
				   "code":"6173  2",
				   "locs":[
					  {
						 "coord":{
							"x":2524789,
							"y":6668080
						 },
						 "arrTime":"201507291455",
						 "depTime":"201507291455",
						 "name":"Kirkkotallintie",
						 "code":"6050252",
						 "shortCode":"Ki0552",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2525249,
							"y":6668110
						 },
						 "arrTime":"201507291456",
						 "depTime":"201507291456",
						 "name":"Jolkby",
						 "code":"6040217",
						 "shortCode":"Ki0417",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2525531,
							"y":6668160
						 },
						 "arrTime":"201507291456",
						 "depTime":"201507291456",
						 "name":"Heikkil\u00e4ntie",
						 "code":"6040218",
						 "shortCode":"Ki0418",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2525706,
							"y":6668286
						 },
						 "arrTime":"201507291457",
						 "depTime":"201507291457",
						 "name":"Kaksosvuorentie",
						 "code":"6040221",
						 "shortCode":"Ki0421",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2525969,
							"y":6668407
						 },
						 "arrTime":"201507291457",
						 "depTime":"201507291457",
						 "name":"Hirvitie",
						 "code":"6040224",
						 "shortCode":"Ki0424",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2526388,
							"y":6668374
						 },
						 "arrTime":"201507291458",
						 "depTime":"201507291458",
						 "name":"Karhutie",
						 "code":"6040223",
						 "shortCode":"Ki0423",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2527011,
							"y":6668804
						 },
						 "arrTime":"201507291500",
						 "depTime":"201507291500",
						 "name":"Killinm\u00e4ki",
						 "code":"6040227",
						 "shortCode":"Ki0427",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2527594,
							"y":6669049
						 },
						 "arrTime":"201507291501",
						 "depTime":"201507291501",
						 "name":"Stor-Kvis",
						 "code":"6030214",
						 "shortCode":"Ki0314",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2528102,
							"y":6669309
						 },
						 "arrTime":"201507291502",
						 "depTime":"201507291502",
						 "name":"Kvis",
						 "code":"6030217",
						 "shortCode":"Ki0317",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2528427,
							"y":6669571
						 },
						 "arrTime":"201507291502",
						 "depTime":"201507291502",
						 "name":"Jorvaksenkuja",
						 "code":"6030222",
						 "shortCode":"Ki0322",
						 "stopAddress":"Masalantie"
					  },
					  {
						 "coord":{
							"x":2528723,
							"y":6669836
						 },
						 "arrTime":"201507291503",
						 "depTime":"201507291503",
						 "name":"Autioniityntie",
						 "code":"6030225",
						 "shortCode":"Ki0325",
						 "stopAddress":"Masalantie"
					  },
					  {
						 "coord":{
							"x":2529176,
							"y":6670323
						 },
						 "arrTime":"201507291504",
						 "depTime":"201507291504",
						 "name":"Ingvalsby",
						 "code":"6030227",
						 "shortCode":"Ki0327",
						 "stopAddress":"Masalantie"
					  },
					  {
						 "coord":{
							"x":2529532,
							"y":6671170
						 },
						 "arrTime":"201507291506",
						 "depTime":"201507291506",
						 "name":"Hulluksentie",
						 "code":"6020210",
						 "shortCode":"Ki0210",
						 "stopAddress":"Masalantie"
					  },
					  {
						 "coord":{
							"x":2529763,
							"y":6671524
						 },
						 "arrTime":"201507291507",
						 "depTime":"201507291507",
						 "name":"Masalan kirjasto",
						 "code":"6020215",
						 "shortCode":"Ki0215",
						 "stopAddress":"Sundsbergintie"
					  },
					  {
						 "coord":{
							"x":2530453,
							"y":6671351
						 },
						 "arrTime":"201507291508",
						 "depTime":"201507291508",
						 "name":"Sundetin puistotie",
						 "code":"6020213",
						 "shortCode":"Ki0213",
						 "stopAddress":"Sundsbergintie"
					  },
					  {
						 "coord":{
							"x":2531584,
							"y":6670952
						 },
						 "arrTime":"201507291510",
						 "depTime":"201507291510",
						 "name":"Sundsberginraitti",
						 "code":"6020207",
						 "shortCode":"Ki0207",
						 "stopAddress":"Sundsbergintie"
					  },
					  {
						 "coord":{
							"x":2531989,
							"y":6670827
						 },
						 "arrTime":"201507291510",
						 "depTime":"201507291510",
						 "name":"Sundsbergintie",
						 "code":"6020259",
						 "shortCode":"Ki0259",
						 "stopAddress":"Sundsbergintie"
					  },
					  {
						 "coord":{
							"x":2532235,
							"y":6670670
						 },
						 "arrTime":"201507291510",
						 "depTime":"201507291510",
						 "name":"Sarvvikinportti",
						 "code":"6020201",
						 "shortCode":"Ki0201",
						 "stopAddress":"Jorvaksentie"
					  },
					  {
						 "coord":{
							"x":2537250,
							"y":6671477
						 },
						 "arrTime":"201507291515",
						 "depTime":"201507291515",
						 "name":"Espoonlahdensolmu",
						 "code":"2443227",
						 "shortCode":"E4444",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2539440,
							"y":6672291
						 },
						 "arrTime":"201507291517",
						 "depTime":"201507291517",
						 "name":"Finnoonsolmu",
						 "code":"2442201",
						 "shortCode":"E4417",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2541060,
							"y":6672607
						 },
						 "arrTime":"201507291520",
						 "depTime":"201507291520",
						 "name":"Piispansilta",
						 "code":"2311220",
						 "shortCode":"E3117",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2542128,
							"y":6672945
						 },
						 "arrTime":"201507291521",
						 "depTime":"201507291521",
						 "name":"Matinsolmu",
						 "code":"2232280",
						 "shortCode":"E2368",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2543064,
							"y":6673117
						 },
						 "arrTime":"201507291522",
						 "depTime":"201507291522",
						 "name":"Haukilahdensolmu",
						 "code":"2232232",
						 "shortCode":"E2359",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2544838,
							"y":6673305
						 },
						 "arrTime":"201507291524",
						 "depTime":"201507291524",
						 "name":"Westendin asema, Laituri 1",
						 "code":"2231202",
						 "shortCode":"E2302",
						 "stopAddress":"Westendinasema",
						 "platformNumber":"1",
						 "shortName":"Westendinasema",
						 "terminal_code":"2000006",
						 "terminal_name":"Westendin asema"
					  },
					  {
						 "coord":{
							"x":2546031,
							"y":6673305
						 },
						 "arrTime":"201507291525",
						 "depTime":"201507291525",
						 "name":"Karhusaari",
						 "code":"2231201",
						 "shortCode":"E2301",
						 "stopAddress":"Karhusaarentie"
					  },
					  {
						 "coord":{
							"x":2546949,
							"y":6672976
						 },
						 "arrTime":"201507291526",
						 "depTime":"201507291526",
						 "name":"Hanasaari",
						 "code":"2232204",
						 "shortCode":"E2332",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2550928,
							"y":6672867
						 },
						 "arrTime":"201507291530",
						 "depTime":"201507291530",
						 "name":"L\u00e4nsiv\u00e4yl\u00e4",
						 "code":"1201130",
						 "shortCode":"1014",
						 "stopAddress":"Porkkalankatu"
					  }
				   ]
				},
				{
				   "length":150,
				   "duration":106.86,
				   "type":"walk",
				   "locs":[
					  {
						 "coord":{
							"x":2550928,
							"y":6672867
						 },
						 "arrTime":"201507291530",
						 "depTime":"201507291530",
						 "name":"L\u00e4nsiv\u00e4yl\u00e4",
						 "code":"1201130",
						 "shortCode":"1014",
						 "stopAddress":"Porkkalankatu"
					  },
					  {
						 "coord":{
							"x":2550891.6,
							"y":6672861.4
						 },
						 "arrTime":"201507291530",
						 "depTime":"201507291530",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2550856.1,
							"y":6672831.2
						 },
						 "arrTime":"201507291531",
						 "depTime":"201507291531",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2550835,
							"y":6672789
						 },
						 "arrTime":"201507291531",
						 "depTime":"201507291531",
						 "name":null
					  }
				   ]
				}
			 ]
		  }
	   ],
	   [
		  {
			 "length":31578.668,
			 "duration":2880,
			 "legs":[
				{
				   "length":689,
				   "duration":573.78,
				   "type":"walk",
				   "locs":[
					  {
						 "coord":{
							"x":2524621,
							"y":6667640
						 },
						 "arrTime":"201507291505",
						 "depTime":"201507291505",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524632.6,
							"y":6667633.6
						 },
						 "arrTime":"201507291505",
						 "depTime":"201507291505",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524743.7,
							"y":6667673.2
						 },
						 "arrTime":"201507291507",
						 "depTime":"201507291507",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524799.6,
							"y":6667730.4
						 },
						 "arrTime":"201507291508",
						 "depTime":"201507291508",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524790.8,
							"y":6667876.3
						 },
						 "arrTime":"201507291511",
						 "depTime":"201507291511",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524743.8,
							"y":6668068
						 },
						 "arrTime":"201507291514",
						 "depTime":"201507291514",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524735.7,
							"y":6668085.3
						 },
						 "arrTime":"201507291514",
						 "depTime":"201507291514",
						 "name":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2524789,
							"y":6668080
						 },
						 "arrTime":"201507291515",
						 "depTime":"201507291515",
						 "name":"Kirkkotallintie",
						 "code":"6050252",
						 "shortCode":"Ki0552",
						 "stopAddress":"Vanha Rantatie"
					  }
				   ]
				},
				{
				   "length":30738,
				   "duration":2220,
				   "type":"5",
				   "code":"6171  2",
				   "locs":[
					  {
						 "coord":{
							"x":2524789,
							"y":6668080
						 },
						 "arrTime":"201507291515",
						 "depTime":"201507291515",
						 "name":"Kirkkotallintie",
						 "code":"6050252",
						 "shortCode":"Ki0552",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2525249,
							"y":6668110
						 },
						 "arrTime":"201507291516",
						 "depTime":"201507291516",
						 "name":"Jolkby",
						 "code":"6040217",
						 "shortCode":"Ki0417",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2525531,
							"y":6668160
						 },
						 "arrTime":"201507291516",
						 "depTime":"201507291516",
						 "name":"Heikkil\u00e4ntie",
						 "code":"6040218",
						 "shortCode":"Ki0418",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2525706,
							"y":6668286
						 },
						 "arrTime":"201507291517",
						 "depTime":"201507291517",
						 "name":"Kaksosvuorentie",
						 "code":"6040221",
						 "shortCode":"Ki0421",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2525969,
							"y":6668407
						 },
						 "arrTime":"201507291517",
						 "depTime":"201507291517",
						 "name":"Hirvitie",
						 "code":"6040224",
						 "shortCode":"Ki0424",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2526388,
							"y":6668374
						 },
						 "arrTime":"201507291518",
						 "depTime":"201507291518",
						 "name":"Karhutie",
						 "code":"6040223",
						 "shortCode":"Ki0423",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2527011,
							"y":6668804
						 },
						 "arrTime":"201507291519",
						 "depTime":"201507291519",
						 "name":"Killinm\u00e4ki",
						 "code":"6040227",
						 "shortCode":"Ki0427",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2527594,
							"y":6669049
						 },
						 "arrTime":"201507291520",
						 "depTime":"201507291520",
						 "name":"Stor-Kvis",
						 "code":"6030214",
						 "shortCode":"Ki0314",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2528102,
							"y":6669309
						 },
						 "arrTime":"201507291521",
						 "depTime":"201507291521",
						 "name":"Kvis",
						 "code":"6030217",
						 "shortCode":"Ki0317",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2528427,
							"y":6669571
						 },
						 "arrTime":"201507291522",
						 "depTime":"201507291522",
						 "name":"Jorvaksenkuja",
						 "code":"6030222",
						 "shortCode":"Ki0322",
						 "stopAddress":"Masalantie"
					  },
					  {
						 "coord":{
							"x":2528723,
							"y":6669836
						 },
						 "arrTime":"201507291522",
						 "depTime":"201507291522",
						 "name":"Autioniityntie",
						 "code":"6030225",
						 "shortCode":"Ki0325",
						 "stopAddress":"Masalantie"
					  },
					  {
						 "coord":{
							"x":2529176,
							"y":6670323
						 },
						 "arrTime":"201507291524",
						 "depTime":"201507291524",
						 "name":"Ingvalsby",
						 "code":"6030227",
						 "shortCode":"Ki0327",
						 "stopAddress":"Masalantie"
					  },
					  {
						 "coord":{
							"x":2529532,
							"y":6671170
						 },
						 "arrTime":"201507291525",
						 "depTime":"201507291525",
						 "name":"Hulluksentie",
						 "code":"6020210",
						 "shortCode":"Ki0210",
						 "stopAddress":"Masalantie"
					  },
					  {
						 "coord":{
							"x":2529763,
							"y":6671524
						 },
						 "arrTime":"201507291526",
						 "depTime":"201507291526",
						 "name":"Masalan kirjasto",
						 "code":"6020215",
						 "shortCode":"Ki0215",
						 "stopAddress":"Sundsbergintie"
					  },
					  {
						 "coord":{
							"x":2530453,
							"y":6671351
						 },
						 "arrTime":"201507291527",
						 "depTime":"201507291527",
						 "name":"Sundetin puistotie",
						 "code":"6020213",
						 "shortCode":"Ki0213",
						 "stopAddress":"Sundsbergintie"
					  },
					  {
						 "coord":{
							"x":2531584,
							"y":6670952
						 },
						 "arrTime":"201507291529",
						 "depTime":"201507291529",
						 "name":"Sundsberginraitti",
						 "code":"6020207",
						 "shortCode":"Ki0207",
						 "stopAddress":"Sundsbergintie"
					  },
					  {
						 "coord":{
							"x":2531989,
							"y":6670827
						 },
						 "arrTime":"201507291529",
						 "depTime":"201507291529",
						 "name":"Sundsbergintie",
						 "code":"6020259",
						 "shortCode":"Ki0259",
						 "stopAddress":"Sundsbergintie"
					  },
					  {
						 "coord":{
							"x":2532382,
							"y":6670680
						 },
						 "arrTime":"201507291530",
						 "depTime":"201507291530",
						 "name":"Hein\u00e4keto",
						 "code":"6020249",
						 "shortCode":"Ki0249",
						 "stopAddress":"Sarvvikin puistotie"
					  },
					  {
						 "coord":{
							"x":2532836,
							"y":6670904
						 },
						 "arrTime":"201507291530",
						 "depTime":"201507291530",
						 "name":"Mets\u00e4niitty",
						 "code":"6020251",
						 "shortCode":"Ki0251",
						 "stopAddress":"Sarvvikin puistotie"
					  },
					  {
						 "coord":{
							"x":2533236,
							"y":6671194
						 },
						 "arrTime":"201507291531",
						 "depTime":"201507291531",
						 "name":"Kelloniitty",
						 "code":"6020253",
						 "shortCode":"Ki0253",
						 "stopAddress":"Sarvvikin puistotie"
					  },
					  {
						 "coord":{
							"x":2533554,
							"y":6671437
						 },
						 "arrTime":"201507291531",
						 "depTime":"201507291531",
						 "name":"Sarvvikintie",
						 "code":"6020255",
						 "shortCode":"Ki0255",
						 "stopAddress":"Sarvvikin puistotie"
					  },
					  {
						 "coord":{
							"x":2533930,
							"y":6671741
						 },
						 "arrTime":"201507291532",
						 "depTime":"201507291532",
						 "name":"Rantaniitty",
						 "code":"6020257",
						 "shortCode":"Ki0257",
						 "stopAddress":"Sarvvikin puistotie"
					  },
					  {
						 "coord":{
							"x":2534524,
							"y":6671963
						 },
						 "arrTime":"201507291533",
						 "depTime":"201507291533",
						 "name":"Pihlajam\u00e4entie",
						 "code":"2413229",
						 "shortCode":"E4154",
						 "stopAddress":"Vanha Jorvaksentie"
					  },
					  {
						 "coord":{
							"x":2537250,
							"y":6671477
						 },
						 "arrTime":"201507291537",
						 "depTime":"201507291537",
						 "name":"Espoonlahdensolmu",
						 "code":"2443227",
						 "shortCode":"E4444",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2539440,
							"y":6672291
						 },
						 "arrTime":"201507291539",
						 "depTime":"201507291539",
						 "name":"Finnoonsolmu",
						 "code":"2442201",
						 "shortCode":"E4417",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2541060,
							"y":6672607
						 },
						 "arrTime":"201507291542",
						 "depTime":"201507291542",
						 "name":"Piispansilta",
						 "code":"2311220",
						 "shortCode":"E3117",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2542128,
							"y":6672945
						 },
						 "arrTime":"201507291543",
						 "depTime":"201507291543",
						 "name":"Matinsolmu",
						 "code":"2232280",
						 "shortCode":"E2368",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2543064,
							"y":6673117
						 },
						 "arrTime":"201507291544",
						 "depTime":"201507291544",
						 "name":"Haukilahdensolmu",
						 "code":"2232232",
						 "shortCode":"E2359",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2544838,
							"y":6673305
						 },
						 "arrTime":"201507291546",
						 "depTime":"201507291546",
						 "name":"Westendin asema, Laituri 1",
						 "code":"2231202",
						 "shortCode":"E2302",
						 "stopAddress":"Westendinasema",
						 "platformNumber":"1",
						 "shortName":"Westendinasema",
						 "terminal_code":"2000006",
						 "terminal_name":"Westendin asema"
					  },
					  {
						 "coord":{
							"x":2546031,
							"y":6673305
						 },
						 "arrTime":"201507291547",
						 "depTime":"201507291547",
						 "name":"Karhusaari",
						 "code":"2231201",
						 "shortCode":"E2301",
						 "stopAddress":"Karhusaarentie"
					  },
					  {
						 "coord":{
							"x":2546949,
							"y":6672976
						 },
						 "arrTime":"201507291548",
						 "depTime":"201507291548",
						 "name":"Hanasaari",
						 "code":"2232204",
						 "shortCode":"E2332",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2550928,
							"y":6672867
						 },
						 "arrTime":"201507291552",
						 "depTime":"201507291552",
						 "name":"L\u00e4nsiv\u00e4yl\u00e4",
						 "code":"1201130",
						 "shortCode":"1014",
						 "stopAddress":"Porkkalankatu"
					  }
				   ]
				},
				{
				   "length":150,
				   "duration":106.86,
				   "type":"walk",
				   "locs":[
					  {
						 "coord":{
							"x":2550928,
							"y":6672867
						 },
						 "arrTime":"201507291552",
						 "depTime":"201507291552",
						 "name":"L\u00e4nsiv\u00e4yl\u00e4",
						 "code":"1201130",
						 "shortCode":"1014",
						 "stopAddress":"Porkkalankatu"
					  },
					  {
						 "coord":{
							"x":2550891.6,
							"y":6672861.4
						 },
						 "arrTime":"201507291552",
						 "depTime":"201507291552",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2550856.1,
							"y":6672831.2
						 },
						 "arrTime":"201507291553",
						 "depTime":"201507291553",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2550835,
							"y":6672789
						 },
						 "arrTime":"201507291553",
						 "depTime":"201507291553",
						 "name":null
					  }
				   ]
				}
			 ]
		  }
	   ],
	   [
		  {
			 "length":31578.668,
			 "duration":2880,
			 "legs":[
				{
				   "length":689,
				   "duration":573.78,
				   "type":"walk",
				   "locs":[
					  {
						 "coord":{
							"x":2524621,
							"y":6667640
						 },
						 "arrTime":"201507291515",
						 "depTime":"201507291515",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524632.6,
							"y":6667633.6
						 },
						 "arrTime":"201507291515",
						 "depTime":"201507291515",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524743.7,
							"y":6667673.2
						 },
						 "arrTime":"201507291517",
						 "depTime":"201507291517",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524799.6,
							"y":6667730.4
						 },
						 "arrTime":"201507291518",
						 "depTime":"201507291518",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524790.8,
							"y":6667876.3
						 },
						 "arrTime":"201507291521",
						 "depTime":"201507291521",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524743.8,
							"y":6668068
						 },
						 "arrTime":"201507291524",
						 "depTime":"201507291524",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2524735.7,
							"y":6668085.3
						 },
						 "arrTime":"201507291524",
						 "depTime":"201507291524",
						 "name":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2524789,
							"y":6668080
						 },
						 "arrTime":"201507291525",
						 "depTime":"201507291525",
						 "name":"Kirkkotallintie",
						 "code":"6050252",
						 "shortCode":"Ki0552",
						 "stopAddress":"Vanha Rantatie"
					  }
				   ]
				},
				{
				   "length":30738,
				   "duration":2220,
				   "type":"5",
				   "code":"6171A 2",
				   "locs":[
					  {
						 "coord":{
							"x":2524789,
							"y":6668080
						 },
						 "arrTime":"201507291525",
						 "depTime":"201507291525",
						 "name":"Kirkkotallintie",
						 "code":"6050252",
						 "shortCode":"Ki0552",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2525249,
							"y":6668110
						 },
						 "arrTime":"201507291526",
						 "depTime":"201507291526",
						 "name":"Jolkby",
						 "code":"6040217",
						 "shortCode":"Ki0417",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2525531,
							"y":6668160
						 },
						 "arrTime":"201507291526",
						 "depTime":"201507291526",
						 "name":"Heikkil\u00e4ntie",
						 "code":"6040218",
						 "shortCode":"Ki0418",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2525706,
							"y":6668286
						 },
						 "arrTime":"201507291527",
						 "depTime":"201507291527",
						 "name":"Kaksosvuorentie",
						 "code":"6040221",
						 "shortCode":"Ki0421",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2525969,
							"y":6668407
						 },
						 "arrTime":"201507291527",
						 "depTime":"201507291527",
						 "name":"Hirvitie",
						 "code":"6040224",
						 "shortCode":"Ki0424",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2526388,
							"y":6668374
						 },
						 "arrTime":"201507291528",
						 "depTime":"201507291528",
						 "name":"Karhutie",
						 "code":"6040223",
						 "shortCode":"Ki0423",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2527011,
							"y":6668804
						 },
						 "arrTime":"201507291529",
						 "depTime":"201507291529",
						 "name":"Killinm\u00e4ki",
						 "code":"6040227",
						 "shortCode":"Ki0427",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2527594,
							"y":6669049
						 },
						 "arrTime":"201507291530",
						 "depTime":"201507291530",
						 "name":"Stor-Kvis",
						 "code":"6030214",
						 "shortCode":"Ki0314",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2528102,
							"y":6669309
						 },
						 "arrTime":"201507291531",
						 "depTime":"201507291531",
						 "name":"Kvis",
						 "code":"6030217",
						 "shortCode":"Ki0317",
						 "stopAddress":"Vanha Rantatie"
					  },
					  {
						 "coord":{
							"x":2528427,
							"y":6669571
						 },
						 "arrTime":"201507291532",
						 "depTime":"201507291532",
						 "name":"Jorvaksenkuja",
						 "code":"6030222",
						 "shortCode":"Ki0322",
						 "stopAddress":"Masalantie"
					  },
					  {
						 "coord":{
							"x":2528723,
							"y":6669836
						 },
						 "arrTime":"201507291532",
						 "depTime":"201507291532",
						 "name":"Autioniityntie",
						 "code":"6030225",
						 "shortCode":"Ki0325",
						 "stopAddress":"Masalantie"
					  },
					  {
						 "coord":{
							"x":2529176,
							"y":6670323
						 },
						 "arrTime":"201507291534",
						 "depTime":"201507291534",
						 "name":"Ingvalsby",
						 "code":"6030227",
						 "shortCode":"Ki0327",
						 "stopAddress":"Masalantie"
					  },
					  {
						 "coord":{
							"x":2529532,
							"y":6671170
						 },
						 "arrTime":"201507291535",
						 "depTime":"201507291535",
						 "name":"Hulluksentie",
						 "code":"6020210",
						 "shortCode":"Ki0210",
						 "stopAddress":"Masalantie"
					  },
					  {
						 "coord":{
							"x":2529763,
							"y":6671524
						 },
						 "arrTime":"201507291536",
						 "depTime":"201507291536",
						 "name":"Masalan kirjasto",
						 "code":"6020215",
						 "shortCode":"Ki0215",
						 "stopAddress":"Sundsbergintie"
					  },
					  {
						 "coord":{
							"x":2530453,
							"y":6671351
						 },
						 "arrTime":"201507291537",
						 "depTime":"201507291537",
						 "name":"Sundetin puistotie",
						 "code":"6020213",
						 "shortCode":"Ki0213",
						 "stopAddress":"Sundsbergintie"
					  },
					  {
						 "coord":{
							"x":2531584,
							"y":6670952
						 },
						 "arrTime":"201507291539",
						 "depTime":"201507291539",
						 "name":"Sundsberginraitti",
						 "code":"6020207",
						 "shortCode":"Ki0207",
						 "stopAddress":"Sundsbergintie"
					  },
					  {
						 "coord":{
							"x":2531989,
							"y":6670827
						 },
						 "arrTime":"201507291539",
						 "depTime":"201507291539",
						 "name":"Sundsbergintie",
						 "code":"6020259",
						 "shortCode":"Ki0259",
						 "stopAddress":"Sundsbergintie"
					  },
					  {
						 "coord":{
							"x":2532382,
							"y":6670680
						 },
						 "arrTime":"201507291540",
						 "depTime":"201507291540",
						 "name":"Hein\u00e4keto",
						 "code":"6020249",
						 "shortCode":"Ki0249",
						 "stopAddress":"Sarvvikin puistotie"
					  },
					  {
						 "coord":{
							"x":2532836,
							"y":6670904
						 },
						 "arrTime":"201507291540",
						 "depTime":"201507291540",
						 "name":"Mets\u00e4niitty",
						 "code":"6020251",
						 "shortCode":"Ki0251",
						 "stopAddress":"Sarvvikin puistotie"
					  },
					  {
						 "coord":{
							"x":2533236,
							"y":6671194
						 },
						 "arrTime":"201507291541",
						 "depTime":"201507291541",
						 "name":"Kelloniitty",
						 "code":"6020253",
						 "shortCode":"Ki0253",
						 "stopAddress":"Sarvvikin puistotie"
					  },
					  {
						 "coord":{
							"x":2533554,
							"y":6671437
						 },
						 "arrTime":"201507291541",
						 "depTime":"201507291541",
						 "name":"Sarvvikintie",
						 "code":"6020255",
						 "shortCode":"Ki0255",
						 "stopAddress":"Sarvvikin puistotie"
					  },
					  {
						 "coord":{
							"x":2533930,
							"y":6671741
						 },
						 "arrTime":"201507291542",
						 "depTime":"201507291542",
						 "name":"Rantaniitty",
						 "code":"6020257",
						 "shortCode":"Ki0257",
						 "stopAddress":"Sarvvikin puistotie"
					  },
					  {
						 "coord":{
							"x":2534524,
							"y":6671963
						 },
						 "arrTime":"201507291543",
						 "depTime":"201507291543",
						 "name":"Pihlajam\u00e4entie",
						 "code":"2413229",
						 "shortCode":"E4154",
						 "stopAddress":"Vanha Jorvaksentie"
					  },
					  {
						 "coord":{
							"x":2537250,
							"y":6671477
						 },
						 "arrTime":"201507291547",
						 "depTime":"201507291547",
						 "name":"Espoonlahdensolmu",
						 "code":"2443227",
						 "shortCode":"E4444",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2539440,
							"y":6672291
						 },
						 "arrTime":"201507291549",
						 "depTime":"201507291549",
						 "name":"Finnoonsolmu",
						 "code":"2442201",
						 "shortCode":"E4417",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2541060,
							"y":6672607
						 },
						 "arrTime":"201507291552",
						 "depTime":"201507291552",
						 "name":"Piispansilta",
						 "code":"2311220",
						 "shortCode":"E3117",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2542128,
							"y":6672945
						 },
						 "arrTime":"201507291553",
						 "depTime":"201507291553",
						 "name":"Matinsolmu",
						 "code":"2232280",
						 "shortCode":"E2368",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2543064,
							"y":6673117
						 },
						 "arrTime":"201507291554",
						 "depTime":"201507291554",
						 "name":"Haukilahdensolmu",
						 "code":"2232232",
						 "shortCode":"E2359",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2544838,
							"y":6673305
						 },
						 "arrTime":"201507291556",
						 "depTime":"201507291556",
						 "name":"Westendin asema, Laituri 1",
						 "code":"2231202",
						 "shortCode":"E2302",
						 "stopAddress":"Westendinasema",
						 "platformNumber":"1",
						 "shortName":"Westendinasema",
						 "terminal_code":"2000006",
						 "terminal_name":"Westendin asema"
					  },
					  {
						 "coord":{
							"x":2546031,
							"y":6673305
						 },
						 "arrTime":"201507291557",
						 "depTime":"201507291557",
						 "name":"Karhusaari",
						 "code":"2231201",
						 "shortCode":"E2301",
						 "stopAddress":"Karhusaarentie"
					  },
					  {
						 "coord":{
							"x":2546949,
							"y":6672976
						 },
						 "arrTime":"201507291558",
						 "depTime":"201507291558",
						 "name":"Hanasaari",
						 "code":"2232204",
						 "shortCode":"E2332",
						 "stopAddress":"L\u00e4nsiv\u00e4yl\u00e4"
					  },
					  {
						 "coord":{
							"x":2550928,
							"y":6672867
						 },
						 "arrTime":"201507291602",
						 "depTime":"201507291602",
						 "name":"L\u00e4nsiv\u00e4yl\u00e4",
						 "code":"1201130",
						 "shortCode":"1014",
						 "stopAddress":"Porkkalankatu"
					  }
				   ]
				},
				{
				   "length":150,
				   "duration":106.86,
				   "type":"walk",
				   "locs":[
					  {
						 "coord":{
							"x":2550928,
							"y":6672867
						 },
						 "arrTime":"201507291602",
						 "depTime":"201507291602",
						 "name":"L\u00e4nsiv\u00e4yl\u00e4",
						 "code":"1201130",
						 "shortCode":"1014",
						 "stopAddress":"Porkkalankatu"
					  },
					  {
						 "coord":{
							"x":2550891.6,
							"y":6672861.4
						 },
						 "arrTime":"201507291602",
						 "depTime":"201507291602",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2550856.1,
							"y":6672831.2
						 },
						 "arrTime":"201507291603",
						 "depTime":"201507291603",
						 "name":null
					  },
					  {
						 "coord":{
							"x":2550835,
							"y":6672789
						 },
						 "arrTime":"201507291603",
						 "depTime":"201507291603",
						 "name":null
					  }
				   ]
				}
			 ]
		  }
	   ]
	];
	
	return {
		getRoutes: function() {
			return routes;
		},
		getRoute: function(id) {
			return routes[id];
		}
	}
})

.service('FavoritesService', function(){
	var favoriteRoutes = [
		{
			id: 0,
			from: 'Siuntio',
			to: 'Tammasaarenkatu',
			via: 'Kirkkonummen asema'
		}
	];
	
	var favoritePlaces = [
		{
			id: 0,
			name: 'Siuntio'
		},
		{
			id: 1,
			name: 'Tammasaarenkatu'
		}
	];
	
	return {
		addRoute: function(from, to, via) {
			var favoriteObj = {
				id: favoriteRoutes.length,
				from: from,
				to: to,
				via: via
			};
			favoriteRoutes.push(favoriteObj);
		},
		getRoute: function(id) {
			return favoriteRoutes[id];
		},
		getRoutes: function() {
			return favoriteRoutes;
		},
		addPlace: function(name, commune) {
			var favoriteObj = {
				id: favoritePlaces.length,
				name: name,
				commune: commune
			};
			favoritePlaces.push(favoriteObj);
		},
		getPlace: function(id) {
			return favoritePlaces[id];
		},
		getPlaces: function() {
			return favoritePlaces;
		}
	}
})

.service('PlacesService', function(){
	var places = [
	   {
		  "locType":"poi",
		  "locTypeId":2,
		  "name":"Kirkkonummen asema",
		  "matchedName":"Kirkkonummen asema",
		  "lang":"fi",
		  "city":"Kirkkonummi",
		  "coords":"2524621,6667640",
		  "details":{
			 "poiType":"station"
		  }
	   },
	   {
		  "locType":"poi",
		  "locTypeId":1,
		  "name":"Kirkkonummi",
		  "matchedName":"Kirkkonummi",
		  "lang":"fi",
		  "city":"Kirkkonummi",
		  "coords":"2524749,6667885",
		  "details":{
			 "poiType":"city area"
		  }
	   },
	   {
		  "locType":"poi",
		  "locTypeId":2,
		  "name":"Matkakeskus",
		  "matchedName":"Kirkkonummen matkakeskus",
		  "lang":"slangi",
		  "city":"Kirkkonummi",
		  "coords":"2524621,6667640",
		  "details":{
			 "poiType":"station"
		  }
	   },
	   {
		  "locType":"address",
		  "locTypeId":900,
		  "name":"Kirkkonummentie",
		  "matchedName":"Kirkkonummentie",
		  "lang":"fi",
		  "city":"Espoo",
		  "coords":"2544328,6678069",
		  "details":{
			 "houseNumber":1
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Kirkkonummenportti",
		  "matchedName":"Kirkkonummenportti",
		  "lang":"fi",
		  "city":"Kirkkonummi",
		  "coords":"2524769,6667344",
		  "details":{
			 "address":"Jorvaksentie",
			 "code":"6040214",
			 "shortCode":"Ki0414",
			 "changeCost":1.4,
			 "lines":[
				"6171K 1:Siuntio",
				"6171V 1:Siuntio",
				"7190  1:Inkoo",
				"7190K 1:Inkoo"
			 ],
			 "transport_type_id":1
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Kirkkonummenportti",
		  "matchedName":"Kirkkonummenportti",
		  "lang":"fi",
		  "city":"Kirkkonummi",
		  "coords":"2524952,6667178",
		  "details":{
			 "address":"Jorvaksentie",
			 "code":"6040211",
			 "shortCode":"Ki0411",
			 "changeCost":1.4,
			 "lines":[
				"6901K 1:Hirsala",
				"6901K 2:Luoma",
				"6902  1:Porkkala",
				"7190  2:Linja-autoasema",
				"7190K 2:Linja-autoasema"
			 ],
			 "transport_type_id":1
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Kirkkonummi",
		  "matchedName":"Kirkkonummi",
		  "lang":"fi",
		  "city":"Kirkkonummi",
		  "coords":"2524579,6667629",
		  "details":{
			 "code":"6010501",
			 "shortCode":"Ki0101",
			 "changeCost":0.7,
			 "lines":[
				"3002L 1:Kirkkonummi",
				"3002S 1:Kirkkonummi",
				"3002U 1:Kirkkonummi",
				"3002Y 1:Karjaa"
			 ],
			 "transport_type_id":7
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Kirkkonummi",
		  "matchedName":"Kirkkonummi",
		  "lang":"fi",
		  "city":"Kirkkonummi",
		  "coords":"2524580,6667613",
		  "details":{
			 "code":"6010551",
			 "shortCode":"Ki0151",
			 "changeCost":0.4,
			 "lines":[
				"3002L 2:Helsinki",
				"3002L32:Helsinki",
				"3002S 2:Helsinki",
				"3002U 2:Helsinki",
				"3002Y 2:Helsinki"
			 ],
			 "transport_type_id":7
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Kirkkonummi, Laituri 1",
		  "matchedName":"Kirkkonummi, Laituri 1",
		  "lang":"fi",
		  "city":"Kirkkonummi",
		  "coords":"2524669,6667620",
		  "details":{
			 "address":"Matkakeskus",
			 "code":"6040291",
			 "shortCode":"Ki0491",
			 "changeCost":1.1,
			 "lines":[
				"6171  1:Kirkkonummi",
				"6171  2:Kamppi",
				"6171A 2:Kamppi",
				"6171B 2:Kirkkonummi",
				"6171K 2:Kamppi",
				"6171V 2:Kamppi",
				"6172  2:Kamppi",
				"6172 32:Kirkkonummi",
				"6173  2:Kamppi",
				"7912K 2:Kirkkonummi"
			 ],
			 "transport_type_id":1,
			 "terminal_code":"6000001",
			 "terminal_name":"Kirkkonummi",
			 "platform_number":"1",
			 "short_name":"Kirkkonummi mk"
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Kirkkonummi, Laituri 10",
		  "matchedName":"Kirkkonummi, Laituri 10",
		  "lang":"fi",
		  "city":"Kirkkonummi",
		  "coords":"2524703,6667654",
		  "details":{
			 "address":"Asemankaari",
			 "code":"6040290",
			 "shortCode":"Ki0490",
			 "changeCost":1,
			 "lines":[
				"6908  1:Kaislampi",
				"6908  2:Kirkkonummi"
			 ],
			 "transport_type_id":1,
			 "terminal_code":"6000001",
			 "terminal_name":"Kirkkonummi",
			 "platform_number":"10",
			 "short_name":"Kirkkonummi mk"
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Kirkkonummi, Laituri 2",
		  "matchedName":"Kirkkonummi, Laituri 2",
		  "lang":"fi",
		  "city":"Kirkkonummi",
		  "coords":"2524681,6667620",
		  "details":{
			 "address":"Matkakeskus",
			 "code":"6040292",
			 "shortCode":"Ki0492",
			 "changeCost":1.1,
			 "lines":[
				"6174Z 1:Gesterby",
				"6911  1:Kirkkonummi",
				"6911  2:Kauklahti"
			 ],
			 "transport_type_id":1,
			 "terminal_code":"6000001",
			 "terminal_name":"Kirkkonummi",
			 "platform_number":"2",
			 "short_name":"Kirkkonummi mk"
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Kirkkonummi, Laituri 3",
		  "matchedName":"Kirkkonummi, Laituri 3",
		  "lang":"fi",
		  "city":"Kirkkonummi",
		  "coords":"2524693,6667620",
		  "details":{
			 "address":"Matkakeskus",
			 "code":"6040293",
			 "shortCode":"Ki0493",
			 "changeCost":0.7,
			 "lines":[
				"6172  1:Kantvik",
				"6172 31:Kantvik",
				"6172Z 1:Pikkalan tehdas",
				"6173  1:Upinniemi",
				"6173Z 1:Upinniemi"
			 ],
			 "transport_type_id":1,
			 "terminal_code":"6000001",
			 "terminal_name":"Kirkkonummi",
			 "platform_number":"3",
			 "short_name":"Kirkkonummi mk"
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Kirkkonummi, Laituri 4",
		  "matchedName":"Kirkkonummi, Laituri 4",
		  "lang":"fi",
		  "city":"Kirkkonummi",
		  "coords":"2524705,6667620",
		  "details":{
			 "address":"Matkakeskus",
			 "code":"6040296",
			 "shortCode":"Ki0496",
			 "changeCost":1.1,
			 "lines":[
				"6172Z 2:Kamppi",
				"6173Z 2:Kamppi",
				"6174Z 2:Kamppi",
				"7190K 2:Linja-autoasema"
			 ],
			 "transport_type_id":1,
			 "terminal_code":"6000001",
			 "terminal_name":"Kirkkonummi",
			 "platform_number":"4",
			 "short_name":"Kirkkonummi mk"
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Kirkkonummi, Laituri 5",
		  "matchedName":"Kirkkonummi, Laituri 5",
		  "lang":"fi",
		  "city":"Kirkkonummi",
		  "coords":"2524717,6667620",
		  "details":{
			 "address":"Matkakeskus",
			 "code":"6040295",
			 "shortCode":"Ki0495",
			 "changeCost":0.7,
			 "lines":[
				"6171A 1:Siuntio",
				"6171K 1:Siuntio",
				"6171V 1:Siuntio",
				"6902  2:Pikkalan tehdas",
				"6902K 2:Pikkalan tehdas",
				"7190K 1:Inkoo",
				"7912  1:Siuntio"
			 ],
			 "transport_type_id":1,
			 "terminal_code":"6000001",
			 "terminal_name":"Kirkkonummi",
			 "platform_number":"5",
			 "short_name":"Kirkkonummi mk"
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Kirkkonummi, Laituri 7",
		  "matchedName":"Kirkkonummi, Laituri 7",
		  "lang":"fi",
		  "city":"Kirkkonummi",
		  "coords":"2524705,6667632",
		  "details":{
			 "address":"Matkakeskus",
			 "code":"6040287",
			 "shortCode":"Ki0487",
			 "changeCost":1.1,
			 "lines":[
				"6902  1:Porkkala",
				"6902K 1:Porkkala"
			 ],
			 "transport_type_id":1,
			 "terminal_code":"6000001",
			 "terminal_name":"Kirkkonummi",
			 "platform_number":"7",
			 "short_name":"Kirkkonummi mk"
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Kirkkonummi, Laituri 8",
		  "matchedName":"Kirkkonummi, Laituri 8",
		  "lang":"fi",
		  "city":"Kirkkonummi",
		  "coords":"2524717,6667632",
		  "details":{
			 "address":"Matkakeskus",
			 "code":"6040288",
			 "shortCode":"Ki0488",
			 "changeCost":1,
			 "lines":[
				"6903  1:Hila",
				"6903  2:Kirkkonummi, lait. 8",
				"6903K 1:Hila",
				"6903K 2:Kirkkonummi, lait. 8"
			 ],
			 "transport_type_id":1,
			 "terminal_code":"6000001",
			 "terminal_name":"Kirkkonummi",
			 "platform_number":"8",
			 "short_name":"Kirkkonummi mk"
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Kirkkonummi, Laituri 9",
		  "matchedName":"Kirkkonummi, Laituri 9",
		  "lang":"fi",
		  "city":"Kirkkonummi",
		  "coords":"2524684,6667650",
		  "details":{
			 "address":"Asemankaari",
			 "code":"6040289",
			 "shortCode":"Ki0489",
			 "changeCost":1.1,
			 "lines":[
				"6907  1:Veikkola",
				"6907  2:Kirkkonummi, lait 9"
			 ],
			 "transport_type_id":1,
			 "terminal_code":"6000001",
			 "terminal_name":"Kirkkonummi",
			 "platform_number":"9",
			 "short_name":"Kirkkonummi mk"
		  }
	   },
	   {
		  "locType":"poi",
		  "locTypeId":6,
		  "name":"Ruoholahden ala-asteen koulu",
		  "matchedName":"Ruoholahden ala-asteen koulu",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2551220,6672670",
		  "details":{
			 "poiType":"school"
		  }
	   },
	   {
		  "locType":"poi",
		  "locTypeId":3,
		  "name":"Ruoholahden kappeli",
		  "matchedName":"Ruoholahden kappeli",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2550944,6672723",
		  "details":{
			 "poiType":"public place"
		  }
	   },
	   {
		  "locType":"poi",
		  "locTypeId":3,
		  "name":"Ruoholahden lastenkirjasto",
		  "matchedName":"Ruoholahden lastenkirjasto",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2551220,6672670",
		  "details":{
			 "poiType":"public place"
		  }
	   },
	   {
		  "locType":"poi",
		  "locTypeId":2,
		  "name":"Ruoholahden metroasema",
		  "matchedName":"Ruoholahden metroasema",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2550919,6672692",
		  "details":{
			 "poiType":"station"
		  }
	   },
	   {
		  "locType":"poi",
		  "locTypeId":1,
		  "name":"Ruoholahti",
		  "matchedName":"Ruoholahti",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2550914,6672716",
		  "details":{
			 "poiType":"city area"
		  }
	   },
	   {
		  "locType":"poi",
		  "locTypeId":4,
		  "name":"Ruoholahti kauppakeskus",
		  "matchedName":"Ruoholahti kauppakeskus",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2550835,6672789",
		  "details":{
			 "poiType":"shopping center"
		  }
	   },
	   {
		  "locType":"poi",
		  "locTypeId":8,
		  "name":"Ruoholahti liitynt\u00e4pys\u00e4k\u00f6inti",
		  "matchedName":"Ruoholahti liitynt\u00e4pys\u00e4k\u00f6inti",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2550855,6672814",
		  "details":{
			 "poiType":"park and ride"
		  }
	   },
	   {
		  "locType":"poi",
		  "locTypeId":2,
		  "name":"Ruoholahti metroasema",
		  "matchedName":"Ruoholahti metroasema",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2550919,6672692",
		  "details":{
			 "poiType":"station"
		  }
	   },
	   {
		  "locType":"poi",
		  "locTypeId":9,
		  "name":"City Car Club - Ruoholahti, Kellosaarenranta",
		  "matchedName":"Ruoholahti, Kellosaarenranta - City Car Club",
		  "lang":"slangi",
		  "city":"Helsinki",
		  "coords":"2550629,6672553",
		  "details":{
			 "poiType":"city car club"
		  }
	   },
	   {
		  "locType":"address",
		  "locTypeId":900,
		  "name":"Ruoholahdenkatu",
		  "matchedName":"Ruoholahdenkatu",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2551733,6673083",
		  "details":{
			 "houseNumber":1
		  }
	   },
	   {
		  "locType":"address",
		  "locTypeId":900,
		  "name":"Ruoholahdenranta",
		  "matchedName":"Ruoholahdenranta",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2551585,6672569",
		  "details":{
			 "houseNumber":1
		  }
	   },
	   {
		  "locType":"address",
		  "locTypeId":900,
		  "name":"Ruoholahdentori",
		  "matchedName":"Ruoholahdentori",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2550888,6672705",
		  "details":{
			 "houseNumber":2
		  }
	   },
	   {
		  "locType":"address",
		  "locTypeId":900,
		  "name":"Ruohopolku",
		  "matchedName":"Ruohopolku",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2556095,6683502",
		  "details":{
			 "houseNumber":1
		  }
	   },
	   {
		  "locType":"address",
		  "locTypeId":900,
		  "name":"Ruohotie",
		  "matchedName":"Ruohotie",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2556104,6683466",
		  "details":{
			 "houseNumber":1
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Ruoholahden villat",
		  "matchedName":"Ruoholahden villat",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2551649,6672997",
		  "details":{
			 "address":"Ruoholahdenkatu",
			 "code":"1040406",
			 "shortCode":"0822",
			 "changeCost":0.6,
			 "lines":[
				"1006T81:Arabia",
				"1006T91:Vallila",
				"1009  1:Pasila",
				"1009 31:Kallio",
				"1009 41:Kallio"
			 ],
			 "transport_type_id":2
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Ruoholahden villat",
		  "matchedName":"Ruoholahden villat",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2551619,6673016",
		  "details":{
			 "address":"Ruoholahdenkatu",
			 "code":"1040407",
			 "shortCode":"0823",
			 "changeCost":0.6,
			 "lines":[
				"1006T82:L\u00e4nsiterminaali",
				"1006T92:L\u00e4nsiterminaali",
				"1009  2:L\u00e4nsiterminaali",
				"1009 32:L\u00e4nsiterminaali",
				"1009 42:L\u00e4nsiterminaali"
			 ],
			 "transport_type_id":2
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Ruoholahdenkatu",
		  "matchedName":"Ruoholahdenkatu",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2551627,6673027",
		  "details":{
			 "address":"Ruoholahdenkatu",
			 "code":"1040133",
			 "shortCode":"1009",
			 "changeCost":0.6,
			 "lines":[
				"1020N 1:Lauttasaari",
				"1021V 1:Lauttasaari(Vattun.)",
				"1065A 2:Lauttasaari",
				"1066A 2:Lauttasaari"
			 ],
			 "transport_type_id":1
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Ruoholahdenkatu",
		  "matchedName":"Ruoholahdenkatu",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2551637,6672989",
		  "details":{
			 "address":"Ruoholahdenkatu",
			 "code":"1040162",
			 "shortCode":"1218",
			 "changeCost":0.6,
			 "lines":[
				"1065A 1:Ver\u00e4j\u00e4laakso",
				"1066A 1:L\u00e4nsi-Pakila"
			 ],
			 "transport_type_id":1
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Ruoholahti",
		  "matchedName":"Ruoholahti",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2550919,6672692",
		  "details":{
			 "address":"Ruoholahti",
			 "code":"1201601",
			 "shortCode":"0012",
			 "changeCost":0.3,
			 "lines":[
				"1300  1:It\u00e4keskus",
				"1300M 1:Mellunm\u00e4ki",
				"1300V 1:Vuosaari"
			 ],
			 "transport_type_id":6
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Ruoholahti",
		  "matchedName":"Ruoholahti",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2550919,6672692",
		  "details":{
			 "address":"Ruoholahti",
			 "code":"1201602",
			 "shortCode":"0012",
			 "changeCost":0.3,
			 "lines":[
				"1300  2:Ruoholahti",
				"1300M 2:Ruoholahti",
				"1300V 2:Ruoholahti"
			 ],
			 "transport_type_id":6
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Ruoholahti (M)",
		  "matchedName":"Ruoholahti (M)",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2550990,6672748",
		  "details":{
			 "address":"It\u00e4merenkatu",
			 "code":"1201113",
			 "shortCode":"",
			 "changeCost":1.4,
			 "lines":[
				"1015  2:Ruoholahti"
			 ],
			 "transport_type_id":1
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Ruoholahti(M)",
		  "matchedName":"Ruoholahti(M)",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2550935,6672771",
		  "details":{
			 "address":"It\u00e4merenkatu 19",
			 "code":"1201135",
			 "shortCode":"0214",
			 "changeCost":1,
			 "lines":[
				"1015  1:Salmisaari",
				"1020  1:Lauttasaari(Katajah)"
			 ],
			 "transport_type_id":1
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Ruoholahti(M)",
		  "matchedName":"Ruoholahti(M)",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2550973,6672757",
		  "details":{
			 "address":"It\u00e4merenkatu 16",
			 "code":"1201136",
			 "shortCode":"0213",
			 "changeCost":1,
			 "lines":[
				"1020  2:Erottaja"
			 ],
			 "transport_type_id":1
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Ruoholahti(M)",
		  "matchedName":"Ruoholahti(M)",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2550974,6672749",
		  "details":{
			 "address":"It\u00e4merenkatu 19",
			 "code":"1201431",
			 "shortCode":"0213",
			 "changeCost":1,
			 "lines":[
				"1008  1:Arabia",
				"1008 41:Vallila"
			 ],
			 "transport_type_id":2
		  }
	   },
	   {
		  "locType":"stop",
		  "locTypeId":10,
		  "name":"Ruoholahti(M)",
		  "matchedName":"Ruoholahti(M)",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2550935,6672779",
		  "details":{
			 "address":"It\u00e4merenkatu 14",
			 "code":"1201432",
			 "shortCode":"0214",
			 "changeCost":1,
			 "lines":[
				"1008  2:J\u00e4tk\u00e4saari",
				"1008 42:J\u00e4tk\u00e4saari"
			 ],
			 "transport_type_id":2
		  }
	   },
	   {
		  "locType":"poi",
		  "locTypeId":1008,
		  "name":"Ruoholahden silta",
		  "matchedName":"Ruoholahden silta",
		  "lang":"fi",
		  "city":"Helsinki",
		  "coords":"2551363,6672917",
		  "details":{
			 "poiType":"street w\/o address numbers"
		  }
	   }
	];
	
	
	
	
	return {
		getPlaces: function() {
			return places;
		}
	}
})

.service('HistoryService', function(){
});