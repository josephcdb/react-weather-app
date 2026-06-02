export const searchCity = async (city: string) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${city},Germany&format=json&limit=1`);

  const data = await response.json();

  if (!data.length) {
    throw new Error("City not found");
  }

  return {
    lat: data[0].lat,
    lon: data[0].lon,
  };
};

export const weatherForecast = async ( lat: string, lon: string) => {
  const today = new Date().toISOString().split("T")[0];
  const response = await fetch(
    `https://api.brightsky.dev/weather?lat=${lat}&lon=${lon}&date=${today}`);
  return response.json();
};