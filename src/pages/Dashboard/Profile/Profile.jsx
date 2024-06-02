import useAuth from "../../../hooks/useAuth";
import { MdEditDocument } from "react-icons/md";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Profile = () => {
  const { user } = useAuth();

  console.log(user);
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

          <p className="text-xs text-white bg-primary px-2 rounded-lg">Admin</p>
          <p className="mt-2  font-medium text-gray-800 flex gap-1">
            <span className="text-xl">{user.displayName}</span>{" "}
            <div className="tooltip" data-tip="Verified">
              <BsPatchCheckFill className="text-primary" />
            </div>
          </p>
          <div>
            <p className="flex items-center gap-2">
              <FaLocationDot /> <span>Dhaka Bangla desh</span>
            </p>
          </div>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div>
              <Tabs>
                <TabList>
                  <Tab>About</Tab>
                  <Tab>Appointment</Tab>
                </TabList>

                <TabPanel>
                  <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
