export const getWeatherForecast = async (
  lat: string,
  lon: string
) => {
  const today = new Date().toISOString().split("T")[0];

  const response = await fetch(
    `https://api.brightsky.dev/weather?lat=${lat}&lon=${lon}&date=${today}`
  );

  return response.json();
};