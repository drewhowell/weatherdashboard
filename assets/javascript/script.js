// This is our API key

var APIKey = "&appid=a1e01b951a95042a50e99d7d3222a66d";
var city = "Atlanta";


// Here we are building the URL we need to query the database

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + APIKey;
    var queryURLFive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + APIKey;

// Here we run our AJAX call to the OpenWeatherMap API

$.ajax({
    url: queryURL,
    method: "GET"
})// We store all of the retrieved data inside of an object called "response"
.then(function(response) {
    console.log(queryURL);
    console.log(response);

//code will go here
// Transfer content to HTML
    $(".city").html("<h1>" + response.name + "</h1>");
    $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
    $(".humidity").text("Humidity: " + response.main.humidity + "%");
    $(".uv").text("UV Index: ");

// Converts the temp to Kelvin with the below formula
var tempF = (response.main.temp - 273.15) * 1.80 + 32;
$(".tempF").text("Temperature: " + Math.round(tempF) + " °F");


});