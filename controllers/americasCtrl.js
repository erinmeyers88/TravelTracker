angular.module("travelTracker")
	.controller("americasCtrl", function ($scope, countriesService) {
		
		$scope.getCountries = function () {
			
			countriesService.getAmericas().then(function (result) {
				$scope.region = result;
			});	
		}();
		
		
		
	});