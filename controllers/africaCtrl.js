angular.module("travelTracker")
	.controller("africaCtrl", function ($scope, countriesService, $rootScope) {
		
		$scope.getCountries = function () {
			
			countriesService.getAfrica().then(function (result) {
				$scope.region = result;
			});	
		}();
		
		
		//Adds or deletes county from visitedCountries array when checkbox is changed.		
		
		$scope.updateVisitedOrNot = function (country) {
			if ($scope.visitedOrNot === true) {
				$scope.visitedCountries.push(country);
			}
				
			else {
				$scope.visitedCountries.splice($scope.visitedCountries.indexOf(country), 1);
			}
			
			return $scope.visitedCountries;
		};
		
		
		
	});