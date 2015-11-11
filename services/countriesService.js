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



this.getNewCountries = function (continent) {
	console.log(continent);
		return $http({
			method: "GET",
			url: "https://restcountries.eu/rest/v1/region/" + continent
		}).then(function (responseFromCall) {
			return responseFromCall.data;
		});
	};






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

	this.visitedCoordinates = [];
	
	//Adds or deletes county from visitedCountries array when checkbox is changed.		
		
	this.updateVisitedOrNot = function (country, visitedOrNot) {
		console.log(visitedOrNot);
		if (visitedOrNot === true) {
			this.visitedCountries.push(country.name);
			this.visitedCoordinates.push(
				{
					country: country.name,
					lat: country.latlng[0],
					lng: country.latlng[1]
				}
			);
		}

		else {
			this.visitedCountries.splice(this.visitedCountries.indexOf(country.name), 1);
			this.visitedCoordinates.splice(this.visitedCoordinates.indexOf(country), 1);
		}
	};

	

});