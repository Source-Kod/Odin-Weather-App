interface CurrentWeatherProps {
  weatherData: any;
}

function CurrentWeather({ weatherData }: CurrentWeatherProps) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-blue-400 p-2 opacity-50">
      <h2>{weatherData.location.name}</h2>
      <p>{weatherData.current.condition.text}</p>
      <p>{weatherData.current.temp_f}°F</p>
      <p>feels like: {weatherData.current.feelslike_f}°F</p>
      <p>humidity: {weatherData.current.humidity}%</p>
      <p>wind: {weatherData.current.wind_mph} mp/h</p>
    </div>
  );
}
export { CurrentWeather };
