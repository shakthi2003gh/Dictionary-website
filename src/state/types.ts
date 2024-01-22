import { ReactNode } from "react";

export type definitionType = {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
};

export type MeaningType = {
  synonyms: string[];
  antonyms: string[];
  partOfSpeech: string;
  definitions: definitionType[];
};

export type DataType = {
  word: string;
  phonetic: string;
  phonetics: [
    {
      text: string;
      audio?: string;
    }
  ];
  origin: string;
  meanings: MeaningType[];
};

export type ErrorType =
  | {
      status: number;
      searchedWord: string;
    }
  | null
  | undefined;

export type StateType = {
  font: string;
  fonts: string[];
  theme: string;
  search: string;
  data: DataType | null;
  error: ErrorType;
  isLoading: boolean;
  setData: (data: any) => void;
  setFont: (font: string) => void;
  toggleTheme: () => void;
  setSearch: (search: string) => void;
  handleSearch: (value?: string) => void;
};

export type PropType = {
  children: ReactNode;
};
