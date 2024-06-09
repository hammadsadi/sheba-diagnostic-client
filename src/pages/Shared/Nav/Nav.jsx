import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toastAlert from "../../../utils/toastAlert";

const Nav = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const navItem = (
    <>
      <li>
        <Link to="/" className="text-sm md:text-base font-normal">
          Home
        </Link>
      </li>
      <li>
        <Link to="/all-tests" className="text-sm md:text-base font-normal">
          All Tests
        </Link>
      </li>
    </>
  );

  // handleDashboard
  const handleDashboard = async () => {
    const { data } = await axiosSecure.get(`/user/current/${user?.email}`);
    if (data.status === "block") {
      return toastAlert("You are Blocked User", "error");
    }
    navigate("/dashboard");
  };
  return (
    <div className="navbar bg-secondary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Sheba</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link
            className="bg-primary md:py-2 md:px-6 py-1 px-3 font-semibold text-sm md:text-base rounded-sm"
            onClick={handleDashboard}
          >
            Dashboard
          </Link>
        ) : (
          <Link
            to="/login"
            className="bg-primary md:py-2 md:px-6 py-1 px-3 font-semibold text-sm md:text-base rounded-sm"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
