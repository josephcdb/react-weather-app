import type { SearchBarProps } from "../types/weather";

export const SearchBar = ({ input, onInputChange, onSearch }: SearchBarProps) => {
  return (
    <div>
      <input
        id="city-search"
        name="city"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};