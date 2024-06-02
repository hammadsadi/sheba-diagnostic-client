import Loader from "../components/Loader/Loader";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loader />;

  if (user) return children;

  return <Navigate state={location.pathname} replace={true} to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
