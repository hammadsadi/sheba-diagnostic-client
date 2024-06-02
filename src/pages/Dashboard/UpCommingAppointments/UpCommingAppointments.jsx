import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdCancel } from "react-icons/md";

const UpCommingAppointments = () => {
  return (
    <div>
      <div className="mt-3 md:mt-6">
        <SectionTitle heading="My Upcoming Appointments" />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
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
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>
                <button className="cursor-pointer">
                  {" "}
                  <MdCancel className="text-red-600 text-lg " />{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpCommingAppointments;
