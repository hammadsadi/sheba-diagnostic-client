import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetAllDelivered = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: delivered = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["delivered"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/bookings/delivered");
      return data;
    },
  });
  return [delivered, isLoading, refetch];
};

export default useGetAllDelivered;
