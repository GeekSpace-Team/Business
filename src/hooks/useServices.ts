import { useQuery, UseQueryResult } from "react-query";
import api from "../api/api";
import { useTranslation } from "react-i18next";

interface Service {
  id: number;
  title: string;
  short_description: string;
  description: string | null;
  icon: {
    url: string;
  };
}

const useServices = (): UseQueryResult<Service[], Error> => {
  const { i18n } = useTranslation(); // Move inside the custom hook
  const fetchServices = async (): Promise<Service[]> => {
    const response = await api.get(
      `/api/our-services?populate=icon&locale=${i18n.language}`
    );
    const data: Service[] = response.data;
    return data;
  };

  return useQuery("services", fetchServices);
};

export default useServices;
