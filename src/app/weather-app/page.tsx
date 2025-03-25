"use client";

import { WeatherData } from "../../types/weather";

import { useState } from "react";
import { fetchWeather } from "../../utils/weather";

export default function WeatherApp() {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFetchWeather = async () => {
    setError(null);
    const data = await fetchWeather(city);
    if (data) {
      console.log({ data });
      setWeather(data);
    } else {
      setWeather(null);
      setError("City not found or API error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 border border-gray-300 roundex-md"
      />
      <button
        onClick={handleFetchWeather}
        className="mt-2 bg-blue-500 text-black px-4 py-2 rounded-md"
      >
        Get Weather
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {weather && (
        <div className="mt-4 p-4 border rounded-md bg-gray-100">
          <h2 className="text-xl font-semibold">{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Condition: {weather.weather[0].main}</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
