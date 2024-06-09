import useAuth from "../../../hooks/useAuth";
import { FaPen } from "react-icons/fa6";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import MyModal from "../../../components/MyModal/MyModal";
import UpdateProfile from "./UpdateProfile";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { TiWarningOutline } from "react-icons/ti";

const Profile = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  let [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const { data: singleUser = [], refetch } = useQuery({
    queryKey: ["singleUser", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/current/${user?.email}`);
      return data;
    },
  });

  function openUserInfoUpdateModal() {
    setIsProfileModalOpen(true);
  }

  function closeUserInfoUpdateModal() {
    setIsProfileModalOpen(false);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl w-full">
        <img
          alt="profile"
          src="https://i.ibb.co/St29Jjc/pexels-chokniti-khongchum-1197604-2280551.jpg"
          className="w-full mb-4 rounded-t-lg h-36 object-cover"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-primary p-1 mb-1 "
            />
          </a>

          <p className="text-xs text-white bg-primary px-2 rounded-lg capitalize">
            {singleUser?.role}
          </p>
          {user.emailVerified ? (
            <p className="mt-2  font-medium text-gray-800 flex gap-1">
              <span className="text-xl">{user.displayName}</span>{" "}
              <div className="tooltip" data-tip="Verified">
                <BsPatchCheckFill className="text-primary" />
              </div>
            </p>
          ) : (
            <p className="mt-2  font-medium text-gray-800 flex gap-1">
              <span className="text-xl">{user.displayName}</span>{" "}
              <div className="tooltip" data-tip="Unverified">
                <TiWarningOutline className="text-yellow-500" />
              </div>
            </p>
          )}

          <div className="text-center">
            <p className="flex items-center gap-2">
              <FaLocationDot /> <span>Dhaka Bangla desh</span>
            </p>
            <button
              className="flex gap-1 items-center mx-auto bg-primary text-white px-1 md:px-2 rounded-sm cursor-pointer"
              onClick={openUserInfoUpdateModal}
            >
              <span>
                <FaPen className="text-sm/relaxed" />
              </span>
              <span className="text-sm/relaxed">Edit Profile</span>
            </button>
          </div>
        </div>
      </div>
      <MyModal
        isOpen={isProfileModalOpen}
        close={closeUserInfoUpdateModal}
        modalTitle="Update Profile Info"
      >
        <UpdateProfile
          singleUser={singleUser}
          closeUserInfoUpdateModal={closeUserInfoUpdateModal}
          refetch={refetch}
        />
      </MyModal>
    </div>
  );
};

export default Profile;
