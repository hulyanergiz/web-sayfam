import { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const themeInitial = window.matchMedia("(prefers-color-scheme:dark)").matches
    ? "dark"
    : "light";
  const [theme, setTheme] = useLocalStorage(
    "theme",
    themeInitial ? themeInitial : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);
  const toggleMode = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
