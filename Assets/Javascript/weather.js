'use strict';
// Ref. Links: https://api.jquery.com/jQuery.ajax/; https://openweathermap.org/forecast5; and https://stackoverflow.com/questions/49640174/building-a-5-day-forecast-using-open-weather-api-ajax-and-js //
// Weather API Key 87fe806293mshd2b0a915f2b154ap1f05e8jsnd65e7e646933 from https://rapidapi.com/sangatpuria01/api/weather-com //
var myAPIkey = "87fe806293mshd2b0a915f2b154ap1f05e8jsnd65e7e646933";
var testCity = "Raleigh";
var myURL = "https://rapidapi.com/sangatpuria01/api/weather-com";

$.ajax({
    url: myURL, // I am attempting to call my API, by my variable "url".  I hope this works. //
    dataType: "JSON",
    type: "GET",
    data: {
        q: testCity,
        appid: myAPIkey,
        units: standard,
        cnt: '5',
        lang: en,
    },
    succees: function(data){
        console.log('Data populated: ', data); // What am I getting for my data? //
        
        var forecast = "";

        forecast += "<h2>" + data.testCity.name + "</h2>"; // Suppose to display city queried. //

        $.each(data.list, function(index, val)){
            forecast += "<p>"
                forecast += "Day " + index + ":" // Day to display. //
                forecast += val.main.temp + "&degF" // Temperature in Fahrenheit. //
                forecast += "<span> | " + val.weather[0].description + "</span>" // Weather description. //
                forecast += "<img src='https://openweathermap.org/img/w/' + "val.weather[0].icon +" .png'>" // NEED ICON FROM MY API! Using reference a reference link to poulate an icon.//
            forecast += "</p>";
        },
        $("#displayForecast").html(index);
    },
    // Need help with failure function. //
});