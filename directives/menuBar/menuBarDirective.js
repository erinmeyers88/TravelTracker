angular.module("travelTracker")
	.directive("menuBar", function () {

		return {
			templateUrl: "directives/menuBar/menuBarTemp.html",
			controller: "menuBarCtrl"
		};

	});