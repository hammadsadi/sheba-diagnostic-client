import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useGetAllUser = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/user");
      return data;
    },
  });
  return [users, isLoading, refetch];
};

export default useGetAllUser;
