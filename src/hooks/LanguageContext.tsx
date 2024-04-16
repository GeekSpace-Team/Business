import React, { ReactNode, createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

interface TextData {
  id: number;
  attributes: {
    title: string;
    description: string | null;
    short_description: string;
    type: string;
  };
}

interface LanguageContextType {
  locale: string;
  changeLanguage: (lng: string) => void;
  translatedTexts: { [key: string]: TextData };
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState<string>(i18n.language);
  const [translatedTexts, setTranslatedTexts] = useState<{
    [key: string]: TextData;
  }>({});

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLocale(lng);
    sendLocaleToBackend(lng);
  };

  const sendLocaleToBackend = async (locale: string) => {
    try {
      await axios.post("http://95.85.121.153:1337/api/title-texts", { locale });
      console.log("Locale sent to backend:", locale);

      const response = await axios.get(
        `http://95.85.121.153:1337/api/title-texts`
      );
      const data: TextData[] = response.data.data;

      const translatedTextsObject: { [key: string]: TextData } = {};
      data.forEach((item: TextData) => {
        translatedTextsObject[item.attributes.type] = item;
      });

      setTranslatedTexts(translatedTextsObject);
    } catch (error) {
      console.error("Error sending locale to backend:", error);
    }
  };

  return (
    <LanguageContext.Provider
      value={{ locale, changeLanguage, translatedTexts }}
    >
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
