angular.module("travelTracker")
	.controller("oceaniaCtrl", function ($scope, countriesService) {
		
		$scope.getCountries = function () {
			
			countriesService.getOceania().then(function (result) {
				$scope.region = result;
			});	
		}();
		
		
		
	});