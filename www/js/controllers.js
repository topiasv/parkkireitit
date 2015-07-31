angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});
})

.controller('HomeCtrl', function($scope, $state, $ionicModal, favoriteRoutes, favoritePlaces, places, setFrom, setTo, setVia, getFrom, getVia, getTo, routes) {
	$scope.favoriteRoutes = favoriteRoutes;
	$scope.favoritePlaces = favoritePlaces;
	$scope.places = places;
	$scope.setFrom = setFrom;
	$scope.setTo = setTo;
	$scope.setVia = setVia;
	$scope.from = getFrom();
	$scope.via = getVia();
	$scope.viaExpand = false;
	$scope.viaExpandBtn = "ion-plus";
	$scope.to = getTo();
	$scope.routes = routes;
	
	$ionicModal.fromTemplateUrl('templates/search.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	
	$scope.openModal = function(placeHolder, callback) {
		$scope.modal.show();
		$scope.searchPlaceHolder = placeHolder;
		$scope.callback = callback;
		// document.getElementById("searchInputBox").focus();
	};
	
	$scope.closeModal = function() {
		$scope.modal.hide();
		$scope.searchInput = '';
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
	
	$scope.applyTo = function(to) {
		$scope.setTo(to);
		$scope.closeModal();
		$scope.to = getTo();
	};
	
	$scope.applyVia = function(via) {
		$scope.setVia(via);
		$scope.closeModal();
		$scope.via = getVia();
	};
	
	$scope.applyFrom = function(from) {
		$scope.setFrom(from);
		$scope.closeModal();
		$scope.from = getFrom();
	};
	
	$scope.swapFromTo = function() {
		$scope.setFrom($scope.to);
		$scope.setTo($scope.from);
		$scope.from = getFrom();
		$scope.to = getTo();
	};
	
	$scope.toggleVia = function() {
		if ($scope.viaExpand === false) {
			$scope.viaExpand = true;
			$scope.viaExpandBtn = "ion-minus";
		} else {
			$scope.viaExpand = false;
			$scope.viaExpandBtn = "ion-plus";
		}
	}
	
	$scope.transformIcon = function(source) {
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
})

.controller('FavoritesCtrl', function($scope, favoriteRoutes, favoritePlaces, addRoute, addPlace) {
	$scope.favoriteRoutes = favoriteRoutes;
	$scope.favoritePlaces = favoritePlaces;
	$scope.addRoute = addRoute;
	$scope.addPlace = addPlace;
})

.controller('DetailsCtrl', function($scope, $stateParams) {
	$scope.route = $stateParams.route;
})
