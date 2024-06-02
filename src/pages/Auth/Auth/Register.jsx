import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import uploadPhotoToCloud from "../../../utils/uploadImageToCLoud";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import useAuth from "../../../hooks/useAuth";
import toastAlert from "../../../utils/toastAlert";
import AnimatedSpin from "../../../components/AnimatedSpin/AnimatedSpin";
const Register = () => {
  const axiosCommon = useAxiosCommon();
  const navigate = useNavigate();
  const { createUser, loading, setLoading, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [districtList, setDistrictsList] = useState([]);
  const [upozilaList, setUpozilaList] = useState([]);
  // Get District
  useEffect(() => {
    fetch("districts.json")
      .then((res) => res.json())
      .then((data) => setDistrictsList(data));
  }, []);
  // Get Upozila
  useEffect(() => {
    fetch("upozila.json")
      .then((res) => res.json())
      .then((data) => setUpozilaList(data));
  }, []);

  // Handle Register Form
  const onSubmit = async (data) => {
    try {
      // Validation
      if (data.password !== data.confirmPassword)
        return toastAlert("Confirm Password Not Match", "error");
      setLoading(true);
      const imgLink = await uploadPhotoToCloud(data.photo[0]);
      const userData = {
        name: data?.name,
        email: data?.email,
        photo: imgLink.data.display_url,
        blood: data?.blood,
        district: data?.district,
        upazila: data?.upazila,
        status: "active",
      };
      // Create User
      createUser(data.email, data.password)
        .then(async (res) => {
          const response = await axiosCommon.post("/user", userData);
          if (response.data.insertedId) {
            await updateUserProfile(data?.name, imgLink.data.display_url);
            toastAlert("User Created Successful", "success");
            setLoading(false);
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          toastAlert(err.message, "error");
          setLoading(false);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex justify-center h-full items-center my-5">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-xl dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Create Account</h1>
          <p className="text-sm text-gray-600">
            Sign Up to access More Service
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
              </div>
              <input
                type="text"
                name="name"
                id="name"
                {...register("name", { required: "Name Field is required" })}
                placeholder=" Your Name"
                className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>
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
                <label htmlFor="photo" className="text-sm">
                  Photo
                </label>
              </div>
              <input
                type="file"
                {...register("photo")}
                id="photo"
                name="photo"
                className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="Blood" className="text-sm">
                  Blood Group
                </label>
              </div>
              <select
                name="blood"
                {...register("blood", {
                  required: "Blood Field is required",
                })}
                id=""
                className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
              >
                <option value="a+">A+</option>
                <option value="a-">A-</option>
                <option value="b+">B+</option>
                <option value="b-">B-</option>
                <option value="ab+">AB+</option>
                <option value="ab-">AB-</option>
                <option value="o+">O+</option>
                <option value="o-">O-</option>
              </select>
              {errors.blood && (
                <p className="text-red-600">{errors.blood.message}</p>
              )}
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="district" className="text-sm">
                  District
                </label>
              </div>
              <select
                name="district"
                {...register("district", {
                  required: "District Field is required",
                })}
                id="district"
                className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
              >
                {districtList?.map((dis) => (
                  <option value={dis?.name} key={dis.id}>
                    {dis?.name}
                  </option>
                ))}
              </select>
              {errors.district && (
                <p className="text-red-600">{errors.district.message}</p>
              )}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="upazila" className="text-sm">
                  Upazila
                </label>
              </div>
              <select
                name="upazila"
                {...register("upazila", {
                  required: "Upazila Field is required",
                })}
                id="upazila"
                className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
              >
                {upozilaList?.map((dis) => (
                  <option value={dis?.name} key={dis.id}>
                    {dis?.name}
                  </option>
                ))}
              </select>
              {errors.upazila && (
                <p className="text-red-600">{errors.upazila.message}</p>
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

            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="confirmPassword" className="text-sm">
                  Confirm Password
                </label>
              </div>
              <input
                type="password"
                name="confirmPassword"
                {...register("confirmPassword", {
                  required: "Confirm Password Field is required",
                })}
                id="confirmPassword"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
              />
              {errors.confirmPassword && (
                <p className="text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white hover:bg-primary-opacity transition duration-300 flex items-center justify-center"
              >
                {loading ? <AnimatedSpin /> : "Sign Up"}
              </button>
            </div>
          </div>
        </form>

        <p className="px-6 text-sm text-center dark:text-gray-600">
          Already have an account?
          <Link to="/login" className="hover:underline text-primary">
            &nbsp; Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
