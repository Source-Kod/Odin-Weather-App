const KEY = "$API_KEY";

async function getLocation() {
  let location = sessionStorage.getItem("location");

  if (location === null) location = await getPublicIP();
  return location || "london";
}

function searchBar() {
  const searchText = document.querySelector("#search-text");
  const searchForm = document.querySelector("#search-form");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    sessionStorage.setItem("location", searchText.value);
    updateDom();
  });
}

async function getData() {
  const location = await getLocation();

  try {
    const x = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=3`,
    );
    const y = await x.json();
    return y;
  } catch (err) {
    console.log(`catch ${err}`);
  }
}

async function getPublicIP() {
  const publicIP = await fetch("https://api.ipify.org?format=json");
  const publicIPString = await publicIP.json();
  return publicIPString.ip;
}

function changeWillItRainToEnglish(int) {
  return int === 1 ? "yes" : "no";
}

function createCurrentWeather(data) {
  // current location
  const currentLocation = document.querySelector("#current-location");
  currentLocation.textContent = data.location.name;

  // current conditon
  const currentCondition = document.querySelector("#current-status");
  currentCondition.textContent = data.current.condition.text;

  // curent temp F
  const currentTempF = document.querySelector("#current-temp-f");
  currentTempF.textContent = `${data.current.temp_f}°F`;

  // curent feel
  const currentFeel = document.querySelector("#current-feel");
  currentFeel.textContent = `feels like: ${data.current.feelslike_f}°F`;

  // curent humidity
  const currentHumidity = document.querySelector("#current-humidity");
  currentHumidity.textContent = `humidity: ${data.current.humidity}%`;

  // curent wind speed
  const currentWind = document.querySelector("#curent-wind");
  currentWind.textContent = `wind: ${data.current.wind_mph} mp/h`;
}

function createForcastWeather(data) {
  // day 1
  const maxTemp1 = document.querySelector("#forcast-1-max");
  const minTemp1 = document.querySelector("#forcast-1-min");
  const willRain1 = document.querySelector("#forcast-1-will-rain");
  const chanceOfRain1 = document.querySelector("#forcast-1-chance-of-rain");

  maxTemp1.textContent = `Max Temp: ${data.forecast.forecastday[0].day.maxtemp_f}°F`;
  minTemp1.textContent = `Min Temp: ${data.forecast.forecastday[0].day.mintemp_f}°F`;
  willRain1.textContent = `Will it rain: ${changeWillItRainToEnglish(
    data.forecast.forecastday[0].day.daily_will_it_rain,
  )}`;
  chanceOfRain1.textContent = `Chance of Rain: ${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;

  // day 2
  const maxTemp2 = document.querySelector("#forcast-2-max");
  const minTemp2 = document.querySelector("#forcast-2-min");
  const willRain2 = document.querySelector("#forcast-2-will-rain");
  const chanceOfRain2 = document.querySelector("#forcast-2-chance-of-rain");

  maxTemp2.textContent = `Max Temp: ${data.forecast.forecastday[1].day.maxtemp_f}°F`;
  minTemp2.textContent = `Min Temp: ${data.forecast.forecastday[1].day.mintemp_f}°F`;
  willRain2.textContent = `Will it rain: ${changeWillItRainToEnglish(
    data.forecast.forecastday[1].day.daily_will_it_rain,
  )}`;
  chanceOfRain2.textContent = `Chance of Rain: ${data.forecast.forecastday[1].day.daily_chance_of_rain}%`;

  // day 3
  const maxTemp3 = document.querySelector("#forcast-3-max");
  const minTemp3 = document.querySelector("#forcast-3-min");
  const willRain3 = document.querySelector("#forcast-3-will-rain");
  const chanceOfRain3 = document.querySelector("#forcast-3-chance-of-rain");

  maxTemp3.textContent = `Max Temp: ${data.forecast.forecastday[2].day.maxtemp_f}°F`;
  minTemp3.textContent = `Min Temp: ${data.forecast.forecastday[2].day.mintemp_f}°F`;
  willRain3.textContent = `Will it rain: ${changeWillItRainToEnglish(
    data.forecast.forecastday[2].day.daily_will_it_rain,
  )}`;
  chanceOfRain3.textContent = `Chance of Rain: ${data.forecast.forecastday[2].day.daily_chance_of_rain}%`;
}

async function updateDom() {
  const data = await getData();

  searchBar();

  createCurrentWeather(data);
  createForcastWeather(data);
}

updateDom();
