import { useQuery } from "react-query";
import { fetchTitleTexts } from "./api";

export const useTitleTexts = () => {
  return useQuery("titleTexts", fetchTitleTexts);
};
