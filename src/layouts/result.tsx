import { useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { useLoading, useSearch } from "./../state/index";
import LandingSection from "./landingSection";
import ErrorSection from "./errorSection";
import LoadingSection from "./loadingSection";
import PartOfTheSpeech from "../components/partOfTheSpeech";

export default function Result() {
  const { data, error } = useSearch();
  const isloading = useLoading();
  const audioRef = useRef<HTMLAudioElement>(null);

  if (isloading) return <LoadingSection />;
  if (error || error === undefined) return <ErrorSection />;
  if (!data) return <LandingSection />;

  const value = { text: "", audio: "" };
  const { word, phonetic, phonetics, meanings } = data;
  const { text, audio } = phonetics.filter(({ audio }) => !!audio)[0] || value;

  const handlePlay = () => {
    audioRef.current?.play();
  };

  return (
    <div className="result">
      <div className="title">
        <div className="word">
          <h1>{word}</h1>

          <p>{phonetic || text}</p>
        </div>

        {audio && <audio ref={audioRef} src={audio} hidden></audio>}

        <button
          title={audio ? "Play" : "Audio not found"}
          className="audio"
          onClick={handlePlay}
          disabled={!audio}
        >
          <FaPlay />
        </button>
      </div>

      <PartOfTheSpeech data={meanings} />
    </div>
  );
}
