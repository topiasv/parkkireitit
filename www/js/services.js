angular.module('starter.services', [])

.service('RouteService', function(){
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
		getTo: function(to) {
			return _to;
		},
		getVia: function(via) {
			return _via;
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