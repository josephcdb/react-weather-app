import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { WeatherCard } from "./components/WeatherCard";
import { useWeather } from "./hooks/useWeather";
import type { Weather } from "./types/weather";

function App() {
  // Search input
  const [input, setInput] = useState("Hamburg");

  // Actual city used for API calls
  const [city, setCity] = useState("Hamburg");
  const { weather, loading } = useWeather(city);

  // Convert hourly forecast to daily forecast
  const dailyForecast = Object.values((weather ?? []).reduce(
    (acc: Record<string, Weather>, item: Weather) => {
      const day = item.timestamp.split("T")[0];

      if (!acc[day]) {
        acc[day] = item;
      }
      return acc;
    },
    {}
  ));

  const getDayLabel = ( timestamp: string, index: number) => {
    if (index === 0) return "Today";
    if (index === 1) return "Tomorrow";

    return new Date(timestamp).toLocaleDateString("de-DE",
      {
        weekday: "long",
      }
    );
  };

  const handleSearch = () => {
    if (!input.trim()) return;

    setCity(input.trim());
  };

  return (
    <div className="container">
      <h1>Germany Weather Dashboard</h1>

      <SearchBar
        input={input}
        onInputChange={setInput}
        onSearch={handleSearch}
      />

      {loading && <p>Loading weather...</p>}

      {!loading && (dailyForecast.length === 0) && (
        <p>No weather data found.</p>
      )}

      <div className="forecast-grid">
        {dailyForecast.map((item: Weather, index: number) => (
          <WeatherCard
            key={item.timestamp}
            date={getDayLabel(item.timestamp, index)}
            temp={item.temperature}
            condition={item.condition}
          />
        ))}
      </div>
    </div>
  );
}

export default App;