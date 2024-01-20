import { KeyboardEvent } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../state";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === "dark";

  const handleToggle = (e: KeyboardEvent) => {
    if (e.key !== "Enter") return;
    toggleTheme();
  };

  return (
    <div className="theme-toggle">
      <label className="toggle" tabIndex={0} onKeyUp={handleToggle}>
        <input type="checkbox" onChange={toggleTheme} hidden />
      </label>

      {isDarkTheme ? (
        <BsFillSunFill className="icon" />
      ) : (
        <IoMoonOutline className="icon" />
      )}
    </div>
  );
}
