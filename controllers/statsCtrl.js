angular.module("travelTracker")
	.controller("statsCtrl", function ($scope, countriesService) {
		
		$scope.visitedCountries = function () {
			return countriesService.visitedCountries;
		}();
		
		
		
	});