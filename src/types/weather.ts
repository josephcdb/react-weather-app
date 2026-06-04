export type Weather = {
    timestamp: string;
    temperature: number;
    condition: string;
}

export type SearchBarProps = {
  input: string;
  onInputChange: (value: string) => void;
  onSearch: () => void;
}

export type WeatherProps = {
  date: string;
  temp: number;
  condition: string;
}