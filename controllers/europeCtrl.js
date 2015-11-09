angular.module("travelTracker")
	.controller("europeCtrl", function ($scope, countriesService) {
		
		$scope.getCountries = function () {
			
			countriesService.getEurope().then(function (result) {
				$scope.region = result;
			});	
		}();
		
		
		
	});