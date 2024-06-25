import axios from "axios";

export const fetchTitleTexts = async () => {
  try {
    const response = await axios.get(
      "http://95.85.121.153:1337/api/title-texts"
    );
    return response.data.data;
  } catch (error) {
    throw new Error("Failed to fetch title texts");
  }
};

const API_URL = "http://95.85.121.153:1337";

const api = axios.create({
  baseURL: API_URL,
});

export default api;

// api.ts
export interface DataResponse {
  id: number;
  title_tm: string;
  title_ru: string;
  title_en: string;
  description_tm: string;
  description_ru: string;
  description_en: string;
  short_tm: string;
  short_ru: string;
  short_en: string;
  type: string;
  order: number;
  url: string;
  assetId: number;
  created_at: string;
  updated_at: string;
  asset: {
    id: number;
    url: string;
    type: string;
    blurhash: string;
  };
}

export async function fetchData(): Promise<DataResponse> {
  const response = await fetch("http://95.85.121.153:6856/data");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
