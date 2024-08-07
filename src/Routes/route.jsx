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
import Statistics from "../pages/Dashboard/Statistics/Statistics/Statistics";
import Payment from "../pages/Payment/Payment/Payment";
import AdminPrivate from "./AdminPrivate";
import Reservation from "../pages/Dashboard/Reservation/Reservation/Reservation/Reservation";
import BlockRoute from "./BlockRoute";
import ContactUs from "../pages/ContactUs/ContactUs/ContactUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs/AboutUs";
import NewsAndEvents from "../pages/NewsAndEvents/NewsAndEvents/NewsAndEvents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/news-events",
        element: <NewsAndEvents />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-tests",
        element: <AllTest />,
      },
      {
        path: "/test-details/:id",
        element: (
          <PrivateRoute>
            <TestDetails />
          </PrivateRoute>
        ),
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
      <BlockRoute>
        <DashboardMain />
      </BlockRoute>
    ),
    children: [
      // Admin Routes
      {
        index: true,
        element: (
          <AdminPrivate>
            <Statistics />
          </AdminPrivate>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminPrivate>
            <AllUsers />
          </AdminPrivate>
        ),
      },
      {
        path: "add-test",
        element: (
          <AdminPrivate>
            <AddTest />
          </AdminPrivate>
        ),
      },
      {
        path: "reservation",
        element: (
          <AdminPrivate>
            <Reservation />
          </AdminPrivate>
        ),
      },
      {
        path: "all-tests",
        element: (
          <AdminPrivate>
            <AllTests />
          </AdminPrivate>
        ),
      },
      {
        path: "add-banner",
        element: (
          <AdminPrivate>
            <AddBanner />
          </AdminPrivate>
        ),
      },
      {
        path: "all-banners",
        element: (
          <AdminPrivate>
            <AllBanners />
          </AdminPrivate>
        ),
      },
      {
        path: "upcoming-appointments",
        element: (
          <PrivateRoute>
            <UpCommingAppointments />
          </PrivateRoute>
        ),
      },
      {
        path: "test-results",
        element: (
          <PrivateRoute>
            <TestResult />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

// Export
export default router;
