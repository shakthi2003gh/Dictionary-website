import List from "./renderList";
import { MeaningType } from "../state/types";

type PropType = {
  data: MeaningType[];
};

export default function PartOfTheSpeech({ data }: PropType) {
  return (
    <div className="part-of-speech">
      {data.map(({ partOfSpeech, definitions, synonyms, antonyms }, i) => (
        <div key={i}>
          <div className="heading">
            <h2>{partOfSpeech}</h2>
            <div className="line"></div>
          </div>

          {!!synonyms.length && <List heading="synonyms" data={synonyms} />}

          {!!antonyms.length && <List heading="antonyms" data={antonyms} />}

          <List heading="meanings" data={definitions} />
        </div>
      ))}
    </div>
  );
}
