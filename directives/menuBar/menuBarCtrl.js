angular.module("travelTracker")
	.controller("menuBarCtrl",  function ($scope, $state, $location) {
		
		$scope.regions = ["Region", "Africa", "Americas", "Asia", "Europe", "Oceania"];
	
	
		$scope.onChange = function (region) {
			$location.path("/" + region);
		};
	

		
		
		
			
	});