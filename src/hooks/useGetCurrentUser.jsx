import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useGetCurrentUser = () => {
  const { user, loading } = useAuth();
  const axiosCommon = useAxiosCommon();
  const axiosSecure = useAxiosSecure();
  const {
    data: activeUser = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["activeUser", user?.email],
    enabled: !loading || !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/current/${user?.email}`);
      return data;
    },
  });
  return [activeUser, isLoading, refetch];
};

export default useGetCurrentUser;
