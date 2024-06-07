import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";
const useGetAllUser = () => {
  const axiosCommon = useAxiosCommon();
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/user");
      return data;
    },
  });
  return [users, isLoading, refetch];
};

export default useGetAllUser;
