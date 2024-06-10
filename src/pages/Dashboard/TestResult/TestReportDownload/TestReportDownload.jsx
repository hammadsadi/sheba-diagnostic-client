import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
const TestReportDownload = ({ reportInfo }) => {
  const doc = new jsPDF();
  // handleExportInfo
  const handleExportInfo = () => {
    autoTable(doc, { html: "#my-table" });
    doc.save("report.pdf");
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
                Patient Name
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
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            <tr className="odd:bg-gray-50">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {reportInfo?.patientInfo?.name}
              </td>

              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {reportInfo?.testName}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                ${reportInfo?.testPrice}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {new Date(reportInfo?.bookingDate).toLocaleDateString()}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {reportInfo?.report}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestReportDownload;
