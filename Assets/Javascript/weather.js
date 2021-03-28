'use strict';
// Ref. Links: https://api.jquery.com/jQuery.ajax/; https://openweathermap.org/forecast5; and https://stackoverflow.com/questions/49640174/building-a-5-day-forecast-using-open-weather-api-ajax-and-js //
// Weather API Key "a99269cb76b8b175359becc3ad8caa25" from https://home.openweathermap.org/ //

// jQuery //
$("#search").on("click", function (e) {
    e.preventDefault();
    // var testCity = $(".City").val;
    var City = $("#input").val();

    // Relax AJAX Attempt- Get Help! //
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + City + "&appid=a99269cb76b8b175359becc3ad8caa25&units=imperial", // I am attempting to call my API, by my variable "url".  I hope this works. //
       
        type: "GET",

        success: function (data) {
            console.log('Data populated: ', data); // What am I getting for my data? //

            var forecast = "";

            forecast += "<h2>" + data.city.name + "</h2>"; // Suppose to display city queried. //

           for (var i = 0; i < data.list.length; i++) {
            
                if (data.list[i].dt_txt.includes("00:00:00")) {
                    forecast += "<p>"
                    forecast += moment(data.list[i].dt, "X").format("MM/DD/YYYY") // Temperature in Fahrenheit. //
                    forecast += "<br> <img src='https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>" // ICON //
                    forecast += data.list[i].main.temp + "&degF" // Temperature in Fahrenheit. //
                    forecast += data.list[i].main.humidity + "%" // Temperature in Fahrenheit. //
                    // forecast += "<span> | " +  data.list[i].weather[0].description + "</span>" // Weather description. //
                    forecast += "</p>";
                }
            }
            console.log(forecast);
                $("#forecast").html(forecast);
        }
        // Need help with failure function. //
    });

});