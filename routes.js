angular.module("travelTracker")

	.config( function($stateProvider, $urlRouterProvider) {
		
		
		$stateProvider
			.state("home", {
				url: "/",
				views: {
					
					"menu": {
						templateUrl: "directives/menuBar/menuBarTemp.html",
						controller: "menuBarCtrl"
					},
					
					"content": {
						templateUrl: "features/home/home.html",
						controller: "homeCtrl"
					}	
				}
			})
			
			//Test
			.state("region", {
				url: "/region/:cont",
				
				views: {
					"menu": {
						templateUrl: "directives/menuBar/menuBarTemp.html",
						controller: "menuBarCtrl"
					},
					
					"content": {
						templateUrl: "directives/countryList/countryListTemp.html",
						controller: "countryListCtrl",
						resolve: {
							continent: function (countriesService, $stateParams) {
							return countriesService.getNewCountries($stateParams.cont);	
							}
						}
					}		
				},
			})
			
			
			.state("map", {
				url: "/map",
				views: {
					"menu": {
						templateUrl: "directives/menuBar/menuBarTemp.html",
						controller: "menuBarCtrl"
					},
					
					"content": {
						templateUrl: "features/map/map.html",
						controller: "mapCtrl"
						
					}		
				},
					
			})
			
			
			.state("stats", {
				url: "/stats",
				views: {
					"menu": {
						templateUrl: "directives/menuBar/menuBarTemp.html",
						controller: "menuBarCtrl"
					},
					
					"content": {
						templateUrl: "features/stats/stats.html",
						controller: "statsCtrl"
					}		
				},
				
				
				
			});
			
			$urlRouterProvider.otherwise("/");
			
			
	});