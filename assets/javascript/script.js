// This is our API key

var APIKey = "&appid=a1e01b951a95042a50e99d7d3222a66d";
var city = localStorage.getItem("inputcontent");


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

// Transfer content to HTML
    $(".city").html("<h1>" + response.name + "</h1>");
    $(".icon").html("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
    $(".humidity").text("Humidity: " + response.main.humidity + "%");
    $(".uv").text("UV Index: ");

// Converts the temp to Kelvin with the below formula
var tempF = (response.main.temp - 273.15) * 1.80 + 32;
$(".tempF").text("Temperature: " + Math.round(tempF) + " °F");

});

$.ajax({
    url: queryURLFive,
    method: "GET"
})// We store all of the retrieved data inside of an object called "response"
.then(function(response) {
    console.log(queryURLFive);
    console.log(response);

// Transfer day 1 content to HTML
    $(".day-one-date").html("<h4>" + response.list[0].dt_txt + "</h4>");
    $(".day-one-icon").html("<img src='http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    $(".day-one-humidity").text("Humidity: " + response.list[0].main.humidity + "%");

// Converts the temp to Kelvin with the below formula
var tempOne = (response.list[0].main.temp - 273.15) * 1.80 + 32;
$(".day-one-temp").text("Temp: " + Math.round(tempOne) + " °F");

// Transfer day 2 content to HTML
$(".day-two-date").html("<h4>" + response.list[8].dt_txt + "</h4>");
$(".day-two-icon").html("<img src='http://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
$(".day-two-humidity").text("Humidity: " + response.list[8].main.humidity + "%");

// Converts the temp to Kelvin with the below formula
var tempTwo = (response.list[8].main.temp - 273.15) * 1.80 + 32;
$(".day-two-temp").text("Temp: " + Math.round(tempTwo) + " °F");

// Transfer day 3 content to HTML
$(".day-three-date").html("<h4>" + response.list[16].dt_txt + "</h4>");
$(".day-three-icon").html("<img src='http://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
$(".day-three-humidity").text("Humidity: " + response.list[16].main.humidity + "%");

// Converts the temp to Kelvin with the below formula
var tempThree = (response.list[16].main.temp - 273.15) * 1.80 + 32;
$(".day-three-temp").text("Temp: " + Math.round(tempThree) + " °F");

// Transfer day 4 content to HTML
$(".day-four-date").html("<h4>" + response.list[24].dt_txt + "</h4>");
$(".day-four-icon").html("<img src='http://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
$(".day-four-humidity").text("Humidity: " + response.list[24].main.humidity + "%");

// Converts the temp to Kelvin with the below formula
var tempFour = (response.list[24].main.temp - 273.15) * 1.80 + 32;
$(".day-four-temp").text("Temp: " + Math.round(tempFour) + " °F");

// Transfer day 5 content to HTML
$(".day-five-date").html("<h4>" + response.list[32].dt_txt + "</h4>");
$(".day-five-icon").html("<img src='http://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
$(".day-five-humidity").text("Humidity: " + response.list[32].main.humidity + "%");

// Converts the temp to Kelvin with the below formula
var tempFive = (response.list[32].main.temp - 273.15) * 1.80 + 32;
$(".day-five-temp").text("Temp: " + Math.round(tempFive) + " °F");



});



// Use the search field

var searchInput = document.querySelector(".input");
var searchOutput = document.querySelector(".output");
var searchButton = document.querySelector(".search");

searchButton.addEventListener("click", searchFunction);

searchOutput.textContent = localStorage.getItem("inputcontent");
searchInput.textarea.value = localStorage.getItem("inputcontent");

function searchFunction() {
    localStorage.setItem("inputcontent", searchInput.value);

    searchOutput.textContent = searchInput.textarea.value;
}