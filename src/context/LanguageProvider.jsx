/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// contexts/LanguageContext.jsx
import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Recupera o idioma salvo no localStorage ou usa 'pt' como padrão
    return localStorage.getItem("language") || "pt";
  });

  const updateLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
