import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";
const useGetAllTests = () => {
  const axiosCommon = useAxiosCommon();
  const {
    data: tests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tests"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/tests");
      return data;
    },
  });
  return [tests, isLoading, refetch];
};

export default useGetAllTests;
