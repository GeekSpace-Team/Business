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
