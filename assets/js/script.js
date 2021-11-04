var apiKey = "31e22b4906dd29b754afd25ef05f0a2f";
var searchHistory = [];
var cityList = $("#cityList")
var today = moment().format("L");





var getCurrentConditions = function(city) {

    var city = $("#cityInput").val();  
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + apiKey;

    fetch(queryUrl)
        .then(response => response.json())
        .then(data => console.log(data.main.temp));

        $("#weatherContent").css("display", "block");
        $("#todaysForecast").empty();

        var iconKey = data.weather[0].icon;
        var iconUrl = "https://openweathermap.org/img/w/" + iconKey + ".png"; 

    var currentCity = $('<h2 id="currentCity">',
            '${data.name} ${today} <img src="${iconKey}" alt="${data.weather[0].description}" />',
            '</h2>',
            '<p>Temperature: ${data.main.temp} °F</p>',
            '<p>Humidity: ${data.main.humidity}\%</p>',
            '<p>Wind Speed: ${data.wind.speed} MPH</p>',
        )
    $("#todaysForecast").append(currentCity);


}
    










 

// event listeners for buton clicks
$(".button").on("click", function(event){
    event.preventDefault();
    getCurrentConditions();
});