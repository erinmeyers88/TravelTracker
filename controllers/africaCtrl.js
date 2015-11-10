angular.module("travelTracker")
	.controller("africaCtrl", function ($scope, countriesService) {

		$scope.getCountries = function () {

			countriesService.getAfrica().then(function (result) {
				$scope.region = result;
			});
		} ();

		$scope.updateVisitedOrNot = function (country, visitedOrNot) {
			countriesService.updateVisitedOrNot(country, visitedOrNot);
		};

		$scope.visitedCountries = countriesService.visitedCountries;

		$scope.checkCountry = function (country) {
			if ($scope.visitedCountries.indexOf(country.name) !== -1) {
				return true;
			}
		};

		$scope.accordion = {
			current: null
		};

		$scope.collapsed = true;

		$scope.collapse = function () {
			$scope.collapsed = !$scope.collapsed;
		};

	});