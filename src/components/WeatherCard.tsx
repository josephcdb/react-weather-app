interface WeatherProps {
  date: string;
  temp: number;
  condition: string;
}

export const WeatherCard = ({ date, temp, condition }: WeatherProps) => {
  return (
    <div className="card">
      <h3>{date}</h3>
      <p>{temp}°C</p>
      <p>{condition}</p>
    </div>
  );
};