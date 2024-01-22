import { ChangeEvent } from "react";
import { useFont } from "../state";

export default function FontDropDown() {
  const { fonts, setFont } = useFont();

  const handleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setFont(e.target.value);
  };

  return (
    <select name="font" className="font-dropdown" onChange={handleSelection}>
      {fonts.map((font) => (
        <option key={font} value={font}>
          {font}
        </option>
      ))}
    </select>
  );
}
