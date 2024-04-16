import axios from "axios";

export const fetchTexts = async (language: string) => {
  try {
    const response = await axios.get(
      `http://95.85.121.153:1337/api/title-texts?locale=${language}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching texts:", error);
    return {};
  }
};
