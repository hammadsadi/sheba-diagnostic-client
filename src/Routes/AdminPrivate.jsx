import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import PropTypes from "prop-types";
import Loader from "../components/Loader/Loader";
import useAuth from "../hooks/useAuth";
const AdminPrivate = ({ children }) => {
  const [isAdmin, isLoading] = useAdmin();
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading || isLoading) {
    return <Loader />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location.pathname }} replace />;
};
AdminPrivate.propTypes = {
  children: PropTypes.node,
};
export default AdminPrivate;
