import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
const DownloadUserInfo = ({ userEmail, userId }) => {
  const axiosSecure = useAxiosSecure();
  const doc = new jsPDF();

  const { data: userSingle = {}, isLoading } = useQuery({
    queryKey: ["userSingle"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/current/${userEmail}`);
      return data;
    },
  });

  // Get Bookings
  const { data: specificUserBookings = [] } = useQuery({
    queryKey: ["specificUserBookings"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/booking/upcomin/${userEmail}`);
      return data;
    },
  });

  // handleExportInfo
  const handleExportInfo = () => {
    autoTable(doc, { html: "#my-table" });
    doc.save("user.pdf");
  };
  return (
    <div>
      <div className="text-right text-white rounded-md">
        <button
          className="bg-primary py-1 px-3 mb-2"
          onClick={handleExportInfo}
        >
          Download Now
        </button>
      </div>
      <div className="overflow-x-auto">
        <table
          className="min-w-full divide-y-2 divide-primary bg-white text-sm text-center"
          id="my-table"
        >
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                User Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                District
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Upazila
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Test Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Test Price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Booking Date
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {specificUserBookings.length > 0 ? (
              <>
                {specificUserBookings?.map((book) => (
                  <tr className="odd:bg-gray-50" key={book._id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {userSingle?.name}
                    </td>

                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {userSingle?.district}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {userSingle?.upazila}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {book?.testName}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      $ {book?.testPrice}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {new Date(book?.bookingDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <>
                <tr className="odd:bg-gray-50">
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {userSingle?.name}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {userSingle?.district}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {userSingle?.upazila}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    ---
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    ---
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

export default DownloadUserInfo;
