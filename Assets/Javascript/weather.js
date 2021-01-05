'use strict';
// Ref. Links: https://api.jquery.com/jQuery.ajax/; https://openweathermap.org/forecast5; and https://stackoverflow.com/questions/49640174/building-a-5-day-forecast-using-open-weather-api-ajax-and-js //
// Weather API Key "a99269cb76b8b175359becc3ad8caa25" from https://home.openweathermap.org/ //

// jQuery //
$(document).ready(function () {
    // var testCity = $(".City").val;
    var testCity = "Seattle";

    // Relax AJAX Attempt- Get Help! //
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + testCity + "&appid=a99269cb76b8b175359becc3ad8caa25&units=imperial", // I am attempting to call my API, by my variable "url".  I hope this works. //
        dataType: "JSON",
        type: "GET",

        success: function (data) {
            console.log('Data populated: ', data); // What am I getting for my data? //

            // var forecast = "";

            // forecast += "<h2>" + data.testCity.name + "</h2>"; // Suppose to display city queried. //

            // $.each(data.list, function (index, val) {
            //     forecast += "<p>"
            //     forecast += "Day " + index + ":" // Day to display. //
            //     forecast += val.main.temp + "&degF" // Temperature in Fahrenheit. //
            //     forecast += "<span> | " + val.weather[0].description + "</span>" // Weather description. //
            //     forecast += "<img src='https://openweathermap.org/img/w/' + "val.weather[0].icon + " .png'>" // ICON //
            //     forecast += "</p>";
            // }),
            //     $("#displayForecast").html(index);
        },
        // Need help with failure function. //
    });

});