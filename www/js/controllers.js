angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});
})

.controller('HomeCtrl', function($scope, $state, $ionicModal, favoriteRoutes, favoritePlaces, places, setFrom, setTo, setVia) {
	$scope.favoriteRoutes = favoriteRoutes;
	$scope.favoritePlaces = favoritePlaces;
	$scope.places = places;
	$scope.setFrom = setFrom;
	$scope.setTo = setTo;
	$scope.setVia = setVia;
	
	$ionicModal.fromTemplateUrl('templates/search.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	
	$scope.openModal = function() {
		$scope.modal.show();
	};
	
	$scope.closeModal = function() {
		$scope.modal.hide();
	};
	
	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});
	
	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
		// Execute action
	});
	
	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
		// Execute action
	});
		
	$scope.navigateTo = function(to) {
		$scope.setTo(to);
		$scope.closeModal();
		$state.go('app.route');
	};
})

.controller('FavoritesCtrl', function($scope, favoriteRoutes, favoritePlaces, addRoute, addPlace) {
	$scope.favoriteRoutes = favoriteRoutes;
	$scope.favoritePlaces = favoritePlaces;
	$scope.addRoute = addRoute;
	$scope.addPlace = addPlace;
})

.controller('RouteCtrl', function($scope, from, to, via, setFrom, setTo, setVia) {
	$scope.from = from;
	$scope.to = to;
	$scope.via = via;
	$scope.setFrom = setFrom;
	$scope.setTo = setTo;
	$scope.setVia = setVia;
})
