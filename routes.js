angular.module("travelTracker")

	.config( function($stateProvider, $urlRouterProvider) {
		
		
		$stateProvider
			.state("home", {
				url: "/",
				views: {
					"content": {
						templateUrl: "features/home/home.html",
						controller: "homeCtrl"
					}	
				}
			})
			
		
			.state("region", {
				url: "/region/:region",
				
				views: {
					"content": {
						templateUrl: "features/countryList/countryList.html",
						controller: "countryListCtrl",
						resolve: {
							continent: function (countriesService, $stateParams) {
							return countriesService.getNewCountries($stateParams.region);	
							}
						}
					}		
				},
			})
			
			
			.state("map", {
				url: "/map",
				views: {
					"content": {
						templateUrl: "features/map/map.html",
						controller: "mapCtrl"
					}		
				},
			})
			
			
			.state("stats", {
				url: "/stats",
				views: {
					"content": {
						templateUrl: "features/stats/stats.html",
						controller: "statsCtrl"
					}		
				},
				
				
				
			});
			
			$urlRouterProvider.otherwise("/");
			
			
	});