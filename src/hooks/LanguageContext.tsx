import React, { ReactNode, createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

interface LanguageContextType {
  locale: string;
  changeLanguage: (lng: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState<string>(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLocale(lng);
    sendLocaleToBackend(lng);
  };

  const sendLocaleToBackend = async (locale: string) => {
    try {
      await axios.post("/api/change-locale", { locale });
      console.log("Locale sent to backend:", locale);
    } catch (error) {
      console.error("Error sending locale to backend:", error);
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
