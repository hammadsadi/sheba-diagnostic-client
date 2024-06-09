import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";

const useGetAllBookings = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/booking?email='sadi'");
      return data;
    },
  });
  return [bookings, isLoading, refetch];
};

export default useGetAllBookings;
