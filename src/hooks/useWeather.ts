import { useState, useEffect } from "react";
import { searchCity, weatherForecast } from "../services/geocodingApi";
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
        const forecast = await weatherForecast(location.lat, location.lon);
        const data = forecast?.weather ?? [];

        setWeather(data);
      } catch (error) {
          console.error("Weather fetch failed:", error);
          setWeather([]);
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(() => {
      fetchWeather();
    }, 500);

    return () => clearTimeout(timeout);
  }, [city]);
  return { weather, loading };
};