import { createContext, useContext, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { DataType, ErrorType, PropType, StateType } from "./types";

const ENDPOINT = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const THEME = localStorage.getItem("theme");

const StateContext = createContext<StateType | {}>({});

export function useTheme() {
  const { theme, toggleTheme } = useContext(StateContext) as StateType;

  return { theme, toggleTheme };
}

export function useFont() {
  const { font, fonts, setFont } = useContext(StateContext) as StateType;

  return { font, fonts, setFont };
}

export function useSearch() {
  const context = useContext(StateContext) as StateType;
  const { data, search, setSearch, handleSearch } = context;
  const { error } = context;

  return { data, search, setSearch, handleSearch, error };
}

export function useLoading() {
  const { isLoading } = useContext(StateContext) as StateType;

  return isLoading;
}

export default function StateProvider({ children }: PropType): any {
  const fonts = ["Roboto", "Poppins", "Noto Sans"];
  const [font, dispatchFont] = useState(fonts[0]);
  const [theme, setTheme] = useState(THEME || "light");
  const [search, setSearch] = useState("");
  const [data, setData] = useState<DataType | null>(null);
  const [error, setError] = useState<ErrorType>(null);
  const [isLoading, setLoading] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => {
      const theme = prev === "light" ? "dark" : "light";

      localStorage.setItem("theme", theme);
      document.body.setAttribute("theme", theme);
      return theme;
    });
  };

  const setFont = (font: string) => {
    if (!fonts.includes(font)) throw Error("Not supported font");

    document.body.setAttribute("font", font);
    dispatchFont(font);
  };

  const handleSearch = (value: string = search) => {
    if (value === data?.word) return;
    if (!value.trim().length) return;

    if (value !== search) setSearch(value);

    setLoading(true);
    setData(null);
    setError(null);

    axios
      .get(ENDPOINT + value)
      .then(({ data }) => setData(data[0]))
      .catch(handleError)
      .finally(() => setLoading(false));
  };

  const handleError = (error: AxiosError) => {
    let payload = undefined;
    const { code, response } = error;

    if (code == "ERR_NETWORK") payload = { status: 504, searchedWord: search };
    if (response) payload = { status: response.status, searchedWord: search };

    setError(payload);
  };

  useEffect(() => {
    document.body.setAttribute("font", fonts[0]);
    document.body.setAttribute("theme", theme);
  }, []);

  const value = {
    font,
    fonts,
    theme,
    search,
    data,
    error,
    isLoading,
    toggleTheme,
    setFont,
    setSearch,
    handleSearch,
    setData,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}
