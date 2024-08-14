import axios from "axios";

export const fetchTexts = async (language: string) => {
  try {
    const response = await axios.get(
      `https://ikmaslahat.com/api/data/api/title-texts?locale=${language}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching texts:", error);
    return {};
  }
};
