import { MdOutlineDownload } from "react-icons/md";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { GoDotFill } from "react-icons/go";
import { MdBlockFlipped } from "react-icons/md";
import MyModal from "../../../../components/MyModal/MyModal";
import { useState } from "react";
import UserDetails from "../UserDetails/UserDetails";

const AllUsers = () => {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

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
              <th>User Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>
                <select
                  name=""
                  id=""
                  className="py-[3px] px-2 focus:outline-none"
                >
                  <option value="">Admin</option>
                  <option value="">Guest</option>
                </select>
              </td>
              <td>
                {/* <button className="flex items-center cursor-pointer">
                  <GoDotFill className="text-primary" /> <span>Active</span>
                </button> */}
                <button className="flex items-center cursor-pointer">
                  <MdBlockFlipped className="text-rose-700" />{" "}
                  <span>Block</span>
                </button>
              </td>
              <td>
                {" "}
                <button
                  className="cursor-pointer flex justify-center text-sm items-center bg-primary text-white py-[1px] px-2 rounded-sm"
                  onClick={open}
                >
                  See Info
                </button>
              </td>
              <td>
                <button className="cursor-pointer flex justify-center text-sm items-center bg-primary text-white py-[1px] px-2 rounded-sm">
                  <MdOutlineDownload /> <span>Download Info</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {/* My Modal */}
        <MyModal isOpen={isOpen} close={close}>
          <UserDetails />
        </MyModal>
      </div>
    </div>
  );
};

export default AllUsers;
