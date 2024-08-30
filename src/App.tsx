import { useState, useEffect } from "react";
import { CurrentWeather } from "./CurrentWeather.tsx";
import { WeatherDay } from "./WeatherDay.tsx";
import { Header } from "./Header.tsx";
import { SearchBar } from "./Search.tsx";

function getLocation() {
  let location = sessionStorage.getItem("location");
  if (location === null) location = "hong kong";
  return location || "london";
}

function App() {
  const KEY = "6faffd7330cb4076b8963711242808";
  const location: string = getLocation();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=3`,
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        console.log(`catch ${err}`);
      }
    }
    fetchWeatherData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <Header />
      <SearchBar />
      {weatherData ? (
        <>
          <div>
            <CurrentWeather weatherData={weatherData} />
          </div>
          <div className="flex gap-4">
            <WeatherDay weatherData={weatherData} day={0} />
            <WeatherDay weatherData={weatherData} day={1} />
            <WeatherDay weatherData={weatherData} day={2} />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
