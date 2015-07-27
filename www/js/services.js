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
		},
		updateFrom: function(from) {
			getFrom(from);
			return _from;
		},
		updateTo: function(to) {
			getTo(to);
			return _to;
		},
		updateVia: function(via) {
			getVia(via);
			return _via;
		}
	}
})

.service('RouteService', function(){
	var routes = [
		{
			id: 0,
			from: "Siuntio",
			via: "Kirkkonummen asema",
			to: "Tammasaarenkatu",
			start: {
				h: 6,
				m: 30
			},
			end: {
				h: 7,
				m: 52
			},
			duration: {
				h: 1,
				m: 22
			},
			price: 0,
			places: 6,
			maxPlaces: 50,
			route: [
				{
					start: "Siuntio",
					transport: "car",
					distance: 19.1,
					duration: {
						h: 0,
						m: 22
					},
					end: "Kirkkonummen asema"
				},
				{
					start: "Kirkkonummen asema",
					transport: "parking",
					details: "6/50",
					distance: 0,
					duration: {
						h: 0,
						m: 5
					},
					end: "Kirkkonummen asema"
				},
				{
					start: "Kirkkonummen asema",
					transport: "walk",
					distance: 0.2,
					duration: {
						h: 0,
						m: 6
					},
					end: "Kirkkonummen asema, laituri 4"
				},
				{
					start: "Kirkkonummen asema, laituri 4",
					transport: "bus",
					details: "174",
					distance: 19.1,
					duration: {
						h: 0,
						m: 38
					},
					end: "Länsiväylä"
				},
				{
					start: "Länsiväylä",
					transport: "walk",
					distance: 0.7,
					duration: {
						h: 0,
						m: 10
					},
					end: "Tammasaarenkatu"
				}
			]
		}
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
			} else if (source === 'bus') {
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
			name: 'Tammisto',
			commune: 'Vantaa',
			type: 'location'
		},
		{
			name: 'Tammisalo',
			commune: 'Helsinki',
			type: 'location'
		},
		{
			name: 'Tammihaantie',
			commune: 'Vantaa',
			type: 'location'
		},
		{
			name: 'Tammistonkatu',
			commune: 'Vantaa',
			type: 'location'
		},
		{
			name: 'Tammitie',
			commune: 'Vantaa',
			type: 'location'
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