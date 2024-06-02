import { Link, useNavigate } from "react-router-dom";
import AnimatedSpin from "../../../components/AnimatedSpin/AnimatedSpin";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import toastAlert from "../../../utils/toastAlert";
const Login = () => {
  const navigate = useNavigate();
  const { loading, setLoading, signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Handle Login Form
  const onSubmit = (data) => {
    try {
      // Create User
      signIn(data.email, data.password)
        .then(() => {
          toastAlert("Login Successful", "success");
          setLoading(false);
          navigate("/dashboard");
        })
        .catch(() => {
          toastAlert("Invalid Email and Password", "error");
          setLoading(false);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-xl dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign In</h1>
          <p className="text-sm text-gray-600">
            Sign In to access More Service
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
              </div>
              <input
                type="email"
                name="email"
                {...register("email", { required: "Email Field is required" })}
                id="email"
                placeholder=" Your Email"
                className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: "Password Field is required",
                })}
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white hover:bg-primary-opacity transition duration-300 flex items-center justify-center"
              >
                {loading ? <AnimatedSpin /> : "Login"}
              </button>
            </div>
          </div>
        </form>

        <p className="px-6 text-sm text-center dark:text-gray-600">
          Don't have an account?
          <Link to="/sign-up" className="hover:underline text-primary">
            &nbsp; Sign Up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
