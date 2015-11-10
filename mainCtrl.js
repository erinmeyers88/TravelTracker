angular.module("travelTracker")
	.controller("mainCtrl",  function ($scope, $state, $location) {
		
		$scope.regions = ["Region", "Africa", "Americas", "Asia", "Europe", "Oceania"];
	
		// $scope.selectedRegion = "Region";
	
		

			
	
	
	
	//Dropdown list for selected region, changes the state when the user changes region.
	
	

	
		$scope.onChange = function (region) {
			$location.path("/" + region);
		};
	
	});