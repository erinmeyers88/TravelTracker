angular.module("travelTracker", ["ui.router"])
	.config( function($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state("home", {
				url: "/",
				views: {
					
					"menu": {
						templateUrl: "menuBarDirective/menuBarTemp.html",
						controller: "mainCtrl"
					},
					
					"content": {
						templateUrl: "home.html",
						controller: "mainCtrl"
					}	
				}
			})
			
			
			
			.state("Region", {
				url: "/regions",
				views: {
					
					"menu": {
						templateUrl: "menuBarDirective/menuBarTemp.html",
						controller: "mainCtrl"
					},
					
					"content": {
						
						templateUrl: "regionList.html",
						controller: "mainCtrl"
					}	
				}
			
			})
		
		
		
			.state("Africa", {
				url: "/Africa",
				
				views: {
					"menu": {
						templateUrl: "menuBarDirective/menuBarTemp.html",
						controller: "mainCtrl"
					},
					
					"content": {
						templateUrl: "countryListDirective/countryListTemp.html",
						controller: "africaCtrl"
					}		
				},	
			})
			
			.state("Americas", {
				url: "/Americas",
				
				views: {
					"menu": {
						templateUrl: "menuBarDirective/menuBarTemp.html",
						controller: "mainCtrl"
					},
					
					"content": {
						templateUrl: "countryListDirective/countryListTemp.html",
						controller: "americasCtrl"
					}		
				},
				
				
				
			})
			
			
			.state("Asia", {
				url: "/Asia",
				
				views: {
					"menu": {
						templateUrl: "menuBarDirective/menuBarTemp.html",
						controller: "mainCtrl"
					},
					
					"content": {
						templateUrl: "countryListDirective/countryListTemp.html",
						controller: "asiaCtrl"
					}		
				},
			})
			
			
			.state("Europe", {
				url: "/Europe",
				
				views: {
					"menu": {
						templateUrl: "menuBarDirective/menuBarTemp.html",
						controller: "mainCtrl"
					},
					
					"content": {
						templateUrl: "countryListDirective/countryListTemp.html",
						controller: "europeCtrl"
					}		
				},
			})
			
			
			
			.state("Oceania", {
				url: "/Oceania",
				
				views: {
					"menu": {
						templateUrl: "menuBarDirective/menuBarTemp.html",
						controller: "mainCtrl"
					},
					
					"content": {
						templateUrl: "countryListDirective/countryListTemp.html",
						controller: "oceaniaCtrl"
					}		
				},
			})
			
			
			

			
			.state("map", {
				url: "/map",
				views: {
					"menu": {
						templateUrl: "menuBarDirective/menuBarTemp.html",
						controller: "mainCtrl"
					},
					
					"content": {
						templateUrl: "map.html",
						controller: "mapCtrl"
						
					}		
				},
					
			})
			
			
			.state("stats", {
				url: "/stats",
				views: {
					"menu": {
						templateUrl: "menuBarDirective/menuBarTemp.html",
						controller: "mainCtrl"
					},
					
					"content": {
						templateUrl: "stats.html",
						controller: "statsCtrl"
					}		
				},
				
				
				
			});
			
			$urlRouterProvider.otherwise("/");
			
			
	});
	