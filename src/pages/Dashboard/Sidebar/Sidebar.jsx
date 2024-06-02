import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { MdHomeWork } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { FaCalendarPlus } from "react-icons/fa6";
import { SiTestcafe } from "react-icons/si";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import MenuItem from "../../../components/MenuItem/MenuItem";
import toastAlert from "../../../utils/toastAlert";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  // Handle User Logout
  const handleUserLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
        toastAlert("Logout Successful", "success");
      })
      .catch((err) => {
        toastAlert(err.message, "error");
      });
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-[#ebfcfd] text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
                // className='hidden md:block'
                src="https://i.ibb.co/4ZXzmq5/logo.png"
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#ebfcfd] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto">
              <Link to="/">Sheba Diagnostic</Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <NavLink
                to="statistics"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-primary  hover:text-white ${
                    isActive ? "bg-primary  text-white" : "text-gray-600"
                  }`
                }
              >
                <BsGraphUp className="w-5 h-5" />

                <span className="mx-4 font-medium">Statistics</span>
              </NavLink>
              <MenuItem label="Home" targetLink="/" icon={MdHomeWork} />
              <MenuItem
                label="Upcoming Appointments"
                targetLink="/dashboard/upcoming-appointments"
                icon={FaCalendarPlus}
              />
              <MenuItem
                label="Test Results"
                targetLink="/test-results"
                icon={SiTestcafe}
              />
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}

          <MenuItem
            label="My Profile"
            targetLink="/dashboard/profile"
            icon={FcSettings}
          />
          <button
            onClick={handleUserLogout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-primary   hover:text-white transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
