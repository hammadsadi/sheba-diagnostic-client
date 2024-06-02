import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Auth/Auth/Register";
import Login from "../pages/Auth/Auth/Login";
import DashboardMain from "../Layouts/DashboardMain";
import PrivateRoute from "./PrivateRoute";
import UpCommingAppointments from "../pages/Dashboard/UpCommingAppointments/UpCommingAppointments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  // Dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardMain />
      </PrivateRoute>
    ),
    children: [
      {
        path: "upcoming-appointments",
        element: <UpCommingAppointments />,
      },
    ],
  },
]);

// Export
export default router;
