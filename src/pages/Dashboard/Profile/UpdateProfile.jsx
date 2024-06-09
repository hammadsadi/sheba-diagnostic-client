import { useState } from "react";
import PropTypes from "prop-types";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toastAlert from "../../../utils/toastAlert";
import { useForm } from "react-hook-form";
import uploadPhotoToCloud from "../../../utils/uploadImageToCLoud";
import useAuth from "../../../hooks/useAuth";
import AnimatedSpin from "../../../components/AnimatedSpin/AnimatedSpin";

const UpdateProfile = ({ singleUser, closeUserInfoUpdateModal, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { updateUserProfile } = useAuth();
  const [isFormLoading, setIsFormLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let photoLink = singleUser.photo;
    try {
      setIsFormLoading(true);
      if (data.photo[0]) {
        const imgLink = await uploadPhotoToCloud(data.photo[0]);
        photoLink = imgLink.data.display_url;
      }

      const testData = {
        name: data.name,
        photo: photoLink,
      };

      updateUserProfile(data.name, photoLink)
        .then(async () => {
          const result = await axiosSecure.put(
            `/user/update/${singleUser._id}`,
            testData
          );
          console.log(result.data);
          if (result.data.modifiedCount > 0) {
            toastAlert("User Info Updated Successful", "success");
            setIsFormLoading(false);
            refetch();
          }
        })
        .catch((err) => {
          toastAlert(err.message, "error");
        });
    } catch (error) {
      toastAlert(error.message, "error");
      setIsFormLoading(false);
    }
  };

  return (
    <div>
      <div>
        {" "}
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
                defaultValue={singleUser?.name}
                {...register("name", { required: "Name Field is required" })}
                id="name"
                placeholder="  Name"
                className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
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
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                disabled={isFormLoading}
                onClick={closeUserInfoUpdateModal}
                className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white hover:bg-primary-opacity transition duration-300 flex items-center justify-center"
              >
                {isFormLoading ? <AnimatedSpin /> : "Update"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
UpdateProfile.propTypes = {
  singleUser: PropTypes.object,
  closeUserInfoUpdateModal: PropTypes.func,
  refetch: PropTypes.func,
};
export default UpdateProfile;
