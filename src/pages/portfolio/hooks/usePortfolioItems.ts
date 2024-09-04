import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const usePortfolioItems = () => {
  const { data, error } = useSWR("https://ikmaslahat.com/api/data", fetcher);

  return {
    portfolioItems: data,
    isLoading: !error && !data,
    isError: error,
  };
};
