import { ChangeEvent, FormEvent, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useSearch } from "../state";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const { setSearch } = useSearch();

  const handleType = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearch(value);
  };

  return (
    <form className="search-bar" onSubmit={handleSumbit}>
      <input
        type="text"
        placeholder="Type any word"
        value={value}
        onChange={handleType}
      />

      <button type="submit" disabled={!value.trim().length}>
        <IoSearchSharp />
      </button>
    </form>
  );
}
