import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";

type StateT = {
  font: string;
  fonts: string[];
  theme: string;
  search: string;
  data: {} | null;
  toggleTheme: () => void;
  setFont: (font: string) => void;
  setSearch: (search: string) => void;
  setData: (data: any) => void;
};

type PropT = {
  children: ReactNode;
};

const StateContext = createContext<StateT | {}>({});

export function useTheme() {
  const { theme, toggleTheme } = useContext(StateContext) as StateT;

  return { theme, toggleTheme };
}

export function useFont() {
  const { font, fonts, setFont } = useContext(StateContext) as StateT;

  return { font, fonts, setFont };
}

export default function StateProvider({ children }: PropT): any {
  const fonts = ["Roboto", "Poppins", "Noto Sans"];
  const [font, dispatchFont] = useState(fonts[0]);
  const [theme, setTheme] = useState("light");
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);

  const toggleTheme = () => {
    setTheme((prev) => {
      const theme = prev === "light" ? "dark" : "light";

      document.body.setAttribute("theme", theme);
      return theme;
    });
  };

  const setFont = (font: string) => {
    if (!fonts.includes(font)) throw Error("Not supported font");

    document.body.setAttribute("font", font);
    dispatchFont(font);
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
    toggleTheme,
    setFont,
    setSearch,
    setData,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}
