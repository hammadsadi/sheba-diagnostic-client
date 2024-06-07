import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";
import useAuth from "./useAuth";

const useGetCurrentUser = () => {
  const { user, loading } = useAuth();
  const axiosCommon = useAxiosCommon();
  const {
    data: activeUser = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["activeUser"],
    enabled: !loading || !!user?.email,
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/user/active/${user?.email}`);
      return data;
    },
  });
  return [activeUser, isLoading, refetch];
};

export default useGetCurrentUser;
