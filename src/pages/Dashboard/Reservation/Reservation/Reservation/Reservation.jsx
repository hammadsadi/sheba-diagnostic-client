import SectionTitle from "../../../../../components/SectionTitle/SectionTitle";
import { FaTrash } from "react-icons/fa";
import useGetAllBookings from "../../../../../hooks/useGetAllBookings";
import Loader from "../../../../../components/Loader/Loader";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import toastAlert from "../../../../../utils/toastAlert";
const Reservation = () => {
  const [bookings, isLoading, refetch] = useGetAllBookings();
  const axiosSecure = useAxiosSecure();

  // handleChangeReport
  const handleChangeReport = async (e, id) => {
    try {
      const { data } = await axiosSecure.patch(`/booking/status/${id}`, {
        status: e.target.value,
      });
      if (data.modifiedCount > 0) {
        toastAlert(`Report ${e.target.value} Successful`, "success");
      }
    } catch (error) {
      toastAlert(error.message, "error");
    }
  };

  // handleDeleteReservation
  const handleDeleteReservation = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/booking/delete/${id}`);
      if (data.deletedCount > 0) {
        refetch();
        toastAlert(`Reservation Deleted Successful`, "success");
      }
    } catch (error) {
      toastAlert(error.message, "error");
    }
  };

  if (isLoading) return <Loader />;
  return (
    <div>
      <div className="mt-3 md:mt-6">
        <SectionTitle heading="All Reservation" />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-primary bg-white text-sm text-center">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Serial
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Patient Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Test Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Test Price
              </th>

              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Test Report
              </th>

              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {bookings?.length > 0 ? (
              <>
                {bookings?.map((book) => (
                  <tr className="odd:bg-gray-50" key={book._id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {book?.slots}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {book?.patientInfo?.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {book?.testName}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {book?.testPrice}
                    </td>

                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <select
                        name=""
                        onChange={(e) => handleChangeReport(e, book?._id)}
                        className="py-[3px] px-2 focus:outline-none"
                      >
                        <option
                          value="Pending"
                          selected={book?.report === "Pending" ? true : false}
                        >
                          Pending
                        </option>
                        <option
                          value="Delivered"
                          selected={book?.report === "Delivered" ? true : false}
                        >
                          Delivered
                        </option>
                      </select>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex items-center gap-1 justify-center">
                      <span onClick={() => handleDeleteReservation(book?._id)}>
                        <FaTrash className="text-base cursor-pointer text-rose-700" />
                      </span>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              "Not Found"
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservation;
