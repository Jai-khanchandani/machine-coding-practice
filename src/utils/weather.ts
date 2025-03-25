import { WeatherData } from "../types/weather";

export const fetchWeather = async (
  city: string
): Promise<WeatherData | null> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b27f010f44ef92d01bc20de33e27fb89&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data: WeatherData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
