angular.module("travelTracker")
	.controller("asiaCtrl", function ($scope, countriesService) {
		
		$scope.getCountries = function () {
			
			countriesService.getAsia().then(function (result) {
				$scope.region = result;
			});	
		}();
		
		
		
	});