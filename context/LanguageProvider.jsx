"use client";
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext("uz");

export const useLanguage = () => useContext(LanguageContext);

const LanguageProvider = ({ children }) => {
  const isWindowExist = typeof window !== "undefined";
  const storage = isWindowExist && localStorage.getItem("lang");
  const [lang, setLang] = useState(storage);

  const handleChangeLang = () => {
    if (lang === "uz") {
      localStorage.setItem("lang", "uz");
      document.documentElement.lang = "uz";
    } else {
      localStorage.setItem("lang", "ru");
      document.documentElement.lang = "ru";
    }
  };
  useEffect(() => {
    handleChangeLang();
  }, [lang]);
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
