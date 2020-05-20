var date = moment().format("MMMM Do YYYY");
$(".date").text(date);
var searchBtn = $("#searchBtn");

//main box with weather details 
searchBtn.click(getWeather);
function getWeather() {
  var city = $("#cityInput").val();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3b7c785e4d7c66cff4aa075b470fd6f5";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var cityDetails = $(".cityDetails");
    var cityName = response.name;
    var iconCode = response.weather[0].icon
    var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
    var icon = $(".icon").attr("src", iconURL);
    cityDetails.text(cityName);
    var temp = (response.main.temp - 273.15) * 1.80 + 32;
    $(".temp").text("Temperature: " + Math.floor(temp) + "°F");
    var humidity = response.main.humidity;
    $(".humidity").text("Humidity: " + humidity + "%");
    var windSpeed = response.wind.speed;
    $(".windSpeed").text("Wind Speed: " + windSpeed + "MPH");
  })
};

//populate five day forecast cards 
searchBtn.click(populateFiveDay);
function populateFiveDay() {
  var city = $("#cityInput").val();
  console.log(city);
  var fiveDayQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=3b7c785e4d7c66cff4aa075b470fd6f5";
  $.ajax({
    url: fiveDayQueryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    //card one
    var iconCodeOne = response.list[0].weather[0].icon; 
    var iconURLone = "http://openweathermap.org/img/w/" + iconCodeOne + ".png";
    $(".iconOne").attr("src", iconURLone);
    var tempOne = (response.list[0].main.temp - 273.15) * 1.80 + 32;
    $(".tempOne").text("Temperature: " + Math.floor(tempOne) + "°F");
    var humidityOne = response.list[0].main.humidity; 
    $(".humidityOne").text("Humidity: " + humidityOne + "%");
    //card two
    var iconCodeTwo = response.list[7].weather[0].icon; 
    var iconURLtwo = "http://openweathermap.org/img/w/" + iconCodeTwo + ".png";
    $(".iconTwo").attr("src", iconURLtwo);
    var tempTwo = (response.list[7].main.temp - 273.15) * 1.80 + 32;
    $(".tempTwo").text("Temperature: " + Math.floor(tempTwo) + "°F");
    var humidityTwo = response.list[7].main.humidity; 
    $(".humidityTwo").text("Humidity: " + humidityTwo + "%");
    //card three
    var iconCodeThree = response.list[15].weather[0].icon; 
    var iconURLthree = "http://openweathermap.org/img/w/" + iconCodeThree + ".png";
    $(".iconThree").attr("src", iconURLthree);
    var tempThree = (response.list[15].main.temp - 273.15) * 1.80 + 32;
    $(".tempThree").text("Temperature: " + Math.floor(tempThree) + "°F");
    var humidityThree = response.list[15].main.humidity; 
    $(".humidityThree").text("Humidity: " + humidityThree + "%");
    //card four
    var iconCodeFour = response.list[23].weather[0].icon; 
    var iconURLfour = "http://openweathermap.org/img/w/" + iconCodeFour + ".png";
    $(".iconFour").attr("src", iconURLfour);
    var tempFour = (response.list[23].main.temp - 273.15) * 1.80 + 32;
    $(".tempFour").text("Temperature: " + Math.floor(tempFour) + "°F");
    var humidityFour = response.list[23].main.humidity; 
    $(".humidityFour").text("Humidity: " + humidityFour + "%");
    //card five
    var iconCodeFive = response.list[31].weather[0].icon; 
    var iconURLfive = "http://openweathermap.org/img/w/" + iconCodeFive + ".png";
    $(".iconFive").attr("src", iconURLfive);
    var tempFive = (response.list[31].main.temp - 273.15) * 1.80 + 32;
    $(".tempFive").text("Temperature: " + Math.floor(tempFive) + "°F");
    var humidityFive = response.list[31].main.humidity; 
    $(".humidityFive").text("Humidity: " + humidityFive + "%");

  })
};

// Populate side list of cities 
searchBtn.click(populateList);
function populateList() {
  var city = $("#cityInput").val();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3b7c785e4d7c66cff4aa075b470fd6f5";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var cityList = $(".cityList");
    var listItem = $("<li></li>").addClass("list-group-item");
    var listBtn = $("<button>" + response.name + "</button>").addClass("btn btn-link text-dark logged");
    listBtn.attr("data-name", response.name);
    listItem.html(listBtn);
    cityList.prepend(listItem);
  })
};

//recall cities from list created when clicked 
$(document).on("click", ".logged", recallCity);
function recallCity() {
  var city = $(this).attr("data-name");
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3b7c785e4d7c66cff4aa075b470fd6f5";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var cityDetails = $(".cityDetails");
    var cityName = response.name;
    var iconCode = response.weather[0].icon
    var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
    var icon = $(".icon").attr("src", iconURL);
    cityDetails.text(cityName);
    var temp = (response.main.temp - 273.15) * 1.80 + 32;
    $(".temp").text("Temperature: " + Math.floor(temp) + "°F");
    var humidity = response.main.humidity;
    $(".humidity").text("Humidity: " + humidity + "%");
    var windSpeed = response.wind.speed;
    $(".windSpeed").text("Wind Speed: " + windSpeed + "MPH");
  })
};

//recall cities from list to populate five day forecast when clicked 
$(document).on("click", ".logged", recallCityFive);
function recallCityFive() {
  var city = $(this).attr("data-name");
  console.log(city);
  var fiveDayQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=3b7c785e4d7c66cff4aa075b470fd6f5";
  $.ajax({
    url: fiveDayQueryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    //card one
    var iconCodeOne = response.list[0].weather[0].icon; 
    var iconURLone = "http://openweathermap.org/img/w/" + iconCodeOne + ".png";
    $(".iconOne").attr("src", iconURLone);
    var tempOne = (response.list[0].main.temp - 273.15) * 1.80 + 32;
    $(".tempOne").text("Temperature: " + Math.floor(tempOne) + "°F");
    var humidityOne = response.list[0].main.humidity; 
    $(".humidityOne").text("Humidity: " + humidityOne + "%");
    //card two
    var iconCodeTwo = response.list[7].weather[0].icon; 
    var iconURLtwo = "http://openweathermap.org/img/w/" + iconCodeTwo + ".png";
    $(".iconTwo").attr("src", iconURLtwo);
    var tempTwo = (response.list[7].main.temp - 273.15) * 1.80 + 32;
    $(".tempTwo").text("Temperature: " + Math.floor(tempTwo) + "°F");
    var humidityTwo = response.list[7].main.humidity; 
    $(".humidityTwo").text("Humidity: " + humidityTwo + "%");
    //card three
    var iconCodeThree = response.list[15].weather[0].icon; 
    var iconURLthree = "http://openweathermap.org/img/w/" + iconCodeThree + ".png";
    $(".iconThree").attr("src", iconURLthree);
    var tempThree = (response.list[15].main.temp - 273.15) * 1.80 + 32;
    $(".tempThree").text("Temperature: " + Math.floor(tempThree) + "°F");
    var humidityThree = response.list[15].main.humidity; 
    $(".humidityThree").text("Humidity: " + humidityThree + "%");
    //card four
    var iconCodeFour = response.list[23].weather[0].icon; 
    var iconURLfour = "http://openweathermap.org/img/w/" + iconCodeFour + ".png";
    $(".iconFour").attr("src", iconURLfour);
    var tempFour = (response.list[23].main.temp - 273.15) * 1.80 + 32;
    $(".tempFour").text("Temperature: " + Math.floor(tempFour) + "°F");
    var humidityFour = response.list[23].main.humidity; 
    $(".humidityFour").text("Humidity: " + humidityFour + "%");
    //card five
    var iconCodeFive = response.list[31].weather[0].icon; 
    var iconURLfive = "http://openweathermap.org/img/w/" + iconCodeFive + ".png";
    $(".iconFive").attr("src", iconURLfive);
    var tempFive = (response.list[31].main.temp - 273.15) * 1.80 + 32;
    $(".tempFive").text("Temperature: " + Math.floor(tempFive) + "°F");
    var humidityFive = response.list[31].main.humidity; 
    $(".humidityFive").text("Humidity: " + humidityFive + "%");

  })
};

//Clear input field of entry upon clicking the search button 
searchBtn.click(clearInput);
  function clearInput() {
  $("#cityInput").val("");
};

//populate dates of five day forecast 
function populateDates() {
  var oneDay = moment().add(1, 'day');
  $(".dayOne").text(oneDay.format("l"));
  var twoDay = moment().add(2, 'day');
  $(".dayTwo").text(twoDay.format("l"));
  var threeDay = moment().add(3, 'day');
  $(".dayThree").text(threeDay.format("l"));
  var fourDay = moment().add(4, 'day');
  $(".dayFour").text(fourDay.format("l"));
  var fiveDay = moment().add(5, 'day');
  $(".dayFive").text(fiveDay.format("l"));
};
populateDates();