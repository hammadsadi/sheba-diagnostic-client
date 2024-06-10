import { MdOutlineDownload } from "react-icons/md";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { MdBlockFlipped } from "react-icons/md";
import MyModal from "../../../../components/MyModal/MyModal";
import { useState } from "react";
import UserDetails from "../UserDetails/UserDetails";
import { GoDotFill } from "react-icons/go";
import { jsPDF } from "jspdf";
import useGetAllUser from "../../../../hooks/useGetAllUser";
import useGetAllBookings from "../../../../hooks/useGetAllBookings";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toastAlert from "../../../../utils/toastAlert";
import DownloadUserInfo from "../DownloadUserInfo/DownloadUserInfo";
import UserInfoModal from "../../../../components/UserInfoModal/UserInfoModal";
import Loader from "../../../../components/Loader/Loader";
const AllUsers = () => {
  const [users, isLoading, refetch] = useGetAllUser();
  const [bookings] = useGetAllBookings();
  const axiosSecure = useAxiosSecure();
  const [singleUserInfo, setSingleUserInfo] = useState({});
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenUserInfoModal, setIsOpenUserInfoModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // See User Details
  const handleSeeDetails = (id) => {
    let userInfo = users.find((item) => item._id === id);
    setSingleUserInfo(userInfo);
    open();
  };

  // handleUpdateUserStatus
  const handleUpdateUserStatus = async (id, status) => {
    const { data } = await axiosSecure.patch(`/user/${id}`, { status });
    if (data.modifiedCount > 0) {
      toastAlert(`User ${status} Successful`, "success");
      refetch();
    }
  };

  // handleChangeRole
  const handleChangeRole = async (e, id) => {
    // console.log(e.target.value, id);
    const { data } = await axiosSecure.patch(`/user/role/${id}`, {
      role: e.target.value,
    });
    if (data.modifiedCount > 0) {
      toastAlert(`User ${e.target.value} Updated Successful`, "success");
      refetch();
    }
  };

  // Download User Info Modal
  function openUserInfoModal() {
    setIsOpenUserInfoModal(true);
  }

  function closeUserInfoModal() {
    setIsOpenUserInfoModal(false);
  }

  // Handle Download PDF
  const handleDownloadPdf = (id, email) => {
    setUserId(id);
    setUserEmail(email);
    openUserInfoModal();
  };

  if (isLoading) return <Loader />;
  return (
    <div>
      <div className="mt-3 md:mt-6">
        <SectionTitle heading="All Users List" />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-primary bg-white text-sm text-center">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                #
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                User Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                User Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Role
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Status
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Details
              </th>

              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {users.length > 0 ? (
              <>
                {users.map((user, idx) => (
                  <tr className="odd:bg-gray-50" key={user._id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {idx + 1}
                    </td>

                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      <img
                        src={user.photo}
                        className="w-7 h-7 object-cover rounded-full border border-primary"
                        alt=""
                      />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {user?.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <select
                        name=""
                        id=""
                        disabled={user?.name === "Hammad Sadi" ? true : false}
                        className="py-[3px] px-2 focus:outline-none"
                        onChange={(e) => handleChangeRole(e, user?._id)}
                      >
                        <option
                          value="guest"
                          selected={user?.role === "guest" ? true : false}
                        >
                          Guest
                        </option>
                        <option
                          value="admin"
                          selected={user?.role === "admin" ? true : false}
                        >
                          Admin
                        </option>
                      </select>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {user?.status === "active" ? (
                        <button
                          className="flex items-center cursor-pointer"
                          onClick={() =>
                            handleUpdateUserStatus(user?._id, "block")
                          }
                        >
                          <GoDotFill className="text-primary" />{" "}
                          <span>Active</span>
                        </button>
                      ) : (
                        <button
                          className="flex items-center cursor-pointer"
                          onClick={() =>
                            handleUpdateUserStatus(user?._id, "active")
                          }
                        >
                          <MdBlockFlipped className="text-rose-700" />{" "}
                          <span>Block</span>
                        </button>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <button
                        className="cursor-pointer flex justify-center text-sm items-center bg-primary text-white py-[1px] px-2 rounded-sm"
                        onClick={() => handleSeeDetails(user?._id)}
                      >
                        See Info
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex items-center gap-1 justify-center">
                      <button
                        className="cursor-pointer flex justify-center text-sm items-center bg-primary text-white py-[1px] px-2 rounded-sm"
                        onClick={() =>
                          handleDownloadPdf(user?._id, user?.email)
                        }
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
        {/* My Modal */}
        <MyModal isOpen={isOpen} close={close} modalTitle="User Info">
          <UserDetails singleUserInfo={singleUserInfo} />
        </MyModal>
        {/* My Modal For User Info Download */}

        <UserInfoModal
          isOpen={isOpenUserInfoModal}
          close={closeUserInfoModal}
          modalTitle="Download User Info"
        >
          <DownloadUserInfo userEmail={userEmail} userId={userId} />
        </UserInfoModal>
      </div>
    </div>
  );
};

export default AllUsers;
