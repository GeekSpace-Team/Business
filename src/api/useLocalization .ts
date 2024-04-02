import { useState } from "react";
import axios from "axios";

interface LocaleData {
  id: number;
  attributes: {
    title: string;
    description: string;
    short_description: string;
    is_active: boolean;
    type: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
}

const useLocalization = () => {
  const [locale, setLocale] = useState("en");

  const fetchData = async (endpoint: string): Promise<LocaleData[]> => {
    const response = await axios.get<LocaleData[]>(
      `${endpoint}?locale=${locale}`
    );
    return response.data;
  };

  const changeLanguage = (lng: string) => {
    setLocale(lng);
  };

  return { locale, fetchData, changeLanguage };
};

export default useLocalization;
