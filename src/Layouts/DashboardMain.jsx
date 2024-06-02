import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";

const DashboardMain = () => {
  return (
    <div className="md:flex relative min-h-screen font-dosis">
      <div>
        <Sidebar />
      </div>
      <div className="flex-grow md:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
