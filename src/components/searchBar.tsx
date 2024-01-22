import { ChangeEvent, FormEvent } from "react";
import { MdOutlineClear } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { useSearch } from "../state";

export default function SearchBar() {
  const { data, search, setSearch, handleSearch } = useSearch();
  const isSearchEmpty = !search.trim().length;
  const isAlreadySearched = search === data?.word;

  const handleType = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleReset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearch("");
  };

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSearch();
  };

  return (
    <form className="search-bar" onReset={handleReset} onSubmit={handleSumbit}>
      <input
        name="search"
        type="text"
        placeholder="Type any word"
        value={search}
        onChange={handleType}
      />

      <div className="button-group">
        <button type="reset" className="secondary" disabled={isSearchEmpty}>
          <MdOutlineClear />
        </button>

        <button
          type="submit"
          className="primary"
          disabled={isSearchEmpty || isAlreadySearched}
        >
          <IoSearchSharp />
        </button>
      </div>
    </form>
  );
}
