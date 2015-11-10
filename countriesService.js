angular.module("travelTracker").service("countriesService", function ($http, $q) {



	var regionsArray = ["africa", "americas", "asia", "europe", "oceania"];
	
	// var baseUrl = "https://restcountries.eu/rest/v1/region/";
	
	
	
// 	regionsArray.forEach(function(region) {
// 		this.getRegion[region]  = function () {
// 		return $http({
// 			method: "GET",
// 			url: baseUrl + region,
// 		}).then(function (responseFromCall) {
// 			return responseFromCall;
// 		});
// 	};

// });

	this.getAfrica = function () {
		return $http({
			method: "GET",
			url: "https://restcountries.eu/rest/v1/region/africa"
		}).then(function (responseFromCall) {
			return responseFromCall.data;
		});
	};

	this.getAmericas = function () {
		return $http({
			method: "GET",
			url: "https://restcountries.eu/rest/v1/region/americas"
		}).then(function (responseFromCall) {
			return responseFromCall.data;
		});
	};

	this.getAsia = function () {
		return $http({
			method: "GET",
			url: "https://restcountries.eu/rest/v1/region/asia"
		}).then(function (responseFromCall) {
			return responseFromCall.data;
		});
	};
	
	this.getEurope = function () {
		return $http({
			method: "GET",
			url: "https://restcountries.eu/rest/v1/region/europe"
		}).then(function (responseFromCall) {
			return responseFromCall.data;
		});
	};

	this.getOceania = function () {
		return $http({
			method: "GET",
			url: "https://restcountries.eu/rest/v1/region/oceania"
		}).then(function (responseFromCall) {
			return responseFromCall.data;
		});
	};

	
	
//Visited Countries
	
	
	this.visitedCountries = [];
	
	
	//Adds or deletes county from visitedCountries array when checkbox is changed.		
		
		this.updateVisitedOrNot = function (country, visitedOrNot) {
			console.log(visitedOrNot);
			if (visitedOrNot === true) {
				this.visitedCountries.push(country.name);
			}
				
			else {
				this.visitedCountries.splice(this.visitedCountries.indexOf(country.name), 1);
			}
			
			return this.visitedCountries;
		};
		


//Map

	this.setMarker = function () {
		return $http({
			method: "GET",
			url: "https://restcountries.eu/rest/v1/region/oceania"
		}).then(function (responseFromCall) {
			return responseFromCall.data;
		});
	};
	
	
	
});