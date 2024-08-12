import axios from "axios";

export const fetchTexts = async (language: string) => {
  try {
    const response = await axios.get(
      `http://216.250.13.150:1337/api/title-texts?locale=${language}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching texts:", error);
    return {};
  }
};
