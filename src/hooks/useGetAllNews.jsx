import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useGetAllNews = () => {
  const axiosCommon = useAxiosCommon();
  const {
    data: news = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tests"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/news");
      return data;
    },
  });
  return [news, isLoading, refetch];
};

export default useGetAllNews;
