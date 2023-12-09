//declare and initialize global variables and constants
const apiKey = "0cc449e0243f819a913286fc912877ac";
const forecastElement = document.querySelector("#forecast");
const weatherElement = document.querySelector("#weather");
const titleElement = document.querySelector("#title");
const locationElement = document.querySelector(".container-location");
const temperatureElement = document.querySelector(".container-temperature");
const humidityElement = document.querySelector(".container-humidity");
const pressureElement = document.querySelector(".container-pressure");
const windElement = document.querySelector(".container-wind");
const descElement = document.querySelector(".container-description");
const dateElement = document.querySelector(".container-date");
let weatherData;
let forecastData;
let presUnits;
let tempUnits;

// async getWeather Function using fetch()
const getWeather = async (city) => {
  const respWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`);
  weatherData = await respWeather.json();

  const respForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=20&APPID=${apiKey}`);
  forecastData = await respForecast.json();

  displayWeather(document.querySelector("#forecastSel").value);
}

const displayWeather = async (mode) => {

  forecastElement.innerHTML = ``;
  if (document.querySelector("#forecastSel").value != 0) {
    let table = '<table>';
    table += `<tr><th>Date / Time</th><th>Temp (${tempUnits})</th><th>Humidity (%)</th><th>Pressure (${presUnits})</th><th>Description</th></tr>`;
    forecastData.list.forEach((item, index) => {
      // unit selection and conversions for main display
      let tempSel = document.querySelector("#tempSel").value;
      switch (tempSel) {
        case "0":
          tempUnits = "&#176F";
          temp = (item.main.temp - 272.15) * 1.8 + 32;
          break;
        case "1":
          tempUnits = "&#176C";
          temp = item.main.temp - 272.15;
          break;
        case "2":
          tempUnits = "K";
          temp = item.main.temp;
          break;
      }
      let presSel = document.querySelector("#presSel").value;
      switch (presSel) {
        case "0":
          presUnits = "mb";
          pres = item.main.pressure;
          break;
        case "1":
          presUnits = "mm Hg";
          pres = 0.75006 * item.main.pressure;
          break;
        case "2":
          presUnits = "hPa";
          pres = item.main.pressure;
          break;
      }
      let windSel = document.querySelector("#windSel").value;
      switch (windSel) {
        case "0":
          windUnits = "mi/hr";
          wind = 2.23693 * item.wind.speed;
          break;
        case "1":
          windUnits = "km/hr";
          wind = 3.6 * item.wind.speed;
          break;
        case "2":
          windUnits = "m/sec";
          wind = item.wind.speed;
          //windf = 
          break;
      }
      //create forecast table
      table += `<tr><td>${item.dt_txt.substr(5, 11)}</td><td>${temp.toFixed(1)}</td><td>${item.main.humidity}</td><td>${pres.toFixed(1)}</td><td>${item.weather[0].description.charAt(0).toUpperCase()}${item.weather[0].description.slice(1)}`;
    });
    table += '</table>';
    forecastElement.innerHTML = table;
  }
  // unit selection and conversions for main display
  let tempSel = document.querySelector("#tempSel").value;
  switch (tempSel) {
    case "0":
      tempUnits = "&#176F";
      tempW = (weatherData.main.temp - 272.15) * 1.8 + 32;
      break;
    case "1":
      tempUnits = "&#176C";
      tempW = weatherData.main.temp - 272.15;
      break;
    case "2":
      tempUnits = "K";
      temp = weatherData.main.temp;
      break;
  }
  let presSel = document.querySelector("#presSel").value;
  switch (presSel) {
    case "0":
      presUnits = "mb";
      presW = weatherData.main.pressure;
      break;
    case "1":
      presUnits = "mm Hg";
      presW = 0.75006 * weatherData.main.pressure;
      break;
    case "2":
      presUnits = "hPa";
      presW = weatherData.main.pressure;
      break;
  }
  let windSel = document.querySelector("#windSel").value;
  switch (windSel) {
    case "0":
      windUnits = "mi/hr";
      windW = 2.23693 * weatherData.wind.speed;
      break;
    case "1":
      windUnits = "km/hr";
      windW = 3.6 * weatherData.wind.speed;
      break;
    case "2":
      windUnits = "m/sec";
      windW = weatherData.wind.speed;
      //windf = 
      break;
  }
  //main display
  locationElement.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`;
  temperatureElement.innerHTML = `${tempW.toFixed(1)} ${tempUnits}`;
  humidityElement.innerHTML = `${weatherData.main.humidity.toFixed(1)} %`;
  pressureElement.innerHTML = `${presW.toFixed(1)} ${presUnits}`;
  windElement.innerHTML = `${windW.toFixed(1)} ${windUnits}`;
  descElement.innerHTML = `${weatherData.weather[0].description}`;
  dateElement.innerHTML = `${new Date().toDateString({ day: "numeric", month: "short", year: "numeric" })}`;
}

/* Event Listeners */
document.querySelector("#cityName").addEventListener("input", () => {
  getWeather(document.querySelector("#cityName").value)
});

document.querySelector("#forecastSel").addEventListener("change", () => {
  getWeather(document.querySelector("#cityName").value)
});

document.querySelector("#tempSel").addEventListener("change", () => {
  getWeather(document.querySelector("#cityName").value)
});

document.querySelector("#presSel").addEventListener("change", () => {
  getWeather(document.querySelector("#cityName").value)
});

document.querySelector("#windSel").addEventListener("change", () => {
  getWeather(document.querySelector("#cityName").value)
});

//intial call to getWeather to download weather/forecast data
getWeather(document.querySelector("#cityName").value);