import { FormEvent, useState } from "react";

export interface ISearch {
  sample: string;
}

const Search: React.FC<ISearch> = () => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    alert(query);
  };

  return (
    // a text input search bar with a placeholder of "search..." with a rounded, gray border, large width and a button to submit the search query
    <form
      className="flex flex-row justify-center items-center space-x-5"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        type="text"
        placeholder="product name"
        className="rounded border-gray-300 border-2 w-96 h-8"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
        Search
      </button>
    </form>
  );
};

export default Search;
