interface SearchBarProps {
  input: string;
  onInputChange: (value: string) => void;
  onSearch: () => void;
}

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