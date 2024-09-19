"use strict";

const temp = document.querySelector(".temp");
const cityEl = document.querySelector(".city");
const searchBtn = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");
const weatherImg = document.querySelector(".weather-icon");
const apiKey = "64ed2215ba8302285ea95cb1a3ec8141";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  temp.innerHTML = Math.round(data.main.temp) + "°C";
  cityEl.innerHTML = data.name;
  humidityEl.innerHTML = data.main.humidity + "%";
  windEl.innerHTML = data.wind.speed + "km/hr";

  if (data.weather[0].main == "Clouds") {
    weatherImg.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherImg.src = "images/clear.png";
  } else if (data.weather[0].main == "Snow") {
    weatherImg.src = "images/snow.png";
  } else if (data.weather[0].main == "Mist") {
    weatherImg.src = "images/mist.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherImg.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Rain") {
    weatherImg.src = "images/rain.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
