import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
const useAxiosSecure = () => {
  const { logOut, setLoading } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    (config) => {
      // Edit request config
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        console.log(error);
        await logOut();
        navigate("/login");
        setLoading(false);
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
