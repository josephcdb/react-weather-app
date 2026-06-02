import { useState, useEffect } from "react";
import { searchCity } from "../services/geocodingApi";
import { getWeatherForecast } from "../services/weatherApi";
import type { Weather } from "../types/weather";

export const useWeather = (city: string) => {
  const [weather, setWeather] = useState<Weather[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        setLoading(true);

        const location = await searchCity(city);
        const forecast = await getWeatherForecast(location.lat, location.lon);
        const data = forecast?.weather ?? [];

        setWeather(data);
      } catch (error) {
          console.error("Weather fetch failed:", error);
          setWeather([]);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);
  return { weather, loading };
};