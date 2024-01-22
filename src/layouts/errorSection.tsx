import { useSearch } from "../state";
import { IoIosWarning } from "react-icons/io";
import { BiWifiOff } from "react-icons/bi";
import { TbError404 } from "react-icons/tb";

export default function ErrorSection() {
  const { error, handleSearch } = useSearch();
  const { status, searchedWord } = error || { status: "", searchedWord: "" };

  const handleRetry = () => {
    handleSearch(searchedWord);
  };

  const classname = () => {
    if (status === 504) return "no-network";
    if (status === 404) return "not-found";

    return "";
  };

  const Icon = () => {
    if (status === 504) return <BiWifiOff />;
    if (status === 404) return <TbError404 />;

    return <IoIosWarning />;
  };

  const Message = () => {
    if (status === 504)
      return <p>Please check your internet connection and try again</p>;

    if (status === 404)
      return (
        <p>
          The word <b>{searchedWord}</b> couldn't be found. Please double-check
          the spelling or try another word.
        </p>
      );

    return <p>Something went wrong!</p>;
  };

  return (
    <div className={"error-section " + classname()}>
      <Icon />

      <Message />

      <button onClick={handleRetry}>Retry</button>
    </div>
  );
}
