function changeWillItRainToEnglish(int: number) {
  return int === 1 ? "yes" : "no";
}

interface WeatherDayProps {
  weatherData: any;
  day: number;
}

function WeatherDay({ weatherData, day }: WeatherDayProps) {
  const dayTitle = ["Today", "Tomorrow", "Overmorrow"];
  return (
    <div className="flex flex-col items-center rounded-lg bg-blue-500 p-2 opacity-50">
      <h2>{dayTitle[day]}</h2>
      <p>Max Temp: {weatherData.forecast.forecastday[day].day.maxtemp_f}°F</p>
      <p>Min Temp: {weatherData.forecast.forecastday[0].day.mintemp_f}°F</p>
      <p>
        Will it rain:{" "}
        {changeWillItRainToEnglish(
          weatherData.forecast.forecastday[day].day.daily_will_it_rain,
        )}
      </p>
      <p>
        Chance of Rain:{" "}
        {weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%
      </p>
    </div>
  );
}
export { WeatherDay };
