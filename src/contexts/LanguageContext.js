import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const languages = [
    { name: "Türkçe", value: "tr" },
    { name: "English", value: "en" },
  ];

  const browserLanguage = Intl.DateTimeFormat().resolvedOptions().locale;
  const selectedLanguage = languages.find((lang) =>
    browserLanguage.includes(lang.value)
  );
  const initialLanguage = selectedLanguage ? selectedLanguage.value : "en";

  const [language, setLanguage] = useLocalStorage("language", initialLanguage);

  const languageChanger = () => {
    if (language === "en") {
      setLanguage("tr");
    } else {
      setLanguage("en");
    }
  };
  return (
    <LanguageContext.Provider value={{ language, languageChanger }}>
      {children}
    </LanguageContext.Provider>
  );
}
