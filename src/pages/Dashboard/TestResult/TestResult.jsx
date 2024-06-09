import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const TestResult = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: testsResults, refetch } = useQuery({
    queryKey: ["testsResults"],
    enabled: !loading,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/booking/upcomin/${user?.email}`);
      return data;
    },
  });
  return (
    <div>
      <div className="mt-3 md:mt-6">
        <SectionTitle heading="My Upcoming Appointments" />
      </div>
      {/* <div className="overflow-x-auto">
        <table className="table">
         
          <thead>
            <tr>
              <th></th>
              <th>Test Name</th>
              <th>Appointment Date</th>
              <th>Appointment Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>
                <button className="cursor-pointer flex justify-center items-center bg-primary text-white py-1 px-3 rounded-sm">
                  <MdOutlineDownload /> <span>Download Report</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-primary bg-white text-sm text-center">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                #
              </th>

              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
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
            {testsResults?.length > 0 ? (
              <>
                {testsResults
                  .filter((upcoming) => upcoming.report === "Delivered")
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
                        <button className="cursor-pointer flex items-center">
                          {" "}
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

export default TestResult;
