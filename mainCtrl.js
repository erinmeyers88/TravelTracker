angular.module("travelTracker")
	.controller("mainCtrl",  function ($scope, $state, $rootScope) {
		
		$scope.regions = ["Region", "Africa", "Americas", "Asia", "Europe", "Oceania"];
	
		// $scope.selectedRegion = "Region";
	
		$rootScope.visitedCountries = [];
		

			
	
	
	
	//Dropdown list for selected region, changes the state when the user changes region.
	
	

	
		$scope.onChange = function () {
			$state.go($scope.selectedRegion);
		};
	
	});