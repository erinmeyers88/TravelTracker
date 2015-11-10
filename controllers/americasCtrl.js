angular.module("travelTracker")
	.controller("americasCtrl", function ($scope, countriesService) {
		
		$scope.getCountries = function () {
			
			countriesService.getAmericas().then(function (result) {
				$scope.region = result;
			});	
		}();
		
			$scope.updateVisitedOrNot = function (country, visitedOrNot) {
			countriesService.updateVisitedOrNot(country, visitedOrNot);	
		};
	
		$scope.visitedCountries = countriesService.visitedCountries;
		
		$scope.checkCountry = function (country) {
			if ($scope.visitedCountries.indexOf(country.name) !== -1) {
				return true;
			}
		};
	});