import { GiBlackBook } from "react-icons/gi";
import FontDropDown from "../components/fontDropDown";
import ThemeToggle from "../components/themeToggle";

export default function Header() {
  return (
    <header>
      <GiBlackBook className="logo" />

      <div className="group">
        <FontDropDown />

        <div className="line"></div>

        <ThemeToggle />
      </div>
    </header>
  );
}
