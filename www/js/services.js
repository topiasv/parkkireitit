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

.service('SelRouteService', function() {
	this.selectedRoute;
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
		},
		transformIcon: function(source) {
			if (source === 'car') {
				return 'ion-android-car';
			} else if (source === '1' || source === '3' || source === '4' || source === '5' || source === '8' || source === '22' || source === '25' || source === '36' || source === '39') {
				return 'ion-android-bus';
			} else if (source === 'parking') {
				return 'ion-social-hackernews-outline';
			} else if (source === 'walk') {
				return 'ion-android-walk';
			}
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
		},
		{
			id: 0,
			from: 'Kirkkonummen asema',
			to: 'Ruoholahti kauppakeskus'
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

.service('LineService', function(){
	var lines = [];
	lines["6173  2"] = [
		{
			"code": "6173  2",
			"code_short": "173",
			"date_from": "20150615",
			"date_to": "20161231",
			"line_end": "Kamppi",
			"line_shape": "2520559,6657956|2520589,6657870|2520589,6657815|2520592,6657745|2520592,6657738|2520600,6657655|2520602,6657641|2520607,6657615|2520615,6657595|2520627,6657582|2520652,6657559|2520663,6657545|2520670,6657529|2520674,6657515|2520680,6657477|2520680,6657463|2520675,6657448|2520658,6657413|2520651,6657398|2520632,6657356|2520616,6657325|2520608,6657309|2520592,6657285|2520552,6657242|2520535,6657227|2520524,6657222|2520506,6657219|2520492,6657228|2520444,6657276|2520402,6657313|2520366,6657332|2520254,6657376|2520141,6657424|2520120,6657434|2520092,6657446|2520025,6657475|2519922,6657523|2519906,6657532|2519886,6657549|2519843,6657595|2519800,6657645|2519901,6657739|2519919,6657757|2519941,6657778|2519958,6657796|2520000,6657834|2520158,6657941|2520335,6658062|2520360,6658078|2520387,6658099|2520538,6658203|2520562,6658221|2520574,6658232|2520626,6658274|2520696,6658330|2520734,6658355|2520754,6658370|2520771,6658386|2520786,6658399|2520802,6658416|2520829,6658444|2520855,6658473|2520887,6658520|2520896,6658539|2520898,6658558|2520895,6658579|2520875,6658639|2520873,6658656|2520880,6658698|2520881,6658722|2520880,6658766|2520878,6658791|2520866,6658841|2520830,6658940|2520819,6658964|2520807,6658981|2520789,6659012|2520776,6659045|2520747,6659169|2520744,6659193|2520747,6659227|2520762,6659274|2520780,6659325|2520801,6659383|2520822,6659425|2520887,6659528|2520897,6659553|2520923,6659649|2520929,6659675|2520937,6659703|2520958,6659787|2520994,6659922|2521002,6659954|2521009,6659976|2521018,6660004|2521035,6660042|2521079,6660132|2521094,6660165|2521122,6660245|2521139,6660303|2521158,6660360|2521166,6660386|2521179,6660419|2521185,6660434|2521195,6660456|2521217,6660490|2521251,6660538|2521275,6660572|2521299,6660621|2521305,6660636|2521316,6660664|2521329,6660701|2521352,6660766|2521373,6660806|2521389,6660824|2521414,6660844|2521436,6660858|2521470,6660883|2521485,6660894|2521494,6660908|2521497,6660923|2521497,6660933|2521465,6661048|2521464,6661058|2521466,6661083|2521488,6661153|2521508,6661192|2521549,6661262|2521569,6661292|2521598,6661345|2521610,6661371|2521625,6661407|2521680,6661537|2521688,6661568|2521699,6661595|2521712,6661614|2521761,6661666|2521774,6661683|2521781,6661701|2521790,6661749|2521798,6661765|2521812,6661780|2521856,6661814|2521865,6661827|2521870,6661839|2521872,6661849|2521872,6661855|2521871,6661871|2521869,6661883|2521858,6661911|2521849,6661933|2521839,6661962|2521823,6662004|2521814,6662038|2521798,6662116|2521779,6662201|2521777,6662217|2521779,6662239|2521782,6662258|2521786,6662270|2521796,6662289|2521818,6662318|2521878,6662383|2521993,6662528|2522008,6662543|2522018,6662554|2522086,6662618|2522120,6662651|2522134,6662671|2522162,6662728|2522173,6662747|2522202,6662788|2522206,6662792|2522232,6662821|2522257,6662843|2522282,6662867|2522301,6662892|2522324,6662936|2522391,6663095|2522450,6663237|2522461,6663265|2522476,6663298|2522497,6663348|2522525,6663414|2522536,6663435|2522550,6663458|2522579,6663492|2522635,6663548|2522699,6663613|2522735,6663648|2522740,6663654|2522763,6663683|2522791,6663726|2522836,6663797|2522864,6663843|2522892,6663904|2522905,6663946|2522912,6663973|2522915,6663988|2522968,6664280|2522998,6664400|2523007,6664435|2523013,6664461|2523032,6664538|2523050,6664614|2523101,6664797|2523090,6664801|2522981,6664816|2522957,6664819|2522911,6664822|2522891,6664822|2522823,6664812|2522732,6664789|2522642,6664761|2522612,6664747|2522582,6664727|2522523,6664673|2522503,6664654|2522469,6664626|2522451,6664613|2522423,6664595|2522388,6664576|2522345,6664560|2522303,6664550|2522287,6664548|2522245,6664541|2522200,6664535|2522002,6664511|2521959,6664501|2521933,6664493|2521907,6664480|2521865,6664456|2521841,6664437|2521823,6664422|2521769,6664368|2521744,6664348|2521744,6664348|2521725,6664335|2521702,6664321|2521684,6664312|2521657,6664305|2521613,6664296|2521599,6664296|2521543,6664299|2521516,6664309|2521484,6664321|2521438,6664362|2521419,6664357|2521396,6664348|2521381,6664334|2521377,6664301|2521376,6664296|2521376,6664288|2521377,6664260|2521392,6664257|2521412,6664252|2521438,6664244|2521476,6664245|2521514,6664262|2521533,6664278|2521543,6664299|2521598,6664296|2521613,6664296|2521633,6664299|2521685,6664313|2521710,6664324|2521744,6664348|2521768,6664368|2521785,6664385|2521812,6664411|2521823,6664422|2521841,6664438|2521865,6664456|2521906,6664480|2521933,6664493|2521959,6664501|2522002,6664511|2522039,6664516|2522204,6664536|2522298,6664549|2522325,6664555|2522344,6664560|2522387,6664576|2522423,6664595|2522452,6664613|2522487,6664640|2522517,6664668|2522554,6664701|2522582,6664727|2522611,6664747|2522643,6664761|2522733,6664789|2522822,6664812|2522891,6664822|2522926,6664822|2522973,6664817|2523013,6664811|2523041,6664808|2523089,6664801|2523101,6664797|2523113,6664836|2523118,6664853|2523123,6664870|2523135,6664899|2523150,6664928|2523164,6664951|2523178,6664969|2523214,6665009|2523234,6665028|2523282,6665085|2523289,6665096|2523300,6665115|2523306,6665124|2523326,6665173|2523352,6665255|2523367,6665291|2523390,6665336|2523407,6665362|2523419,6665376|2523454,6665411|2523481,6665432|2523524,6665459|2523558,6665475|2523616,6665499|2523647,6665511|2523664,6665518|2523721,6665541|2524002,6665652|2524047,6665671|2524090,6665692|2524154,6665728|2524184,6665748|2524224,6665775|2524246,6665793|2524272,6665813|2524320,6665857|2524351,6665888|2524537,6666090|2524574,6666132|2524604,6666167|2524625,6666192|2524816,6666426|2524836,6666452|2524850,6666468|2524892,6666520|2524910,6666545|2524919,6666561|2524924,6666570|2524929,6666579|2524940,6666609|2524945,6666621|2524945,6666623|2524957,6666671|2524961,6666711|2524962,6666742|2524957,6666794|2524948,6666848|2524943,6666875|2524937,6666901|2524934,6666918|2524881,6667192|2524851,6667357|2524829,6667464|2524823,6667497|2524822,6667517|2524790,6667660|2524754,6667858|2524759,6667859|2524765,6667863|2524769,6667868|2524770,6667874|2524770,6667880|2524767,6667887|2524761,6667891|2524755,6667893|2524749,6667893|2524743,6667892|2524738,6667889|2524735,6667883|2524734,6667876|2524734,6667875|2524725,6667875|2524682,6667860|2524679,6667863|2524674,6667865|2524670,6667864|2524666,6667860|2524666,6667854|2524668,6667850|2524674,6667848|2524679,6667849|2524698,6667826|2524718,6667793|2524739,6667742|2524752,6667701|2524751,6667690|2524742,6667634|2524669,6667620|2524657,6667629|2524653,6667634|2524652,6667640|2524652,6667646|2524653,6667650|2524655,6667654|2524644,6667664|2524523,6667672|2524435,6667678|2524405,6667678|2524329,6667667|2524279,6667660|2524211,6667662|2524060,6667672|2524045,6667676|2524033,6667683|2524022,6667693|2524016,6667709|2524011,6667725|2524010,6667743|2524006,6667771|2523998,6667794|2523982,6667829|2523963,6667860|2523953,6667882|2523945,6667903|2523942,6667927|2523941,6667956|2523941,6667983|2523942,6667998|2523943,6668045|2523939,6668063|2523930,6668079|2523917,6668098|2523897,6668120|2523874,6668139|2523859,6668152|2523822,6668114|2523794,6668092|2523761,6668073|2523734,6668060|2523706,6668049|2523685,6668045|2523659,6668037|2523638,6668031|2523625,6668027|2523592,6668016|2523574,6668011|2523484,6667997|2523458,6667994|2523395,6667975|2523365,6667962|2523340,6667954|2523317,6667950|2523255,6667953|2523224,6667951|2523157,6667940|2523125,6667940|2523111,6667942|2523083,6667951|2523010,6667995|2523019,6668123|2523021,6668139|2523023,6668151|2523029,6668189|2523030,6668193|2523053,6668224|2523074,6668245|2523248,6668362|2523268,6668382|2523286,6668406|2523297,6668430|2523299,6668438|2523314,6668474|2523344,6668522|2523361,6668543|2523405,6668587|2523431,6668619|2523453,6668656|2523463,6668680|2523478,6668705|2523488,6668720|2523500,6668738|2523513,6668756|2523542,6668787|2523567,6668805|2523581,6668812|2523621,6668824|2523643,6668826|2523663,6668826|2523803,6668812|2523818,6668813|2523835,6668816|2523884,6668822|2523898,6668824|2523927,6668827|2523959,6668832|2524069,6668847|2524164,6668861|2524177,6668872|2524150,6668913|2524134,6668943|2524131,6668950|2524109,6668988|2524095,6669012|2524087,6669025|2524033,6669131|2524020,6669149|2524010,6669158|2524001,6669162|2524038,6669174|2524058,6669184|2524081,6669196|2524094,6669202|2524109,6669212|2524144,6669232|2524157,6669240|2524226,6669267|2524295,6669281|2524358,6669282|2524398,6669280|2524468,6669261|2524531,6669249|2524604,6669242|2524704,6669243|2524734,6669244|2524763,6669245|2524790,6669247|2524814,6669249|2524894,6669251|2524894,6669274|2524896,6669295|2524914,6669359|2524967,6669508|2524996,6669575|2525012,6669599|2525067,6669581|2525012,6669599|2524996,6669575|2524979,6669537|2524967,6669508|2524934,6669418|2524914,6669359|2524897,6669295|2524894,6669274|2524894,6669251|2524898,6669223|2524908,6669189|2524931,6669146|2524978,6669064|2524990,6669042|2525008,6669011|2525020,6668985|2525034,6668946|2525039,6668923|2525042,6668885|2525035,6668829|2525022,6668790|2525014,6668772|2525009,6668759|2525001,6668743|2524992,6668725|2524987,6668715|2524981,6668704|2524951,6668660|2524906,6668607|2524803,6668498|2524779,6668470|2524753,6668440|2524733,6668411|2524718,6668385|2524713,6668374|2524712,6668367|2524705,6668336|2524701,6668305|2524701,6668287|2524706,6668203|2524720,6668083|2524769,6668091|2524786,6668093|2524813,6668098|2524863,6668099|2524908,6668095|2525014,6668077|2525029,6668077|2525050,6668077|2525076,6668082|2525153,6668098|2525168,6668101|2525190,6668107|2525219,6668119|2525238,6668129|2525257,6668141|2525275,6668154|2525322,6668181|2525353,6668190|2525372,6668194|2525394,6668195|2525492,6668182|2525503,6668179|2525517,6668176|2525530,6668176|2525541,6668177|2525571,6668184|2525587,6668191|2525609,6668205|2525646,6668238|2525675,6668277|2525687,6668299|2525701,6668317|2525711,6668331|2525738,6668359|2525762,6668379|2525783,6668392|2525806,6668405|2525843,6668417|2525872,6668423|2525929,6668428|2525947,6668428|2525968,6668427|2526002,6668428|2526020,6668426|2526042,6668422|2526061,6668417|2526095,6668403|2526149,6668364|2526171,6668352|2526193,6668344|2526224,6668340|2526248,6668341|2526283,6668350|2526344,6668376|2526358,6668383|2526375,6668393|2526390,6668400|2526454,6668434|2526489,6668458|2526526,6668496|2526572,6668549|2526632,6668599|2526689,6668665|2526719,6668694|2526756,6668728|2526789,6668750|2526845,6668775|2526940,6668807|2526976,6668816|2527006,6668823|2527024,6668829|2527047,6668837|2527534,6669061|2527578,6669083|2527634,6669109|2528033,6669294|2528069,6669316|2528089,6669329|2528110,6669343|2528281,6669464|2528359,6669513|2528370,6669516|2528358,6669541|2528357,6669559|2528373,6669577|2528402,6669600|2528419,6669613|2528434,6669622|2528487,6669671|2528548,6669733|2528649,6669824|2528680,6669846|2528708,6669864|2528740,6669881|2528749,6669886|2528791,6669921|2528831,6669952|2528936,6670015|2528970,6670039|2528977,6670046|2529097,6670212|2529125,6670259|2529152,6670312|2529160,6670330|2529168,6670350|2529180,6670378|2529199,6670448|2529216,6670493|2529298,6670692|2529304,6670712|2529320,6670791|2529328,6670825|2529340,6670862|2529361,6670904|2529411,6670983|2529448,6671038|2529466,6671071|2529503,6671158|2529512,6671179|2529521,6671200|2529551,6671266|2529558,6671283|2529572,6671321|2529582,6671366|2529586,6671402|2529587,6671429|2529593,6671460|2529603,6671497|2529644,6671600|2529743,6671554|2529771,6671541|2529808,6671524|2529924,6671470|2529961,6671455|2530000,6671441|2530047,6671427|2530107,6671414|2530164,6671407|2530201,6671405|2530231,6671407|2530283,6671415|2530332,6671429|2530351,6671435|2530376,6671439|2530387,6671439|2530412,6671435|2530423,6671429|2530446,6671408|2530462,6671392|2530479,6671371|2530489,6671357|2530573,6671262|2530606,6671230|2530642,6671194|2530669,6671170|2530690,6671155|2530722,6671141|2530774,6671124|2530817,6671116|2530953,6671125|2530996,6671123|2531029,6671118|2531065,6671111|2531106,6671097|2531239,6671047|2531306,6671020|2531343,6671008|2531378,6671002|2531414,6670998|2531463,6670996|2531529,6670994|2531593,6670978|2531622,6670971|2531841,6670895|2531951,6670856|2531980,6670844|2531994,6670837|2532003,6670833|2532028,6670821|2532051,6670808|2532058,6670800|2532202,6670665|2532230,6670677|2532240,6670684|2532274,6670706|2532365,6670759|2532426,6670788|2532489,6670822|2532679,6670899|2532874,6671003|2533005,6671091|2533121,6671177|2533247,6671275|2533425,6671414|2533574,6671521|2533745,6671641|2533851,6671711|2533970,6671791|2534056,6671849|2534185,6671935|2534252,6671982|2534321,6672009|2534371,6672032|2534409,6672048|2534459,6672060|2534527,6672075|2534587,6672082|2534683,6672085|2534773,6672077|2534847,6672065|2534923,6672046|2535041,6672007|2535332,6671903|2535357,6671894|2535464,6671855|2535693,6671775|2535797,6671739|2536024,6671664|2536148,6671624|2536271,6671588|2536420,6671548|2536550,6671519|2536689,6671495|2536718,6671491|2536804,6671482|2536931,6671477|2536998,6671477|2537025,6671479|2537038,6671480|2537105,6671474|2537144,6671469|2537175,6671464|2537248,6671492|2537316,6671489|2537382,6671515|2537462,6671531|2537530,6671549|2537578,6671562|2537627,6671578|2537724,6671611|2537879,6671666|2538014,6671717|2538176,6671787|2538434,6671909|2538578,6671980|2538582,6671983|2538760,6672081|2538796,6672098|2538880,6672135|2538979,6672177|2539057,6672201|2539116,6672223|2539193,6672251|2539219,6672260|2539324,6672283|2539395,6672299|2539438,6672307|2539542,6672311|2539618,6672339|2539644,6672347|2539702,6672355|2539716,6672357|2539829,6672371|2539921,6672379|2540003,6672387|2540047,6672392|2540185,6672405|2540331,6672422|2540372,6672429|2540448,6672442|2540582,6672471|2540654,6672491|2540750,6672519|2540777,6672526|2540873,6672560|2540972,6672599|2541022,6672571|2541048,6672631|2541078,6672644|2541085,6672647|2541135,6672670|2541200,6672698|2541233,6672714|2541318,6672753|2541407,6672792|2541503,6672832|2541596,6672868|2541683,6672894|2541783,6672918|2541882,6672934|2541901,6672936|2541935,6672939|2541979,6672941|2542026,6672939|2542125,6672966|2542251,6672963|2542344,6672995|2542724,6673067|2542796,6673082|2542883,6673107|2542975,6673130|2543021,6673141|2543166,6673176|2543266,6673197|2543296,6673204|2543362,6673215|2543398,6673221|2543503,6673233|2543613,6673242|2543739,6673247|2543937,6673250|2544001,6673251|2544028,6673252|2544051,6673253|2544132,6673256|2544237,6673263|2544337,6673275|2544381,6673281|2544745,6673291|2544800,6673296|2544838,6673299|2544904,6673305|2544948,6673309|2544962,6673314|2545035,6673321|2545127,6673321|2545182,6673338|2545226,6673340|2545280,6673337|2545338,6673341|2545399,6673352|2545580,6673385|2545683,6673377|2545886,6673350|2545976,6673338|2546035,6673325|2546083,6673316|2546219,6673288|2546229,6673286|2546326,6673261|2546501,6673209|2546587,6673174|2546662,6673138|2546784,6673074|2546842,6673046|2546864,6673037|2546908,6673018|2546948,6673003|2546958,6672998|2546986,6672989|2547052,6672966|2547104,6672945|2547117,6672941|2547204,6672911|2547345,6672864|2547409,6672842|2547469,6672822|2547522,6672805|2547579,6672785|2547650,6672762|2547675,6672753|2547742,6672732|2547799,6672713|2547824,6672705|2547841,6672699|2547877,6672687|2547883,6672685|2547921,6672673|2547934,6672668|2548084,6672624|2548139,6672614|2548206,6672608|2548251,6672609|2548339,6672615|2548389,6672625|2548459,6672643|2548486,6672652|2548541,6672673|2548554,6672679|2548596,6672697|2548648,6672720|2548686,6672736|2548744,6672761|2548790,6672781|2548835,6672800|2548866,6672811|2548939,6672839|2549006,6672862|2549015,6672866|2549049,6672876|2549132,6672900|2549141,6672903|2549164,6672909|2549193,6672917|2549237,6672929|2549341,6672955|2549529,6673000|2549673,6673035|2550008,6673115|2550114,6673139|2550192,6673154|2550267,6673162|2550330,6673164|2550388,6673161|2550448,6673154|2550518,6673141|2550582,6673124|2550621,6673107|2550651,6673088|2550689,6673062|2550730,6673023|2550760,6672987|2550786,6672947|2550808,6672914|2550821,6672898|2550843,6672881|2550926,6672885|2551016,6672889|2551083,6672895|2551210,6672902|2551302,6672908|2551318,6672911|2551361,6672918|2551431,6672932|2551481,6672940|2551520,6672942|2551566,6672959|2551612,6672988|2551618,6673021|2551633,6673100|2551655,6673174|2551677,6673254|2551688,6673286|2551759,6673345|2551813,6673383",
			"line_start": "Upinniemi",
			"line_stops": [
				{
					"address": "Rantatie",
					"city_name": "Kirkkonummi",
					"code": "6100206",
					"codeShort": "Ki1006",
					"coords": "2520559,6657956",
					"name": "Upinniemen koulu",
					"time": 0
				},
				{
					"address": "Rantatie",
					"city_name": "Kirkkonummi",
					"code": "6100203",
					"codeShort": "Ki1003",
					"coords": "2520568,6657605",
					"name": "Upinniemi",
					"time": 0
				},
				{
					"address": "Rantatie",
					"city_name": "Kirkkonummi",
					"code": "6100201",
					"codeShort": "Ki1001",
					"coords": "2520595,6657375",
					"name": "Kaislalahti",
					"time": 1
				},
				{
					"address": "Rantatie",
					"city_name": "Kirkkonummi",
					"code": "6100202",
					"codeShort": "Ki1002",
					"coords": "2520133,6657459",
					"name": "Sotilaskoti",
					"time": 2
				},
				{
					"address": "Meritie",
					"city_name": "Kirkkonummi",
					"code": "6100205",
					"codeShort": "Ki1005",
					"coords": "2519934,6657741",
					"name": "Verkkoniemi",
					"time": 2
				},
				{
					"address": "Meritie",
					"city_name": "Kirkkonummi",
					"code": "6100207",
					"codeShort": "Ki1007",
					"coords": "2520373,6658059",
					"name": "Rakentajantie",
					"time": 3
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6100208",
					"codeShort": "Ki1008",
					"coords": "2520801,6658383",
					"name": "Harjukylä",
					"time": 4
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6100211",
					"codeShort": "Ki1011",
					"coords": "2520820,6659022",
					"name": "Meritie",
					"time": 5
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6080202",
					"codeShort": "Ki0802",
					"coords": "2520952,6659669",
					"name": "Upinniementie 897",
					"time": 6
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6080204",
					"codeShort": "Ki0804",
					"coords": "2521185,6660375",
					"name": "Annebergintie",
					"time": 7
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6080206",
					"codeShort": "Ki0806",
					"coords": "2521327,6660633",
					"name": "Kanelikuja",
					"time": 8
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6080207",
					"codeShort": "Ki0807",
					"coords": "2521488,6660859",
					"name": "Pippurintie",
					"time": 8
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6080209",
					"codeShort": "Ki0809",
					"coords": "2521638,6661359",
					"name": "Pippurniemi",
					"time": 9
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6070201",
					"codeShort": "Ki0701",
					"coords": "2521867,6661938",
					"name": "Ojango",
					"time": 10
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6070204",
					"codeShort": "Ki0704",
					"coords": "2522231,6662776",
					"name": "Strömsby",
					"time": 12
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6070206",
					"codeShort": "Ki0706",
					"coords": "2522489,6663252",
					"name": "Pilvijärventie",
					"time": 13
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6070207",
					"codeShort": "Ki0707",
					"coords": "2522766,6663633",
					"name": "Sepänkannas",
					"time": 14
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6070212",
					"codeShort": "Ki0712",
					"coords": "2522937,6663968",
					"name": "Kabanovintie",
					"time": 14
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6070217",
					"codeShort": "Ki0717",
					"coords": "2523060,6664532",
					"name": "Kantvikintie",
					"time": 15
				},
				{
					"address": "Sokeritehtaantie",
					"city_name": "Kirkkonummi",
					"code": "6070223",
					"codeShort": "Ki0723",
					"coords": "2522959,6664838",
					"name": "Edis",
					"time": 16
				},
				{
					"address": "Sokeritehtaantie",
					"city_name": "Kirkkonummi",
					"code": "6070220",
					"codeShort": "Ki0720",
					"coords": "2522486,6664675",
					"name": "Ristikalliontie",
					"time": 17
				},
				{
					"address": "Sokeritehtaantie",
					"city_name": "Kirkkonummi",
					"code": "6070237",
					"codeShort": "Ki0737",
					"coords": "2522242,6664562",
					"name": "Kantvik",
					"time": 17
				},
				{
					"address": "Sokeritehtaantie",
					"city_name": "Kirkkonummi",
					"code": "6070214",
					"codeShort": "Ki0714",
					"coords": "2521692,6664340",
					"name": "Harju",
					"time": 18
				},
				{
					"address": "Sokeritehtaantie",
					"city_name": "Kirkkonummi",
					"code": "6070213",
					"codeShort": "Ki0713",
					"coords": "2521372,6664297",
					"name": "Sokeritehdas",
					"time": 19
				},
				{
					"address": "Sokeritehtaantie",
					"city_name": "Kirkkonummi",
					"code": "6070216",
					"codeShort": "Ki0716",
					"coords": "2521810,6664360",
					"name": "Harju",
					"time": 20
				},
				{
					"address": "Sokeritehtaantie",
					"city_name": "Kirkkonummi",
					"code": "6070218",
					"codeShort": "Ki0718",
					"coords": "2522334,6664520",
					"name": "Kantvik",
					"time": 21
				},
				{
					"address": "Sokeritehtaantie",
					"city_name": "Kirkkonummi",
					"code": "6070219",
					"codeShort": "Ki0719",
					"coords": "2522544,6664639",
					"name": "Ristikalliontie",
					"time": 21
				},
				{
					"address": "Sokeritehtaantie",
					"city_name": "Kirkkonummi",
					"code": "6070222",
					"codeShort": "Ki0722",
					"coords": "2523009,6664780",
					"name": "Edis",
					"time": 22
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6070224",
					"codeShort": "Ki0724",
					"coords": "2523135,6664829",
					"name": "Sokeritehtaantie",
					"time": 22
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6070226",
					"codeShort": "Ki0726",
					"coords": "2523319,6665104",
					"name": "Aamuruskonkuja",
					"time": 23
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6070227",
					"codeShort": "Ki0727",
					"coords": "2523653,6665493",
					"name": "Syväjärvi",
					"time": 23
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6040201",
					"codeShort": "Ki0401",
					"coords": "2524246,6665745",
					"name": "Kolsari",
					"time": 25
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6040204",
					"codeShort": "Ki0404",
					"coords": "2524635,6666141",
					"name": "Eestinkyläntie",
					"time": 25
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6040206",
					"codeShort": "Ki0406",
					"coords": "2524870,6666425",
					"name": "Naissaarentie",
					"time": 26
				},
				{
					"address": "Upinniementie",
					"city_name": "Kirkkonummi",
					"code": "6040208",
					"codeShort": "Ki0408",
					"coords": "2524959,6666905",
					"name": "Jerikonmäki",
					"time": 27
				},
				{
					"address": "Kirkkonummentie",
					"city_name": "Kirkkonummi",
					"code": "6040260",
					"codeShort": "Ki0460",
					"coords": "2524842,6667501",
					"name": "Munkinmäentie",
					"time": 28
				},
				{
					"address": "Matkakeskus",
					"city_name": "Kirkkonummi",
					"code": "6040291",
					"codeShort": "Ki0491",
					"coords": "2524669,6667620",
					"name": "Kirkkonummi, Laituri 1",
					"platform_number": "1",
					"short_name": "Kirkkonummi mk",
					"terminal_code": "6000001",
					"terminal_name": "Kirkkonummi",
					"time": 30
				},
				{
					"address": "Nummitie",
					"city_name": "Kirkkonummi",
					"code": "6050254",
					"codeShort": "Ki0554",
					"coords": "2523966,6667984",
					"name": "Kotiniitynrinne",
					"time": 32
				},
				{
					"address": "Överbyntie",
					"city_name": "Kirkkonummi",
					"code": "6040234",
					"codeShort": "Ki0434",
					"coords": "2523633,6668047",
					"name": "Ravalsinkuja",
					"time": 32
				},
				{
					"address": "Lindalintie",
					"city_name": "Kirkkonummi",
					"code": "6040270",
					"codeShort": "Ki0470",
					"coords": "2523040,6668136",
					"name": "Ravals",
					"time": 34
				},
				{
					"address": "Lindalintie",
					"city_name": "Kirkkonummi",
					"code": "6040272",
					"codeShort": "Ki0472",
					"coords": "2523308,6668435",
					"name": "Ravalsintie",
					"time": 35
				},
				{
					"address": "Lindalintie",
					"city_name": "Kirkkonummi",
					"code": "6040276",
					"codeShort": "Ki0476",
					"coords": "2523501,6668690",
					"name": "Isännäntie",
					"time": 36
				},
				{
					"address": "Lindalintie",
					"city_name": "Kirkkonummi",
					"code": "6040278",
					"codeShort": "Ki0478",
					"coords": "2523930,6668797",
					"name": "Lindal",
					"time": 37
				},
				{
					"address": "Volsintie",
					"city_name": "Kirkkonummi",
					"code": "6040242",
					"codeShort": "Ki0442",
					"coords": "2524110,6669021",
					"name": "Vilhonkummuntie",
					"time": 38
				},
				{
					"address": "Vilhonkummuntie",
					"city_name": "Kirkkonummi",
					"code": "6040244",
					"codeShort": "Ki0444",
					"coords": "2524069,6669165",
					"name": "Vilhontie",
					"time": 38
				},
				{
					"address": "Vilhonkummuntie",
					"city_name": "Kirkkonummi",
					"code": "6040246",
					"codeShort": "Ki0446",
					"coords": "2524763,6669221",
					"name": "Papinmäen koulu",
					"time": 39
				},
				{
					"address": "Gesterbyntie",
					"city_name": "Kirkkonummi",
					"code": "6040284",
					"codeShort": "Ki0484",
					"coords": "2525067,6669581",
					"name": "Gesterbyn kp",
					"time": 40
				},
				{
					"address": "Gesterbyntie",
					"city_name": "Kirkkonummi",
					"code": "6040250",
					"codeShort": "Ki0450",
					"coords": "2524953,6669548",
					"name": "Gesterby",
					"time": 41
				},
				{
					"address": "Gesterbyntie",
					"city_name": "Kirkkonummi",
					"code": "6040281",
					"codeShort": "Ki0481",
					"coords": "2524958,6669024",
					"name": "Gesterbynpolku",
					"time": 42
				},
				{
					"address": "Gesterbyntie",
					"city_name": "Kirkkonummi",
					"code": "6040277",
					"codeShort": "Ki0477",
					"coords": "2524976,6668733",
					"name": "Gesterbynkaari",
					"time": 42
				},
				{
					"address": "Vanha Rantatie",
					"city_name": "Kirkkonummi",
					"code": "6050252",
					"codeShort": "Ki0552",
					"coords": "2524789,6668080",
					"name": "Kirkkotallintie",
					"time": 44
				},
				{
					"address": "Vanha Rantatie",
					"city_name": "Kirkkonummi",
					"code": "6040217",
					"codeShort": "Ki0417",
					"coords": "2525249,6668110",
					"name": "Jolkby",
					"time": 45
				},
				{
					"address": "Vanha Rantatie",
					"city_name": "Kirkkonummi",
					"code": "6040218",
					"codeShort": "Ki0418",
					"coords": "2525531,6668160",
					"name": "Heikkiläntie",
					"time": 45
				},
				{
					"address": "Vanha Rantatie",
					"city_name": "Kirkkonummi",
					"code": "6040221",
					"codeShort": "Ki0421",
					"coords": "2525706,6668286",
					"name": "Kaksosvuorentie",
					"time": 45
				},
				{
					"address": "Vanha Rantatie",
					"city_name": "Kirkkonummi",
					"code": "6040224",
					"codeShort": "Ki0424",
					"coords": "2525969,6668407",
					"name": "Hirvitie",
					"time": 46
				},
				{
					"address": "Vanha Rantatie",
					"city_name": "Kirkkonummi",
					"code": "6040223",
					"codeShort": "Ki0423",
					"coords": "2526388,6668374",
					"name": "Karhutie",
					"time": 47
				},
				{
					"address": "Vanha Rantatie",
					"city_name": "Kirkkonummi",
					"code": "6040227",
					"codeShort": "Ki0427",
					"coords": "2527011,6668804",
					"name": "Killinmäki",
					"time": 48
				},
				{
					"address": "Vanha Rantatie",
					"city_name": "Kirkkonummi",
					"code": "6030214",
					"codeShort": "Ki0314",
					"coords": "2527594,6669049",
					"name": "Stor-Kvis",
					"time": 49
				},
				{
					"address": "Vanha Rantatie",
					"city_name": "Kirkkonummi",
					"code": "6030217",
					"codeShort": "Ki0317",
					"coords": "2528102,6669309",
					"name": "Kvis",
					"time": 50
				},
				{
					"address": "Masalantie",
					"city_name": "Kirkkonummi",
					"code": "6030222",
					"codeShort": "Ki0322",
					"coords": "2528427,6669571",
					"name": "Jorvaksenkuja",
					"time": 50
				},
				{
					"address": "Masalantie",
					"city_name": "Kirkkonummi",
					"code": "6030225",
					"codeShort": "Ki0325",
					"coords": "2528723,6669836",
					"name": "Autioniityntie",
					"time": 51
				},
				{
					"address": "Masalantie",
					"city_name": "Kirkkonummi",
					"code": "6030227",
					"codeShort": "Ki0327",
					"coords": "2529176,6670323",
					"name": "Ingvalsby",
					"time": 52
				},
				{
					"address": "Masalantie",
					"city_name": "Kirkkonummi",
					"code": "6020210",
					"codeShort": "Ki0210",
					"coords": "2529532,6671170",
					"name": "Hulluksentie",
					"time": 53
				},
				{
					"address": "Sundsbergintie",
					"city_name": "Kirkkonummi",
					"code": "6020215",
					"codeShort": "Ki0215",
					"coords": "2529763,6671524",
					"name": "Masalan kirjasto",
					"time": 54
				},
				{
					"address": "Sundsbergintie",
					"city_name": "Kirkkonummi",
					"code": "6020213",
					"codeShort": "Ki0213",
					"coords": "2530453,6671351",
					"name": "Sundetin puistotie",
					"time": 55
				},
				{
					"address": "Sundsbergintie",
					"city_name": "Kirkkonummi",
					"code": "6020207",
					"codeShort": "Ki0207",
					"coords": "2531584,6670952",
					"name": "Sundsberginraitti",
					"time": 57
				},
				{
					"address": "Sundsbergintie",
					"city_name": "Kirkkonummi",
					"code": "6020259",
					"codeShort": "Ki0259",
					"coords": "2531989,6670827",
					"name": "Sundsbergintie",
					"time": 57
				},
				{
					"address": "Jorvaksentie",
					"city_name": "Kirkkonummi",
					"code": "6020201",
					"codeShort": "Ki0201",
					"coords": "2532235,6670670",
					"name": "Sarvvikinportti",
					"time": 57
				},
				{
					"address": "Länsiväylä",
					"city_name": "Espoo",
					"code": "2443227",
					"codeShort": "E4444",
					"coords": "2537250,6671477",
					"name": "Espoonlahdensolmu",
					"time": 62
				},
				{
					"address": "Länsiväylä",
					"city_name": "Espoo",
					"code": "2442201",
					"codeShort": "E4417",
					"coords": "2539440,6672291",
					"name": "Finnoonsolmu",
					"time": 64
				},
				{
					"address": "Länsiväylä",
					"city_name": "Espoo",
					"code": "2311220",
					"codeShort": "E3117",
					"coords": "2541060,6672607",
					"name": "Piispansilta",
					"time": 67
				},
				{
					"address": "Länsiväylä",
					"city_name": "Espoo",
					"code": "2232280",
					"codeShort": "E2368",
					"coords": "2542128,6672945",
					"name": "Matinsolmu",
					"time": 68
				},
				{
					"address": "Länsiväylä",
					"city_name": "Espoo",
					"code": "2232232",
					"codeShort": "E2359",
					"coords": "2543064,6673117",
					"name": "Haukilahdensolmu",
					"time": 69
				},
				{
					"address": "Westendinasema",
					"city_name": "Espoo",
					"code": "2231202",
					"codeShort": "E2302",
					"coords": "2544838,6673305",
					"name": "Westendin asema, Laituri 1",
					"platform_number": "1",
					"short_name": "Westendinasema",
					"terminal_code": "2000006",
					"terminal_name": "Westendin asema",
					"time": 70
				},
				{
					"address": "Karhusaarentie",
					"city_name": "Espoo",
					"code": "2231201",
					"codeShort": "E2301",
					"coords": "2546031,6673305",
					"name": "Karhusaari",
					"time": 71
				},
				{
					"address": "Länsiväylä",
					"city_name": "Espoo",
					"code": "2232204",
					"codeShort": "E2332",
					"coords": "2546949,6672976",
					"name": "Hanasaari",
					"time": 72
				},
				{
					"address": "Porkkalankatu",
					"city_name": "Helsinki",
					"code": "1201130",
					"codeShort": "1014",
					"coords": "2550928,6672867",
					"name": "Länsiväylä",
					"time": 76
				},
				{
					"address": "Lapinrinne",
					"city_name": "Helsinki",
					"code": "1040234",
					"codeShort": "1233",
					"coords": "2551645,6673097",
					"name": "Lapinrinne",
					"time": 78
				},
				{
					"address": "Kamppi",
					"city_name": "Helsinki",
					"code": "1040289",
					"codeShort": "",
					"coords": "2551815,6673380",
					"name": "Kamppi, tulo",
					"time": 79
				}
			],
			"name": "Kamppi - Masala - Kirkkonummi - Upinniemi",
			"timetable_url": "http://aikataulut.hsl.fi/linjat/fi/s173.html",
			"transport_type_id": 5
		}
	];
	lines["6171  2"] = [
		{
			"code": "6171  2",
			"code_short": "171",
			"transport_type_id": 5,
			"line_start": "Kirkkonummi",
			"line_end": "Kamppi",
			"name": "Kamppi - Masala - Kirkkonummi",
			"timetable_url": "http://aikataulut.hsl.fi/linjat/fi/s171.html",
			"line_shape": "2524669,6667620|2524657,6667629|2524653,6667634|2524652,6667640|2524652,6667646|2524653,6667650|2524655,6667654|2524644,6667664|2524523,6667672|2524435,6667678|2524405,6667678|2524329,6667667|2524279,6667660|2524211,6667662|2524060,6667672|2524045,6667676|2524033,6667683|2524022,6667693|2524016,6667709|2524011,6667725|2524010,6667743|2524006,6667771|2523998,6667794|2523982,6667829|2523963,6667860|2523953,6667882|2523945,6667903|2523942,6667927|2523941,6667956|2523941,6667983|2523942,6667998|2523943,6668045|2523939,6668063|2523930,6668079|2523917,6668098|2523897,6668120|2523874,6668139|2523859,6668152|2523822,6668114|2523794,6668092|2523761,6668073|2523734,6668060|2523706,6668049|2523685,6668045|2523659,6668037|2523638,6668031|2523625,6668027|2523592,6668016|2523574,6668011|2523484,6667997|2523458,6667994|2523395,6667975|2523365,6667962|2523340,6667954|2523317,6667950|2523255,6667953|2523224,6667951|2523157,6667940|2523125,6667940|2523111,6667942|2523083,6667951|2523010,6667995|2523019,6668123|2523021,6668139|2523023,6668151|2523029,6668189|2523030,6668193|2523053,6668224|2523074,6668245|2523248,6668362|2523268,6668382|2523286,6668406|2523297,6668430|2523299,6668438|2523314,6668474|2523344,6668522|2523361,6668543|2523405,6668587|2523431,6668619|2523453,6668656|2523463,6668680|2523478,6668705|2523488,6668720|2523500,6668738|2523513,6668756|2523542,6668787|2523567,6668805|2523581,6668812|2523621,6668824|2523643,6668826|2523663,6668826|2523803,6668812|2523818,6668813|2523835,6668816|2523884,6668822|2523898,6668824|2523927,6668827|2523959,6668832|2524069,6668847|2524164,6668861|2524177,6668872|2524150,6668913|2524134,6668943|2524131,6668950|2524109,6668988|2524095,6669012|2524087,6669025|2524033,6669131|2524020,6669149|2524010,6669158|2524001,6669162|2524038,6669174|2524058,6669184|2524081,6669196|2524094,6669202|2524109,6669212|2524144,6669232|2524157,6669240|2524226,6669267|2524295,6669281|2524358,6669282|2524398,6669280|2524468,6669261|2524531,6669249|2524604,6669242|2524704,6669243|2524734,6669244|2524763,6669245|2524790,6669247|2524814,6669249|2524894,6669251|2524894,6669274|2524896,6669295|2524914,6669359|2524967,6669508|2524996,6669575|2525012,6669599|2525067,6669581|2525012,6669599|2524996,6669575|2524979,6669537|2524967,6669508|2524934,6669418|2524914,6669359|2524897,6669295|2524894,6669274|2524894,6669251|2524898,6669223|2524908,6669189|2524931,6669146|2524978,6669064|2524990,6669042|2525008,6669011|2525020,6668985|2525034,6668946|2525039,6668923|2525042,6668885|2525035,6668829|2525022,6668790|2525014,6668772|2525009,6668759|2525001,6668743|2524992,6668725|2524987,6668715|2524981,6668704|2524951,6668660|2524906,6668607|2524803,6668498|2524779,6668470|2524753,6668440|2524733,6668411|2524718,6668385|2524713,6668374|2524712,6668367|2524705,6668336|2524701,6668305|2524701,6668287|2524706,6668203|2524720,6668083|2524769,6668091|2524786,6668093|2524813,6668098|2524863,6668099|2524908,6668095|2525014,6668077|2525029,6668077|2525050,6668077|2525076,6668082|2525153,6668098|2525168,6668101|2525190,6668107|2525219,6668119|2525238,6668129|2525257,6668141|2525275,6668154|2525322,6668181|2525353,6668190|2525372,6668194|2525394,6668195|2525492,6668182|2525503,6668179|2525517,6668176|2525530,6668176|2525541,6668177|2525571,6668184|2525587,6668191|2525609,6668205|2525646,6668238|2525675,6668277|2525687,6668299|2525701,6668317|2525711,6668331|2525738,6668359|2525762,6668379|2525783,6668392|2525806,6668405|2525843,6668417|2525872,6668423|2525929,6668428|2525947,6668428|2525968,6668427|2526002,6668428|2526020,6668426|2526042,6668422|2526061,6668417|2526095,6668403|2526149,6668364|2526171,6668352|2526193,6668344|2526224,6668340|2526248,6668341|2526283,6668350|2526344,6668376|2526358,6668383|2526375,6668393|2526390,6668400|2526454,6668434|2526489,6668458|2526526,6668496|2526572,6668549|2526632,6668599|2526689,6668665|2526719,6668694|2526756,6668728|2526789,6668750|2526845,6668775|2526940,6668807|2526976,6668816|2527006,6668823|2527024,6668829|2527047,6668837|2527534,6669061|2527578,6669083|2527634,6669109|2528033,6669294|2528069,6669316|2528089,6669329|2528110,6669343|2528281,6669464|2528359,6669513|2528370,6669516|2528358,6669541|2528357,6669559|2528373,6669577|2528402,6669600|2528419,6669613|2528434,6669622|2528487,6669671|2528548,6669733|2528649,6669824|2528680,6669846|2528708,6669864|2528740,6669881|2528749,6669886|2528791,6669921|2528831,6669952|2528936,6670015|2528970,6670039|2528977,6670046|2529097,6670212|2529125,6670259|2529152,6670312|2529160,6670330|2529168,6670350|2529180,6670378|2529199,6670448|2529216,6670493|2529298,6670692|2529304,6670712|2529320,6670791|2529328,6670825|2529340,6670862|2529361,6670904|2529411,6670983|2529448,6671038|2529466,6671071|2529503,6671158|2529512,6671179|2529521,6671200|2529551,6671266|2529558,6671283|2529572,6671321|2529582,6671366|2529586,6671402|2529587,6671429|2529593,6671460|2529603,6671497|2529644,6671600|2529743,6671554|2529771,6671541|2529808,6671524|2529924,6671470|2529961,6671455|2530000,6671441|2530047,6671427|2530107,6671414|2530164,6671407|2530201,6671405|2530231,6671407|2530283,6671415|2530332,6671429|2530351,6671435|2530376,6671439|2530387,6671439|2530412,6671435|2530423,6671429|2530446,6671408|2530462,6671392|2530479,6671371|2530489,6671357|2530573,6671262|2530606,6671230|2530642,6671194|2530669,6671170|2530690,6671155|2530722,6671141|2530774,6671124|2530817,6671116|2530953,6671125|2530996,6671123|2531029,6671118|2531065,6671111|2531106,6671097|2531239,6671047|2531306,6671020|2531343,6671008|2531378,6671002|2531414,6670998|2531463,6670996|2531529,6670994|2531593,6670978|2531622,6670971|2531841,6670895|2531951,6670856|2531980,6670844|2531994,6670837|2532003,6670833|2532028,6670821|2532051,6670808|2532058,6670800|2532202,6670665|2532224,6670645|2532245,6670624|2532257,6670618|2532273,6670611|2532299,6670615|2532318,6670624|2532344,6670652|2532364,6670672|2532374,6670687|2532385,6670697|2532411,6670727|2532423,6670739|2532437,6670747|2532452,6670758|2532498,6670779|2532535,6670792|2532602,6670808|2532645,6670820|2532742,6670864|2532814,6670906|2532830,6670915|2532851,6670926|2532907,6670960|2533014,6671032|2533075,6671076|2533155,6671144|2533213,6671189|2533230,6671200|2533243,6671209|2533327,6671270|2533431,6671351|2533473,6671385|2533537,6671435|2533547,6671445|2533559,6671455|2533614,6671499|2533726,6671595|2533748,6671609|2533810,6671655|2533855,6671686|2533894,6671723|2533913,6671736|2533926,6671746|2533932,6671750|2533946,6671761|2533966,6671775|2533982,6671786|2533993,6671786|2534004,6671791|2534030,6671814|2534057,6671832|2534164,6671903|2534203,6671926|2534230,6671942|2534261,6671958|2534293,6671969|2534313,6671977|2534370,6671994|2534414,6672007|2534458,6672014|2534511,6672014|2534524,6671963|2534558,6672009|2534593,6671996|2534631,6671976|2534674,6671951|2534716,6671927|2534766,6671897|2534798,6671881|2534844,6671864|2534865,6671856|2534934,6671842|2534993,6671833|2535015,6671836|2535035,6671843|2535068,6671854|2535091,6671860|2535114,6671875|2535163,6671897|2535192,6671906|2535237,6671912|2535282,6671908|2535318,6671903|2535332,6671903|2535357,6671894|2535464,6671855|2535693,6671775|2535797,6671739|2536024,6671664|2536148,6671624|2536271,6671588|2536420,6671548|2536550,6671519|2536689,6671495|2536718,6671491|2536804,6671482|2536931,6671477|2536998,6671477|2537025,6671479|2537038,6671480|2537105,6671474|2537144,6671469|2537175,6671464|2537248,6671492|2537316,6671489|2537382,6671515|2537462,6671531|2537530,6671549|2537578,6671562|2537627,6671578|2537724,6671611|2537879,6671666|2538014,6671717|2538176,6671787|2538434,6671909|2538578,6671980|2538582,6671983|2538760,6672081|2538796,6672098|2538880,6672135|2538979,6672177|2539057,6672201|2539116,6672223|2539193,6672251|2539219,6672260|2539324,6672283|2539395,6672299|2539438,6672307|2539542,6672311|2539618,6672339|2539644,6672347|2539702,6672355|2539716,6672357|2539829,6672371|2539921,6672379|2540003,6672387|2540047,6672392|2540185,6672405|2540331,6672422|2540372,6672429|2540448,6672442|2540582,6672471|2540654,6672491|2540750,6672519|2540777,6672526|2540873,6672560|2540972,6672599|2541022,6672571|2541048,6672631|2541078,6672644|2541085,6672647|2541135,6672670|2541200,6672698|2541233,6672714|2541318,6672753|2541407,6672792|2541503,6672832|2541596,6672868|2541683,6672894|2541783,6672918|2541882,6672934|2541901,6672936|2541935,6672939|2541979,6672941|2542026,6672939|2542125,6672966|2542251,6672963|2542344,6672995|2542724,6673067|2542796,6673082|2542883,6673107|2542975,6673130|2543021,6673141|2543166,6673176|2543266,6673197|2543296,6673204|2543362,6673215|2543398,6673221|2543503,6673233|2543613,6673242|2543739,6673247|2543937,6673250|2544001,6673251|2544028,6673252|2544051,6673253|2544132,6673256|2544237,6673263|2544337,6673275|2544381,6673281|2544745,6673291|2544800,6673296|2544838,6673299|2544904,6673305|2544948,6673309|2544962,6673314|2545035,6673321|2545127,6673321|2545182,6673338|2545226,6673340|2545280,6673337|2545338,6673341|2545399,6673352|2545580,6673385|2545683,6673377|2545886,6673350|2545976,6673338|2546035,6673325|2546083,6673316|2546219,6673288|2546229,6673286|2546326,6673261|2546501,6673209|2546587,6673174|2546662,6673138|2546784,6673074|2546842,6673046|2546864,6673037|2546908,6673018|2546948,6673003|2546958,6672998|2546986,6672989|2547052,6672966|2547104,6672945|2547117,6672941|2547204,6672911|2547345,6672864|2547409,6672842|2547469,6672822|2547522,6672805|2547579,6672785|2547650,6672762|2547675,6672753|2547742,6672732|2547799,6672713|2547824,6672705|2547841,6672699|2547877,6672687|2547883,6672685|2547921,6672673|2547934,6672668|2548084,6672624|2548139,6672614|2548206,6672608|2548251,6672609|2548339,6672615|2548389,6672625|2548459,6672643|2548486,6672652|2548541,6672673|2548554,6672679|2548596,6672697|2548648,6672720|2548686,6672736|2548744,6672761|2548790,6672781|2548835,6672800|2548866,6672811|2548939,6672839|2549006,6672862|2549015,6672866|2549049,6672876|2549132,6672900|2549141,6672903|2549164,6672909|2549193,6672917|2549237,6672929|2549341,6672955|2549529,6673000|2549673,6673035|2550008,6673115|2550114,6673139|2550192,6673154|2550267,6673162|2550330,6673164|2550388,6673161|2550448,6673154|2550518,6673141|2550582,6673124|2550621,6673107|2550651,6673088|2550689,6673062|2550730,6673023|2550760,6672987|2550786,6672947|2550808,6672914|2550821,6672898|2550843,6672881|2550926,6672885|2551016,6672889|2551083,6672895|2551210,6672902|2551302,6672908|2551318,6672911|2551361,6672918|2551431,6672932|2551481,6672940|2551520,6672942|2551566,6672959|2551612,6672988|2551618,6673021|2551633,6673100|2551655,6673174|2551677,6673254|2551688,6673286|2551759,6673345|2551813,6673383",
			"line_stops": [
				{
					"code": "6040291",
					"codeShort": "Ki0491",
					"time": 0,
					"address": "Matkakeskus",
					"name": "Kirkkonummi, Laituri 1",
					"coords": "2524669,6667620",
					"city_name": "Kirkkonummi",
					"terminal_code": "6000001",
					"terminal_name": "Kirkkonummi",
					"short_name": "Kirkkonummi mk",
					"platform_number": "1"
				},
				{
					"code": "6050254",
					"codeShort": "Ki0554",
					"time": 2,
					"address": "Nummitie",
					"name": "Kotiniitynrinne",
					"coords": "2523966,6667984",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040234",
					"codeShort": "Ki0434",
					"time": 3,
					"address": "Överbyntie",
					"name": "Ravalsinkuja",
					"coords": "2523633,6668047",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040270",
					"codeShort": "Ki0470",
					"time": 5,
					"address": "Lindalintie",
					"name": "Ravals",
					"coords": "2523040,6668136",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040272",
					"codeShort": "Ki0472",
					"time": 6,
					"address": "Lindalintie",
					"name": "Ravalsintie",
					"coords": "2523308,6668435",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040276",
					"codeShort": "Ki0476",
					"time": 6,
					"address": "Lindalintie",
					"name": "Isännäntie",
					"coords": "2523501,6668690",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040278",
					"codeShort": "Ki0478",
					"time": 7,
					"address": "Lindalintie",
					"name": "Lindal",
					"coords": "2523930,6668797",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040242",
					"codeShort": "Ki0442",
					"time": 8,
					"address": "Volsintie",
					"name": "Vilhonkummuntie",
					"coords": "2524110,6669021",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040244",
					"codeShort": "Ki0444",
					"time": 9,
					"address": "Vilhonkummuntie",
					"name": "Vilhontie",
					"coords": "2524069,6669165",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040246",
					"codeShort": "Ki0446",
					"time": 10,
					"address": "Vilhonkummuntie",
					"name": "Papinmäen koulu",
					"coords": "2524763,6669221",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040284",
					"codeShort": "Ki0484",
					"time": 11,
					"address": "Gesterbyntie",
					"name": "Gesterbyn kp",
					"coords": "2525067,6669581",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040250",
					"codeShort": "Ki0450",
					"time": 12,
					"address": "Gesterbyntie",
					"name": "Gesterby",
					"coords": "2524953,6669548",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040281",
					"codeShort": "Ki0481",
					"time": 13,
					"address": "Gesterbyntie",
					"name": "Gesterbynpolku",
					"coords": "2524958,6669024",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040277",
					"codeShort": "Ki0477",
					"time": 13,
					"address": "Gesterbyntie",
					"name": "Gesterbynkaari",
					"coords": "2524976,6668733",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6050252",
					"codeShort": "Ki0552",
					"time": 15,
					"address": "Vanha Rantatie",
					"name": "Kirkkotallintie",
					"coords": "2524789,6668080",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040217",
					"codeShort": "Ki0417",
					"time": 16,
					"address": "Vanha Rantatie",
					"name": "Jolkby",
					"coords": "2525249,6668110",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040218",
					"codeShort": "Ki0418",
					"time": 16,
					"address": "Vanha Rantatie",
					"name": "Heikkiläntie",
					"coords": "2525531,6668160",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040221",
					"codeShort": "Ki0421",
					"time": 16,
					"address": "Vanha Rantatie",
					"name": "Kaksosvuorentie",
					"coords": "2525706,6668286",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040224",
					"codeShort": "Ki0424",
					"time": 17,
					"address": "Vanha Rantatie",
					"name": "Hirvitie",
					"coords": "2525969,6668407",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040223",
					"codeShort": "Ki0423",
					"time": 17,
					"address": "Vanha Rantatie",
					"name": "Karhutie",
					"coords": "2526388,6668374",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040227",
					"codeShort": "Ki0427",
					"time": 18,
					"address": "Vanha Rantatie",
					"name": "Killinmäki",
					"coords": "2527011,6668804",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6030214",
					"codeShort": "Ki0314",
					"time": 19,
					"address": "Vanha Rantatie",
					"name": "Stor-Kvis",
					"coords": "2527594,6669049",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6030217",
					"codeShort": "Ki0317",
					"time": 20,
					"address": "Vanha Rantatie",
					"name": "Kvis",
					"coords": "2528102,6669309",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6030222",
					"codeShort": "Ki0322",
					"time": 21,
					"address": "Masalantie",
					"name": "Jorvaksenkuja",
					"coords": "2528427,6669571",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6030225",
					"codeShort": "Ki0325",
					"time": 21,
					"address": "Masalantie",
					"name": "Autioniityntie",
					"coords": "2528723,6669836",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6030227",
					"codeShort": "Ki0327",
					"time": 22,
					"address": "Masalantie",
					"name": "Ingvalsby",
					"coords": "2529176,6670323",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020210",
					"codeShort": "Ki0210",
					"time": 24,
					"address": "Masalantie",
					"name": "Hulluksentie",
					"coords": "2529532,6671170",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020215",
					"codeShort": "Ki0215",
					"time": 25,
					"address": "Sundsbergintie",
					"name": "Masalan kirjasto",
					"coords": "2529763,6671524",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020213",
					"codeShort": "Ki0213",
					"time": 26,
					"address": "Sundsbergintie",
					"name": "Sundetin puistotie",
					"coords": "2530453,6671351",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020207",
					"codeShort": "Ki0207",
					"time": 28,
					"address": "Sundsbergintie",
					"name": "Sundsberginraitti",
					"coords": "2531584,6670952",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020259",
					"codeShort": "Ki0259",
					"time": 28,
					"address": "Sundsbergintie",
					"name": "Sundsbergintie",
					"coords": "2531989,6670827",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020249",
					"codeShort": "Ki0249",
					"time": 29,
					"address": "Sarvvikin puistotie",
					"name": "Heinäketo",
					"coords": "2532382,6670680",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020251",
					"codeShort": "Ki0251",
					"time": 29,
					"address": "Sarvvikin puistotie",
					"name": "Metsäniitty",
					"coords": "2532836,6670904",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020253",
					"codeShort": "Ki0253",
					"time": 30,
					"address": "Sarvvikin puistotie",
					"name": "Kelloniitty",
					"coords": "2533236,6671194",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020255",
					"codeShort": "Ki0255",
					"time": 30,
					"address": "Sarvvikin puistotie",
					"name": "Sarvvikintie",
					"coords": "2533554,6671437",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020257",
					"codeShort": "Ki0257",
					"time": 31,
					"address": "Sarvvikin puistotie",
					"name": "Rantaniitty",
					"coords": "2533930,6671741",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "2413229",
					"codeShort": "E4154",
					"time": 32,
					"address": "Vanha Jorvaksentie",
					"name": "Pihlajamäentie",
					"coords": "2534524,6671963",
					"city_name": "Espoo"
				},
				{
					"code": "2443227",
					"codeShort": "E4444",
					"time": 36,
					"address": "Länsiväylä",
					"name": "Espoonlahdensolmu",
					"coords": "2537250,6671477",
					"city_name": "Espoo"
				},
				{
					"code": "2442201",
					"codeShort": "E4417",
					"time": 38,
					"address": "Länsiväylä",
					"name": "Finnoonsolmu",
					"coords": "2539440,6672291",
					"city_name": "Espoo"
				},
				{
					"code": "2311220",
					"codeShort": "E3117",
					"time": 41,
					"address": "Länsiväylä",
					"name": "Piispansilta",
					"coords": "2541060,6672607",
					"city_name": "Espoo"
				},
				{
					"code": "2232280",
					"codeShort": "E2368",
					"time": 42,
					"address": "Länsiväylä",
					"name": "Matinsolmu",
					"coords": "2542128,6672945",
					"city_name": "Espoo"
				},
				{
					"code": "2232232",
					"codeShort": "E2359",
					"time": 43,
					"address": "Länsiväylä",
					"name": "Haukilahdensolmu",
					"coords": "2543064,6673117",
					"city_name": "Espoo"
				},
				{
					"code": "2231202",
					"codeShort": "E2302",
					"time": 45,
					"address": "Westendinasema",
					"name": "Westendin asema, Laituri 1",
					"coords": "2544838,6673305",
					"city_name": "Espoo",
					"terminal_code": "2000006",
					"terminal_name": "Westendin asema",
					"short_name": "Westendinasema",
					"platform_number": "1"
				},
				{
					"code": "2231201",
					"codeShort": "E2301",
					"time": 46,
					"address": "Karhusaarentie",
					"name": "Karhusaari",
					"coords": "2546031,6673305",
					"city_name": "Espoo"
				},
				{
					"code": "2232204",
					"codeShort": "E2332",
					"time": 47,
					"address": "Länsiväylä",
					"name": "Hanasaari",
					"coords": "2546949,6672976",
					"city_name": "Espoo"
				},
				{
					"code": "1201130",
					"codeShort": "1014",
					"time": 51,
					"address": "Porkkalankatu",
					"name": "Länsiväylä",
					"coords": "2550928,6672867",
					"city_name": "Helsinki"
				},
				{
					"code": "1040234",
					"codeShort": "1233",
					"time": 54,
					"address": "Lapinrinne",
					"name": "Lapinrinne",
					"coords": "2551645,6673097",
					"city_name": "Helsinki"
				},
				{
					"code": "1040289",
					"codeShort": "",
					"time": 55,
					"address": "Kamppi",
					"name": "Kamppi, tulo",
					"coords": "2551815,6673380",
					"city_name": "Helsinki"
				}
			],
			"date_from": "20150615",
			"date_to": "20161231"
		}
	];
	lines["6171A 2"] = [
		{
			"code": "6171A 2",
			"code_short": "171A",
			"transport_type_id": 5,
			"line_start": "Siuntio",
			"line_end": "Kamppi",
			"name": "Kamppi - Masala - Kirkkonummi - Siuntio",
			"timetable_url": "http://aikataulut.hsl.fi/linjat/fi/s171.html",
			"line_shape": "2512716,6669677|2512705,6669702|2512779,6669733|2512815,6669604|2512821,6669519|2512838,6669413|2512974,6669102|2513078,6668946|2513101,6668877|2513079,6668705|2513092,6668609|2513238,6668335|2513321,6668057|2513416,6667850|2513500,6667644|2513555,6667475|2513578,6667336|2513584,6667227|2513579,6666812|2513593,6666715|2513671,6666495|2513830,6666252|2513894,6666105|2513995,6665721|2514129,6665361|2514148,6665284|2514195,6664901|2514421,6664945|2514601,6664966|2514899,6664982|2515650,6664990|2516002,6665026|2516241,6665098|2516331,6664935|2516411,6664752|2516465,6664671|2516500,6664607|2516623,6664499|2516657,6664402|2516688,6664351|2516726,6664251|2516770,6664136|2516889,6663981|2516960,6663819|2516964,6663770|2516947,6663645|2516912,6663586|2516881,6663509|2516764,6663424|2516711,6663385|2516549,6663335|2516484,6663401|2516460,6663405|2516302,6663288|2516342,6663227|2516384,6663256|2516416,6663276|2516549,6663335|2516711,6663385|2516764,6663424|2516881,6663509|2516912,6663586|2516947,6663645|2516964,6663770|2516960,6663819|2516889,6663981|2516770,6664136|2516726,6664251|2516688,6664351|2516657,6664402|2516623,6664499|2516500,6664607|2516465,6664671|2516411,6664752|2516331,6664935|2516241,6665098|2516479,6665218|2516597,6665264|2516709,6665293|2516804,6665306|2516986,6665306|2516979,6665337|2516970,6665354|2516956,6665370|2516939,6665382|2516919,6665387|2516899,6665387|2516871,6665379|2516846,6665371|2516816,6665403|2516739,6665609|2516719,6665637|2516648,6665688|2516535,6665807|2516481,6665875|2516425,6665961|2516321,6666111|2516315,6666158|2516322,6666189|2516350,6666234|2516418,6666307|2516476,6666353|2516554,6666390|2516630,6666425|2516672,6666451|2516694,6666489|2516710,6666525|2516746,6666564|2516790,6666606|2516820,6666646|2516832,6666689|2516830,6666725|2516817,6666799|2516822,6666831|2516849,6666864|2516883,6666903|2516918,6666968|2516969,6666971|2516957,6666997|2517053,6667066|2517078,6667081|2517109,6667089|2517242,6667094|2517271,6667088|2517349,6667070|2517408,6667064|2517486,6667063|2517559,6667070|2517595,6667065|2517638,6667044|2517653,6667036|2517767,6667039|2517886,6667029|2517965,6667021|2518172,6667022|2518197,6667019|2518226,6667007|2518334,6666938|2518414,6666878|2518466,6666824|2518490,6666806|2518513,6666799|2518539,6666803|2518583,6666821|2518597,6666822|2518621,6666806|2518651,6666779|2518668,6666768|2518692,6666763|2518722,6666769|2518777,6666797|2518814,6666810|2518874,6666829|2518937,6666843|2518961,6666844|2519013,6666835|2519144,6666797|2519181,6666790|2519219,6666792|2519247,6666805|2519266,6666828|2519281,6666862|2519307,6666921|2519336,6666957|2519398,6667009|2519421,6667018|2519443,6667019|2519468,6667015|2519543,6667006|2519566,6667005|2519612,6667018|2519651,6667034|2519677,6667057|2519752,6667182|2519784,6667218|2519815,6667233|2519842,6667231|2519865,6667219|2519911,6667190|2519929,6667189|2519959,6667199|2519977,6667219|2519994,6667241|2520004,6667280|2520015,6667299|2520040,6667329|2520060,6667352|2520099,6667375|2520118,6667381|2520193,6667393|2520374,6667417|2520431,6667431|2520467,6667445|2520490,6667457|2520524,6667483|2520561,6667523|2520568,6667530|2520587,6667538|2520608,6667536|2520652,6667520|2520686,6667508|2520696,6667507|2520741,6667513|2520779,6667523|2520788,6667527|2520803,6667538|2520820,6667562|2520842,6667618|2520854,6667634|2520865,6667642|2520876,6667646|2520929,6667657|2520938,6667660|2520956,6667672|2521018,6667724|2521035,6667736|2521068,6667757|2521110,6667776|2521139,6667787|2521162,6667794|2521182,6667800|2521254,6667813|2521580,6667864|2521615,6667869|2521658,6667877|2521670,6667879|2521715,6667895|2521754,6667917|2521794,6667936|2521819,6667943|2521857,6667950|2521882,6667951|2521927,6667945|2521950,6667946|2522064,6667977|2522143,6667994|2522150,6667996|2522164,6668001|2522179,6668010|2522189,6668018|2522216,6668045|2522238,6668063|2522249,6668069|2522279,6668080|2522315,6668087|2522360,6668091|2522424,6668074|2522444,6668064|2522461,6668062|2522485,6668065|2522534,6668081|2522562,6668085|2522591,6668086|2522690,6668081|2522710,6668082|2522723,6668084|2522743,6668096|2522766,6668111|2522783,6668119|2522796,6668122|2522809,6668122|2522860,6668105|2522894,6668089|2522910,6668077|2522931,6668056|2522952,6668037|2522970,6668022|2522988,6668010|2523010,6667995|2523034,6667981|2523068,6667959|2523091,6667948|2523110,6667942|2523124,6667940|2523156,6667940|2523224,6667951|2523256,6667953|2523318,6667950|2523343,6667954|2523365,6667962|2523394,6667975|2523457,6667994|2523483,6667996|2523575,6668011|2523592,6668016|2523685,6668044|2523706,6668049|2523728,6668058|2523759,6668072|2523775,6668081|2523794,6668092|2523822,6668114|2523859,6668152|2523866,6668161|2523882,6668180|2523897,6668197|2523901,6668201|2523914,6668214|2523938,6668232|2523963,6668246|2523988,6668255|2524006,6668259|2524026,6668262|2524056,6668263|2524066,6668263|2524143,6668260|2524161,6668261|2524201,6668266|2524219,6668272|2524241,6668279|2524410,6668363|2524437,6668377|2524457,6668387|2524481,6668399|2524495,6668405|2524528,6668413|2524566,6668416|2524592,6668413|2524631,6668404|2524713,6668374|2524712,6668367|2524705,6668336|2524701,6668305|2524701,6668287|2524706,6668203|2524720,6668083|2524725,6668062|2524727,6668047|2524729,6668037|2524745,6667930|2524749,6667893|2524743,6667892|2524738,6667889|2524735,6667883|2524734,6667876|2524734,6667875|2524725,6667875|2524682,6667860|2524679,6667863|2524674,6667865|2524670,6667864|2524666,6667860|2524666,6667854|2524668,6667850|2524674,6667848|2524679,6667849|2524698,6667826|2524718,6667793|2524739,6667742|2524752,6667701|2524751,6667690|2524742,6667634|2524669,6667620|2524657,6667629|2524653,6667634|2524652,6667640|2524652,6667646|2524653,6667650|2524655,6667654|2524644,6667664|2524523,6667672|2524435,6667678|2524405,6667678|2524329,6667667|2524279,6667660|2524211,6667662|2524060,6667672|2524045,6667676|2524033,6667683|2524022,6667693|2524016,6667709|2524011,6667725|2524010,6667743|2524006,6667771|2523998,6667794|2523982,6667829|2523963,6667860|2523953,6667882|2523945,6667903|2523942,6667927|2523941,6667956|2523941,6667983|2523942,6667998|2523943,6668045|2523939,6668063|2523930,6668079|2523917,6668098|2523897,6668120|2523874,6668139|2523859,6668152|2523822,6668114|2523794,6668092|2523761,6668073|2523734,6668060|2523706,6668049|2523685,6668045|2523659,6668037|2523638,6668031|2523625,6668027|2523592,6668016|2523574,6668011|2523484,6667997|2523458,6667994|2523395,6667975|2523365,6667962|2523340,6667954|2523317,6667950|2523255,6667953|2523224,6667951|2523157,6667940|2523125,6667940|2523111,6667942|2523083,6667951|2523010,6667995|2523019,6668123|2523021,6668139|2523023,6668151|2523029,6668189|2523030,6668193|2523053,6668224|2523074,6668245|2523248,6668362|2523268,6668382|2523286,6668406|2523297,6668430|2523299,6668438|2523314,6668474|2523344,6668522|2523361,6668543|2523405,6668587|2523431,6668619|2523453,6668656|2523463,6668680|2523478,6668705|2523488,6668720|2523500,6668738|2523513,6668756|2523542,6668787|2523567,6668805|2523581,6668812|2523621,6668824|2523643,6668826|2523663,6668826|2523803,6668812|2523818,6668813|2523835,6668816|2523884,6668822|2523898,6668824|2523927,6668827|2523959,6668832|2524069,6668847|2524164,6668861|2524177,6668872|2524150,6668913|2524134,6668943|2524131,6668950|2524109,6668988|2524095,6669012|2524087,6669025|2524033,6669131|2524020,6669149|2524010,6669158|2524001,6669162|2524038,6669174|2524058,6669184|2524081,6669196|2524094,6669202|2524109,6669212|2524144,6669232|2524157,6669240|2524226,6669267|2524295,6669281|2524358,6669282|2524398,6669280|2524468,6669261|2524531,6669249|2524604,6669242|2524704,6669243|2524734,6669244|2524763,6669245|2524790,6669247|2524814,6669249|2524894,6669251|2524894,6669274|2524896,6669295|2524914,6669359|2524967,6669508|2524996,6669575|2525012,6669599|2525067,6669581|2525012,6669599|2524996,6669575|2524979,6669537|2524967,6669508|2524934,6669418|2524914,6669359|2524897,6669295|2524894,6669274|2524894,6669251|2524898,6669223|2524908,6669189|2524931,6669146|2524978,6669064|2524990,6669042|2525008,6669011|2525020,6668985|2525034,6668946|2525039,6668923|2525042,6668885|2525035,6668829|2525022,6668790|2525014,6668772|2525009,6668759|2525001,6668743|2524992,6668725|2524987,6668715|2524981,6668704|2524951,6668660|2524906,6668607|2524803,6668498|2524779,6668470|2524753,6668440|2524733,6668411|2524718,6668385|2524713,6668374|2524712,6668367|2524705,6668336|2524701,6668305|2524701,6668287|2524706,6668203|2524720,6668083|2524769,6668091|2524786,6668093|2524813,6668098|2524863,6668099|2524908,6668095|2525014,6668077|2525029,6668077|2525050,6668077|2525076,6668082|2525153,6668098|2525168,6668101|2525190,6668107|2525219,6668119|2525238,6668129|2525257,6668141|2525275,6668154|2525322,6668181|2525353,6668190|2525372,6668194|2525394,6668195|2525492,6668182|2525503,6668179|2525517,6668176|2525530,6668176|2525541,6668177|2525571,6668184|2525587,6668191|2525609,6668205|2525646,6668238|2525675,6668277|2525687,6668299|2525701,6668317|2525711,6668331|2525738,6668359|2525762,6668379|2525783,6668392|2525806,6668405|2525843,6668417|2525872,6668423|2525929,6668428|2525947,6668428|2525968,6668427|2526002,6668428|2526020,6668426|2526042,6668422|2526061,6668417|2526095,6668403|2526149,6668364|2526171,6668352|2526193,6668344|2526224,6668340|2526248,6668341|2526283,6668350|2526344,6668376|2526358,6668383|2526375,6668393|2526390,6668400|2526454,6668434|2526489,6668458|2526526,6668496|2526572,6668549|2526632,6668599|2526689,6668665|2526719,6668694|2526756,6668728|2526789,6668750|2526845,6668775|2526940,6668807|2526976,6668816|2527006,6668823|2527024,6668829|2527047,6668837|2527534,6669061|2527578,6669083|2527634,6669109|2528033,6669294|2528069,6669316|2528089,6669329|2528110,6669343|2528281,6669464|2528359,6669513|2528370,6669516|2528358,6669541|2528357,6669559|2528373,6669577|2528402,6669600|2528419,6669613|2528434,6669622|2528487,6669671|2528548,6669733|2528649,6669824|2528680,6669846|2528708,6669864|2528740,6669881|2528749,6669886|2528791,6669921|2528831,6669952|2528936,6670015|2528970,6670039|2528977,6670046|2529097,6670212|2529125,6670259|2529152,6670312|2529160,6670330|2529168,6670350|2529180,6670378|2529199,6670448|2529216,6670493|2529298,6670692|2529304,6670712|2529320,6670791|2529328,6670825|2529340,6670862|2529361,6670904|2529411,6670983|2529448,6671038|2529466,6671071|2529503,6671158|2529512,6671179|2529521,6671200|2529551,6671266|2529558,6671283|2529572,6671321|2529582,6671366|2529586,6671402|2529587,6671429|2529593,6671460|2529603,6671497|2529644,6671600|2529743,6671554|2529771,6671541|2529808,6671524|2529924,6671470|2529961,6671455|2530000,6671441|2530047,6671427|2530107,6671414|2530164,6671407|2530201,6671405|2530231,6671407|2530283,6671415|2530332,6671429|2530351,6671435|2530376,6671439|2530387,6671439|2530412,6671435|2530423,6671429|2530446,6671408|2530462,6671392|2530479,6671371|2530489,6671357|2530573,6671262|2530606,6671230|2530642,6671194|2530669,6671170|2530690,6671155|2530722,6671141|2530774,6671124|2530817,6671116|2530953,6671125|2530996,6671123|2531029,6671118|2531065,6671111|2531106,6671097|2531239,6671047|2531306,6671020|2531343,6671008|2531378,6671002|2531414,6670998|2531463,6670996|2531529,6670994|2531593,6670978|2531622,6670971|2531841,6670895|2531951,6670856|2531980,6670844|2531994,6670837|2532003,6670833|2532028,6670821|2532051,6670808|2532058,6670800|2532202,6670665|2532224,6670645|2532245,6670624|2532257,6670618|2532273,6670611|2532299,6670615|2532318,6670624|2532344,6670652|2532364,6670672|2532374,6670687|2532385,6670697|2532411,6670727|2532423,6670739|2532437,6670747|2532452,6670758|2532498,6670779|2532535,6670792|2532602,6670808|2532645,6670820|2532742,6670864|2532814,6670906|2532830,6670915|2532851,6670926|2532907,6670960|2533014,6671032|2533075,6671076|2533155,6671144|2533213,6671189|2533230,6671200|2533243,6671209|2533327,6671270|2533431,6671351|2533473,6671385|2533537,6671435|2533547,6671445|2533559,6671455|2533614,6671499|2533726,6671595|2533748,6671609|2533810,6671655|2533855,6671686|2533894,6671723|2533913,6671736|2533926,6671746|2533932,6671750|2533946,6671761|2533966,6671775|2533982,6671786|2533993,6671786|2534004,6671791|2534030,6671814|2534057,6671832|2534164,6671903|2534203,6671926|2534230,6671942|2534261,6671958|2534293,6671969|2534313,6671977|2534370,6671994|2534414,6672007|2534458,6672014|2534511,6672014|2534524,6671963|2534558,6672009|2534593,6671996|2534631,6671976|2534674,6671951|2534716,6671927|2534766,6671897|2534798,6671881|2534844,6671864|2534865,6671856|2534934,6671842|2534993,6671833|2535015,6671836|2535035,6671843|2535068,6671854|2535091,6671860|2535114,6671875|2535163,6671897|2535192,6671906|2535237,6671912|2535282,6671908|2535318,6671903|2535332,6671903|2535357,6671894|2535464,6671855|2535693,6671775|2535797,6671739|2536024,6671664|2536148,6671624|2536271,6671588|2536420,6671548|2536550,6671519|2536689,6671495|2536718,6671491|2536804,6671482|2536931,6671477|2536998,6671477|2537025,6671479|2537038,6671480|2537105,6671474|2537144,6671469|2537175,6671464|2537248,6671492|2537316,6671489|2537382,6671515|2537462,6671531|2537530,6671549|2537578,6671562|2537627,6671578|2537724,6671611|2537879,6671666|2538014,6671717|2538176,6671787|2538434,6671909|2538578,6671980|2538582,6671983|2538760,6672081|2538796,6672098|2538880,6672135|2538979,6672177|2539057,6672201|2539116,6672223|2539193,6672251|2539219,6672260|2539324,6672283|2539395,6672299|2539438,6672307|2539542,6672311|2539618,6672339|2539644,6672347|2539702,6672355|2539716,6672357|2539829,6672371|2539921,6672379|2540003,6672387|2540047,6672392|2540185,6672405|2540331,6672422|2540372,6672429|2540448,6672442|2540582,6672471|2540654,6672491|2540750,6672519|2540777,6672526|2540873,6672560|2540972,6672599|2541022,6672571|2541048,6672631|2541078,6672644|2541085,6672647|2541135,6672670|2541200,6672698|2541233,6672714|2541318,6672753|2541407,6672792|2541503,6672832|2541596,6672868|2541683,6672894|2541783,6672918|2541882,6672934|2541901,6672936|2541935,6672939|2541979,6672941|2542026,6672939|2542125,6672966|2542251,6672963|2542344,6672995|2542724,6673067|2542796,6673082|2542883,6673107|2542975,6673130|2543021,6673141|2543166,6673176|2543266,6673197|2543296,6673204|2543362,6673215|2543398,6673221|2543503,6673233|2543613,6673242|2543739,6673247|2543937,6673250|2544001,6673251|2544028,6673252|2544051,6673253|2544132,6673256|2544237,6673263|2544337,6673275|2544381,6673281|2544745,6673291|2544800,6673296|2544838,6673299|2544904,6673305|2544948,6673309|2544962,6673314|2545035,6673321|2545127,6673321|2545182,6673338|2545226,6673340|2545280,6673337|2545338,6673341|2545399,6673352|2545580,6673385|2545683,6673377|2545886,6673350|2545976,6673338|2546035,6673325|2546083,6673316|2546219,6673288|2546229,6673286|2546326,6673261|2546501,6673209|2546587,6673174|2546662,6673138|2546784,6673074|2546842,6673046|2546864,6673037|2546908,6673018|2546948,6673003|2546958,6672998|2546986,6672989|2547052,6672966|2547104,6672945|2547117,6672941|2547204,6672911|2547345,6672864|2547409,6672842|2547469,6672822|2547522,6672805|2547579,6672785|2547650,6672762|2547675,6672753|2547742,6672732|2547799,6672713|2547824,6672705|2547841,6672699|2547877,6672687|2547883,6672685|2547921,6672673|2547934,6672668|2548084,6672624|2548139,6672614|2548206,6672608|2548251,6672609|2548339,6672615|2548389,6672625|2548459,6672643|2548486,6672652|2548541,6672673|2548554,6672679|2548596,6672697|2548648,6672720|2548686,6672736|2548744,6672761|2548790,6672781|2548835,6672800|2548866,6672811|2548939,6672839|2549006,6672862|2549015,6672866|2549049,6672876|2549132,6672900|2549141,6672903|2549164,6672909|2549193,6672917|2549237,6672929|2549341,6672955|2549529,6673000|2549673,6673035|2550008,6673115|2550114,6673139|2550192,6673154|2550267,6673162|2550330,6673164|2550388,6673161|2550448,6673154|2550518,6673141|2550582,6673124|2550621,6673107|2550651,6673088|2550689,6673062|2550730,6673023|2550760,6672987|2550786,6672947|2550808,6672914|2550821,6672898|2550843,6672881|2550926,6672885|2551016,6672889|2551083,6672895|2551210,6672902|2551302,6672908|2551318,6672911|2551361,6672918|2551431,6672932|2551481,6672940|2551520,6672942|2551566,6672959|2551612,6672988|2551618,6673021|2551633,6673100|2551655,6673174|2551677,6673254|2551688,6673286|2551759,6673345|2551813,6673383",
			"line_stops": [
				{
					"code": "6300202",
					"codeShort": "So3002",
					"time": 0,
					"address": "Åke Tottin tie",
					"name": "Siuntion asema",
					"coords": "2512710,6669675",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6300201",
					"codeShort": "So3001",
					"time": 17,
					"address": "Störsvikintie",
					"name": "Sienitie",
					"coords": "2516398,6663236",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6200201",
					"codeShort": "Ki2001",
					"time": 24,
					"address": "Itäinen Kuninkaantie",
					"name": "Kela",
					"coords": "2516968,6666971",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6050209",
					"codeShort": "Ki0509",
					"time": 26,
					"address": "Överbyntie",
					"name": "Bergträskinpolku",
					"coords": "2521146,6667763",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6050211",
					"codeShort": "Ki0511",
					"time": 27,
					"address": "Överbyntie",
					"name": "Granbackantie",
					"coords": "2521622,6667825",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6050213",
					"codeShort": "Ki0513",
					"time": 28,
					"address": "Överbyntie",
					"name": "Överby",
					"coords": "2522407,6668036",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040235",
					"codeShort": "Ki0435",
					"time": 29,
					"address": "Överbyntie",
					"name": "Karlbergintie",
					"coords": "2522730,6668067",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040232",
					"codeShort": "Ki0432",
					"time": 30,
					"address": "Överbyntie",
					"name": "Lindalintie",
					"coords": "2522959,6668005",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040231",
					"codeShort": "Ki0431",
					"time": 30,
					"address": "Överbyntie",
					"name": "Lindalintie",
					"coords": "2523056,6667938",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040233",
					"codeShort": "Ki0433",
					"time": 31,
					"address": "Överbyntie",
					"name": "Ravalsinkuja",
					"coords": "2523768,6668054",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040236",
					"codeShort": "Ki0436",
					"time": 32,
					"address": "Överbyntie",
					"name": "Kuusala",
					"coords": "2523895,6668168",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040239",
					"codeShort": "Ki0439",
					"time": 33,
					"address": "Överbyntie",
					"name": "Rajapolku",
					"coords": "2524447,6668356",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6050251",
					"codeShort": "Ki0551",
					"time": 34,
					"address": "Kirkkonummentie",
					"name": "Kirkkotallintie",
					"coords": "2524708,6668045",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040291",
					"codeShort": "Ki0491",
					"time": 40,
					"address": "Matkakeskus",
					"name": "Kirkkonummi, Laituri 1",
					"coords": "2524669,6667620",
					"city_name": "Kirkkonummi",
					"terminal_code": "6000001",
					"terminal_name": "Kirkkonummi",
					"short_name": "Kirkkonummi mk",
					"platform_number": "1"
				},
				{
					"code": "6050254",
					"codeShort": "Ki0554",
					"time": 42,
					"address": "Nummitie",
					"name": "Kotiniitynrinne",
					"coords": "2523966,6667984",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040234",
					"codeShort": "Ki0434",
					"time": 43,
					"address": "Överbyntie",
					"name": "Ravalsinkuja",
					"coords": "2523633,6668047",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040270",
					"codeShort": "Ki0470",
					"time": 45,
					"address": "Lindalintie",
					"name": "Ravals",
					"coords": "2523040,6668136",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040272",
					"codeShort": "Ki0472",
					"time": 46,
					"address": "Lindalintie",
					"name": "Ravalsintie",
					"coords": "2523308,6668435",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040276",
					"codeShort": "Ki0476",
					"time": 46,
					"address": "Lindalintie",
					"name": "Isännäntie",
					"coords": "2523501,6668690",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040278",
					"codeShort": "Ki0478",
					"time": 47,
					"address": "Lindalintie",
					"name": "Lindal",
					"coords": "2523930,6668797",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040242",
					"codeShort": "Ki0442",
					"time": 48,
					"address": "Volsintie",
					"name": "Vilhonkummuntie",
					"coords": "2524110,6669021",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040244",
					"codeShort": "Ki0444",
					"time": 49,
					"address": "Vilhonkummuntie",
					"name": "Vilhontie",
					"coords": "2524069,6669165",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040246",
					"codeShort": "Ki0446",
					"time": 50,
					"address": "Vilhonkummuntie",
					"name": "Papinmäen koulu",
					"coords": "2524763,6669221",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040284",
					"codeShort": "Ki0484",
					"time": 51,
					"address": "Gesterbyntie",
					"name": "Gesterbyn kp",
					"coords": "2525067,6669581",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040250",
					"codeShort": "Ki0450",
					"time": 52,
					"address": "Gesterbyntie",
					"name": "Gesterby",
					"coords": "2524953,6669548",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040281",
					"codeShort": "Ki0481",
					"time": 53,
					"address": "Gesterbyntie",
					"name": "Gesterbynpolku",
					"coords": "2524958,6669024",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040277",
					"codeShort": "Ki0477",
					"time": 53,
					"address": "Gesterbyntie",
					"name": "Gesterbynkaari",
					"coords": "2524976,6668733",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6050252",
					"codeShort": "Ki0552",
					"time": 55,
					"address": "Vanha Rantatie",
					"name": "Kirkkotallintie",
					"coords": "2524789,6668080",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040217",
					"codeShort": "Ki0417",
					"time": 56,
					"address": "Vanha Rantatie",
					"name": "Jolkby",
					"coords": "2525249,6668110",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040218",
					"codeShort": "Ki0418",
					"time": 56,
					"address": "Vanha Rantatie",
					"name": "Heikkiläntie",
					"coords": "2525531,6668160",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040221",
					"codeShort": "Ki0421",
					"time": 56,
					"address": "Vanha Rantatie",
					"name": "Kaksosvuorentie",
					"coords": "2525706,6668286",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040224",
					"codeShort": "Ki0424",
					"time": 57,
					"address": "Vanha Rantatie",
					"name": "Hirvitie",
					"coords": "2525969,6668407",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040223",
					"codeShort": "Ki0423",
					"time": 58,
					"address": "Vanha Rantatie",
					"name": "Karhutie",
					"coords": "2526388,6668374",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6040227",
					"codeShort": "Ki0427",
					"time": 59,
					"address": "Vanha Rantatie",
					"name": "Killinmäki",
					"coords": "2527011,6668804",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6030214",
					"codeShort": "Ki0314",
					"time": 60,
					"address": "Vanha Rantatie",
					"name": "Stor-Kvis",
					"coords": "2527594,6669049",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6030217",
					"codeShort": "Ki0317",
					"time": 61,
					"address": "Vanha Rantatie",
					"name": "Kvis",
					"coords": "2528102,6669309",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6030222",
					"codeShort": "Ki0322",
					"time": 61,
					"address": "Masalantie",
					"name": "Jorvaksenkuja",
					"coords": "2528427,6669571",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6030225",
					"codeShort": "Ki0325",
					"time": 62,
					"address": "Masalantie",
					"name": "Autioniityntie",
					"coords": "2528723,6669836",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6030227",
					"codeShort": "Ki0327",
					"time": 63,
					"address": "Masalantie",
					"name": "Ingvalsby",
					"coords": "2529176,6670323",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020210",
					"codeShort": "Ki0210",
					"time": 64,
					"address": "Masalantie",
					"name": "Hulluksentie",
					"coords": "2529532,6671170",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020215",
					"codeShort": "Ki0215",
					"time": 65,
					"address": "Sundsbergintie",
					"name": "Masalan kirjasto",
					"coords": "2529763,6671524",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020213",
					"codeShort": "Ki0213",
					"time": 66,
					"address": "Sundsbergintie",
					"name": "Sundetin puistotie",
					"coords": "2530453,6671351",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020207",
					"codeShort": "Ki0207",
					"time": 68,
					"address": "Sundsbergintie",
					"name": "Sundsberginraitti",
					"coords": "2531584,6670952",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020259",
					"codeShort": "Ki0259",
					"time": 68,
					"address": "Sundsbergintie",
					"name": "Sundsbergintie",
					"coords": "2531989,6670827",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020249",
					"codeShort": "Ki0249",
					"time": 69,
					"address": "Sarvvikin puistotie",
					"name": "Heinäketo",
					"coords": "2532382,6670680",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020251",
					"codeShort": "Ki0251",
					"time": 69,
					"address": "Sarvvikin puistotie",
					"name": "Metsäniitty",
					"coords": "2532836,6670904",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020253",
					"codeShort": "Ki0253",
					"time": 70,
					"address": "Sarvvikin puistotie",
					"name": "Kelloniitty",
					"coords": "2533236,6671194",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020255",
					"codeShort": "Ki0255",
					"time": 70,
					"address": "Sarvvikin puistotie",
					"name": "Sarvvikintie",
					"coords": "2533554,6671437",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "6020257",
					"codeShort": "Ki0257",
					"time": 71,
					"address": "Sarvvikin puistotie",
					"name": "Rantaniitty",
					"coords": "2533930,6671741",
					"city_name": "Kirkkonummi"
				},
				{
					"code": "2413229",
					"codeShort": "E4154",
					"time": 72,
					"address": "Vanha Jorvaksentie",
					"name": "Pihlajamäentie",
					"coords": "2534524,6671963",
					"city_name": "Espoo"
				},
				{
					"code": "2443227",
					"codeShort": "E4444",
					"time": 76,
					"address": "Länsiväylä",
					"name": "Espoonlahdensolmu",
					"coords": "2537250,6671477",
					"city_name": "Espoo"
				},
				{
					"code": "2442201",
					"codeShort": "E4417",
					"time": 78,
					"address": "Länsiväylä",
					"name": "Finnoonsolmu",
					"coords": "2539440,6672291",
					"city_name": "Espoo"
				},
				{
					"code": "2311220",
					"codeShort": "E3117",
					"time": 81,
					"address": "Länsiväylä",
					"name": "Piispansilta",
					"coords": "2541060,6672607",
					"city_name": "Espoo"
				},
				{
					"code": "2232280",
					"codeShort": "E2368",
					"time": 82,
					"address": "Länsiväylä",
					"name": "Matinsolmu",
					"coords": "2542128,6672945",
					"city_name": "Espoo"
				},
				{
					"code": "2232232",
					"codeShort": "E2359",
					"time": 83,
					"address": "Länsiväylä",
					"name": "Haukilahdensolmu",
					"coords": "2543064,6673117",
					"city_name": "Espoo"
				},
				{
					"code": "2231202",
					"codeShort": "E2302",
					"time": 85,
					"address": "Westendinasema",
					"name": "Westendin asema, Laituri 1",
					"coords": "2544838,6673305",
					"city_name": "Espoo",
					"terminal_code": "2000006",
					"terminal_name": "Westendin asema",
					"short_name": "Westendinasema",
					"platform_number": "1"
				},
				{
					"code": "2231201",
					"codeShort": "E2301",
					"time": 86,
					"address": "Karhusaarentie",
					"name": "Karhusaari",
					"coords": "2546031,6673305",
					"city_name": "Espoo"
				},
				{
					"code": "2232204",
					"codeShort": "E2332",
					"time": 87,
					"address": "Länsiväylä",
					"name": "Hanasaari",
					"coords": "2546949,6672976",
					"city_name": "Espoo"
				},
				{
					"code": "1201130",
					"codeShort": "1014",
					"time": 92,
					"address": "Porkkalankatu",
					"name": "Länsiväylä",
					"coords": "2550928,6672867",
					"city_name": "Helsinki"
				},
				{
					"code": "1040234",
					"codeShort": "1233",
					"time": 95,
					"address": "Lapinrinne",
					"name": "Lapinrinne",
					"coords": "2551645,6673097",
					"city_name": "Helsinki"
				},
				{
					"code": "1040289",
					"codeShort": "",
					"time": 96,
					"address": "Kamppi",
					"name": "Kamppi, tulo",
					"coords": "2551815,6673380",
					"city_name": "Helsinki"
				}
			],
			"date_from": "20150615",
			"date_to": "20161231"
		}
	];
	return {
		getLines: function() {
			return lines;
		},
		getLine: function(key) {
			return lines[key];
		},
		addLine: function(key, value) {
			lines[key] = value;
		}
	}
})

.service('GeocodeService', function(){
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

.service('ReverseGeocodeService', function(){
	var places = [
		{
			"locType": "address",
			"locTypeId": "900",
			"name": "Itämerenkatu 18, Helsinki",
			"matchedName": null,
			"lang": "fi",
			"city": "Helsinki",
			"coords": "2550798,6672700",
			"distance": "96.38464608017192",
			"details": {
				"address": null,
				"houseNumber": "18"
			}
		},
		{
			"locType": "address",
			"locTypeId": "900",
			"name": "Asemankaari 8, Kirkkonummi",
			"matchedName": null,
			"lang": "fi",
			"city": "Kirkkonummi",
			"coords": "2524647,6667640",
			"distance": "26",
			"details": {
				"address": null,
				"houseNumber": "8"
			}
		}
	];
	return {
		getPlaces: function() {
			return places;
		},
		getPlace: function(coords) {
			for (var i = 0; i < places.length; i++) {
				if (coords === places[i].coords) {
					console.log("found");
					return places[i].name;
				}
			}
			console.log("failed");
		}
	}
})

.service('HistoryService', function(){
});