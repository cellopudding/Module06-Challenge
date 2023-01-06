//API KEY: 2dbbfdf0a4cbee0766590c5f79eb83b3

var searchBox = document.getElementById("search-box")
var searchHistory = document.getElementById("search-history")
var cityName = document.getElementById("city-name")
var tempToday = document.getElementById("temp-today")
var humidToday= document.getElementById("humidity-today")
var windToday = document.getElementById("wind-today")
var searchBtn = document.getElementById("searchbtn")
var apiKey = "2dbbfdf0a4cbee0766590c5f79eb83b3"
var rootUrl = "https://api.openweathermap.org"

function search(city) {
    fetch(
        `${rootUrl}/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    ).then(function(response){
        return response.json()
    }).then(function(data){
        console.log (data.weather[0].icon)
        var currentCity = $(`
        <h2 id= "currentCity"> 
        ${data.name}
        </h2>
        
        `)
        var cityInfo = $(`
        <p>Temperature: ${data.main.temp}</p>
        <p>Humidity: ${data.main.humidity}</p>
        <p>Wind Speed: ${data.wind.speed}</p>
        `)
        $("#temp-today").append(cityInfo)
        $("#city-name").append(currentCity)

    })
}

searchBtn.addEventListener("click", function(event){
    event.preventDefault()
    var city = searchBox.value
    search(city)
    searchBox.value=""

})

// fetches needed: uv index, general 5 day forecast