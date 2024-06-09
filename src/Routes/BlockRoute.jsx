import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useGetCurrentUser from "../hooks/useGetCurrentUser";
import toastAlert from "../utils/toastAlert";
import { useEffect } from "react";
const BlockRoute = ({ children }) => {
  const [activeUser] = useGetCurrentUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (activeUser.status === "block") {
      toastAlert("You Cannot Access Your Dashboard", "error");
      navigate("/");
    }
  }, [activeUser.status, navigate]);

  return children;
};
BlockRoute.propTypes = {
  children: PropTypes.node,
};
export default BlockRoute;
