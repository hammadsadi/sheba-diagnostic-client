import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Auth/Auth/Register";
import Login from "../pages/Auth/Auth/Login";
import DashboardMain from "../Layouts/DashboardMain";
import PrivateRoute from "./PrivateRoute";
import UpCommingAppointments from "../pages/Dashboard/UpCommingAppointments/UpCommingAppointments";
import TestResult from "../pages/Dashboard/TestResult/TestResult";
import Profile from "../pages/Dashboard/Profile/Profile";
import AllTest from "../pages/AllTest/AllTest/AllTest";
import TestDetails from "../pages/TestDetails/TestDetails";

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
        path: "/all-tests",
        element: <AllTest />,
      },
      {
        path: "/test-details/:id",
        element: <TestDetails />,
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
      {
        path: "test-results",
        element: <TestResult />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

// Export
export default router;
