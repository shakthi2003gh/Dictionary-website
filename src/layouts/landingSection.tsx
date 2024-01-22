import { GiBlackBook } from "react-icons/gi";

export default function LandingSection() {
  return (
    <div className="landing-section">
      <div className="logo">
        <GiBlackBook />
        <h1>Dictionary</h1>
      </div>

      <p>Search a word to discover its meaning.</p>
    </div>
  );
}
