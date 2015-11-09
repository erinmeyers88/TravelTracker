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
				url: "/africa",
				
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
				url: "/americas",
				
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
				url: "/asia",
				
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
				url: "/europe",
				
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
				url: "/oceania",
				
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
				
				views: {
					"menu": {
						templateUrl: "menuBarDirective/menuBarTemp.html",
						controller: "mainCtrl"
					},
					
					"content": {
						url: "/map",
						templateUrl: "map.html"
					}		
				},	
			})
			
			
			.state("stats", {
				
				views: {
					"menu": {
						templateUrl: "menuBarDirective/menuBarTemp.html",
						controller: "mainCtrl"
					},
					
					"content": {
						url: "/stats",
						templateUrl: "stats.html",
					}		
				},
				
				
				
			});
			
			$urlRouterProvider.otherwise("/");
			
			
	});
	