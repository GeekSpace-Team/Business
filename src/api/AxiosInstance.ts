import axios from "axios";

export const fetchTitleTexts = async () => {
  try {
    const response = await axios.get(
      "http://216.250.13.150:6856/api/title-texts"
    );
    return response.data.data; // Assuming your data is nested under 'data' key
  } catch (error) {
    throw new Error("Failed to fetch title texts");
  }
};
