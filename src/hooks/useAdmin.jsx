import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user-admin/${user.email}`);
      return data?.admin;
    },
  });
  return [isAdmin, isLoading];
};

export default useAdmin;
