import { ChangeEvent, FormEvent } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useSearch } from "../state";

export default function SearchBar() {
  const { data, search, setSearch, handleSearch } = useSearch();
  const isSearchEmpty = !search.trim().length;
  const isAlreadySearched = search === data?.word;

  const handleType = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSearch();
  };

  return (
    <form className="search-bar" onSubmit={handleSumbit}>
      <input
        type="text"
        placeholder="Type any word"
        value={search}
        onChange={handleType}
      />

      <button type="submit" disabled={isSearchEmpty || isAlreadySearched}>
        <IoSearchSharp />
      </button>
    </form>
  );
}
