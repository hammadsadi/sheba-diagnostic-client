import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdCancel } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import toastAlert from "../../../utils/toastAlert";
import Loader from "../../../components/Loader/Loader";

const UpCommingAppointments = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const {
    data: upcomingBookings,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["upcomingBookings"],
    enabled: !loading,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/booking/upcomin/${user?.email}`);
      return data;
    },
  });

  // Handle delete Booking
  const handleDeleteBooking = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/booking/delete/${id}`);

      if (data.deletedCount > 0) {
        toastAlert("Deleted Successful", "success");
        refetch();
      }
    } catch (error) {
      toastAlert(error.message, "error");
    }
  };
  if (isLoading) return <Loader />;
  return (
    <div>
      <div className="mt-3 md:mt-6">
        <SectionTitle heading="My Upcoming Appointments" />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-primary bg-white text-sm text-center">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                #
              </th>

              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Test Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Test Price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Date
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Time
              </th>

              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {upcomingBookings?.length > 0 ? (
              <>
                {upcomingBookings
                  .filter((upcoming) => upcoming.report === "Pending")
                  .map((booking, idx) => (
                    <tr className="odd:bg-gray-50" key={booking._id}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {idx + 1}
                      </td>

                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {booking.testName}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        ${booking.testPrice}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {new Date(booking?.bookingDate).toDateString()}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {new Date(booking?.bookingDate).toLocaleTimeString()}
                      </td>

                      <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex items-center gap-1 justify-center">
                        <button
                          className="cursor-pointer flex items-center"
                          onClick={() => handleDeleteBooking(booking._id)}
                        >
                          {" "}
                          <MdCancel className="text-red-600 text-lg " />{" "}
                          <span>Cancel</span>
                        </button>
                      </td>
                    </tr>
                  ))}
              </>
            ) : (
              <>
                <tr>
                  <td colSpan="6" className="py-3">
                    No Data Found
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpCommingAppointments;
