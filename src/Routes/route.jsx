import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Auth/Auth/Register";
import Login from "../pages/Auth/Auth/Login";
import DashboardMain from "../Layouts/DashboardMain";
import PrivateRoute from "./PrivateRoute";

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
  },
]);

// Export
export default router;
