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
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers/AllUsers";
import AddTest from "../pages/Dashboard/AddTest/AddTest.jsx/AddTest";
import AllTests from "../pages/Dashboard/AllTests/AllTests/AllTests";
import AddBanner from "../pages/Dashboard/AddBanner/AddBanner";
import AllBanners from "../pages/Dashboard/AllBanners/AllBanners";
import TestDetails from "../pages/TestDetails/TestDetails/TestDetails";

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
      // Admin Routes
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "add-test",
        element: <AddTest />,
      },
      {
        path: "all-tests",
        element: <AllTests />,
      },
      {
        path: "add-banner",
        element: <AddBanner />,
      },
      {
        path: "all-banners",
        element: <AllBanners />,
      },
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
