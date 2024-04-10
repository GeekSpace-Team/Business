import { useQuery, UseQueryResult } from "react-query";
import api from "../api/api";

interface Service {
  id: number;
  title: string;
  short_description: string;
  description: string | null;
  icon: {
    url: string;
  };
}

const fetchServices = async (): Promise<Service[]> => {
  const response = await api.get("/api/our-services?populate=icon&locale=en");
  const data: Service[] = response.data;
  return data;
};

const useServices = (): UseQueryResult<Service[], Error> => {
  return useQuery("services", fetchServices);
};

export default useServices;
