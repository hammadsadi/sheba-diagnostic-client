import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useGetAllBookings = () => {
  const axiosCommon = useAxiosCommon();
  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/booking");
      return data;
    },
  });
  return [bookings, isLoading, refetch];
};

export default useGetAllBookings;
