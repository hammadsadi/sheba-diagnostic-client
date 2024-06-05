import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";
const useGetAllBanners = () => {
  const axiosCommon = useAxiosCommon();
  const {
    data: banners = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/banner");
      return data;
    },
  });
  return [banners, isLoading, refetch];
};

export default useGetAllBanners;
