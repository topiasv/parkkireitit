// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.utils', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('app', {
		url: "/app",
		abstract: true,
		templateUrl: "templates/menu.html",
		controller: 'AppCtrl'
	})

	.state('app.home', {
		url: "/home",
		views: {
			'menuContent': {
			templateUrl: "templates/home.html",
			controller: 'HomeCtrl'
			}
		},
		resolve: {
			favoriteRoutes: function(FavoritesService) {
				return FavoritesService.getRoutes();
			},
			favoritePlaces: function(FavoritesService) {
				return FavoritesService.getPlaces();
			},
			places: function(PlacesService) {
				return PlacesService.getPlaces();
			},
			setFrom: function(RouteService) {
				return RouteService.setFrom;
			},
			setTo: function(RouteService) {
				return RouteService.setTo;
			},
			setVia: function(RouteService) {
				return RouteService.setVia;
			}
		}
	})

	.state('app.route', {
		url: "/home/route",
		views: {
			'menuContent': {
				templateUrl: "templates/route.html",
				controller: 'RouteCtrl'
			}
		},
		resolve: {
			from: function(RouteService) {
				return RouteService.getFrom();
			},
			to: function(RouteService) {
				return RouteService.getTo();
			},
			via: function(RouteService) {
				return RouteService.getVia();
			},
			setFrom: function(RouteService) {
				return RouteService.setFrom;
			},
			setTo: function(RouteService) {
				return RouteService.setTo;
			},
			setVia: function(RouteService) {
				return RouteService.setVia;
			}
		}
	})

	.state('app.favorites', {
		url: "/favorites",
		views: {
			'menuContent': {
				templateUrl: "templates/favorites.html",
				controller: 'FavoritesCtrl'
			}
		},
		resolve: {
			favoriteRoutes: function(FavoritesService) {
				return FavoritesService.getRoutes();
			},
			favoritePlaces: function(FavoritesService) {
				return FavoritesService.getPlaces();
			},
			addRoute: function(FavoritesService) {
				return FavoritesService.addRoute;
			},
			addPlace: function(FavoritesService) {
				return FavoritesService.addPlace;
			}
		}
	})
		
	.state('app.about', {
		url: "/about",
		views: {
			'menuContent': {
				templateUrl: "templates/about.html"
			}
		}
	})

	.state('app.single', {
		url: "/favorites/:favoriteId",
		views: {
			'menuContent': {
				templateUrl: "templates/favorite.html"
			}
		}
	});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/home');
});