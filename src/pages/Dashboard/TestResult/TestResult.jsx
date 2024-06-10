import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader/Loader";
import { MdOutlineDownload } from "react-icons/md";
import UserInfoModal from "../../../components/UserInfoModal/UserInfoModal";
import { useState } from "react";
import TestReportDownload from "./TestReportDownload/TestReportDownload";

const TestResult = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  let [isOpenUserReportInfoModal, setIsOpenUserReportInfoModal] =
    useState(false);
  const [reportInfo, setReportInfo] = useState({});
  const { data: testsResults, isLoading } = useQuery({
    queryKey: ["testsResults"],
    enabled: !loading,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/booking/upcomin/${user?.email}`);
      return data;
    },
  });

  // Download User Info Modal
  function openUserReportInfoModal() {
    setIsOpenUserReportInfoModal(true);
  }

  function closeUserReportInfoModal() {
    setIsOpenUserReportInfoModal(false);
  }

  // handleDownloadReportPdf
  const handleDownloadReportPdf = (booking) => {
    setReportInfo(booking);
    openUserReportInfoModal();
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
                        <button
                          className="cursor-pointer flex justify-center text-sm items-center bg-primary text-white py-[1px] px-2 rounded-sm"
                          onClick={() => handleDownloadReportPdf(booking)}
                        >
                          <MdOutlineDownload /> <span>Download Info</span>
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
      {/* My Modal For User Info Download */}

      <UserInfoModal
        isOpen={isOpenUserReportInfoModal}
        close={closeUserReportInfoModal}
        modalTitle="Download Test Result"
      >
        <TestReportDownload reportInfo={reportInfo} />
      </UserInfoModal>
    </div>
  );
};

export default TestResult;
