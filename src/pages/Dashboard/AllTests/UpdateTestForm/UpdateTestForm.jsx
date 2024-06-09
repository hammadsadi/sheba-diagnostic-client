import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useState } from "react";
import uploadPhotoToCloud from "../../../../utils/uploadImageToCLoud";
import toastAlert from "../../../../utils/toastAlert";
import AnimatedSpin from "../../../../components/AnimatedSpin/AnimatedSpin";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
const UpdateTestForm = ({ singleTest, closeTestModal, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let photoLink = singleTest.photo;
    try {
      setIsFormLoading(true);
      if (data.photo[0]) {
        const imgLink = await uploadPhotoToCloud(data.photo[0]);
        photoLink = imgLink.data.display_url;
      }

      const testData = {
        name: data.name,
        date: data.date,
        details: data.details,
        photo: photoLink,
        slots: parseInt(data.slots),
        testPrice: parseInt(data.testPrice),
      };

      const result = await axiosSecure.put(
        `tests/update/${singleTest._id}`,
        testData
      );
      if (result.data.modifiedCount > 0) {
        setIsFormLoading(false);
        toastAlert("Test Update Successful", "success");
        refetch();
      }
    } catch (error) {
      toastAlert(error.message, "error");
      setIsFormLoading(false);
    }
  };
  return (
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
              defaultValue={singleTest?.name}
              {...register("name", { required: "Name Field is required" })}
              id="name"
              placeholder=" Test Name"
              className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="testPrice" className="text-sm">
                Test Price
              </label>
            </div>
            <input
              type="number"
              name="testPrice"
              defaultValue={singleTest?.testPrice}
              {...register("testPrice")}
              id="testPrice"
              placeholder="Test Price"
              className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="date" className="text-sm">
                Date
              </label>
            </div>
            <input
              type="date"
              name="date"
              defaultValue={singleTest?.date}
              {...register("date")}
              id="date"
              className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
            />
          </div>

          {/* Slots */}
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="slots" className="text-sm">
                Slots
              </label>
            </div>
            <input
              type="number"
              name="slots"
              defaultValue={singleTest?.slots}
              {...register("slots", {
                required: "Slots Field is required",
              })}
              id="slots"
              placeholder="Total Slots"
              className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
            />
            {errors.slots && (
              <p className="text-red-600">{errors.slots.message}</p>
            )}
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="details" className="text-sm">
                Details
              </label>
            </div>
            <textarea
              name="details"
              defaultValue={singleTest?.details}
              id="details"
              {...register("details")}
              placeholder="Details"
              className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
            ></textarea>
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
              onClick={closeTestModal}
              className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white hover:bg-primary-opacity transition duration-300 flex items-center justify-center"
            >
              {isFormLoading ? <AnimatedSpin /> : "Update"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
UpdateTestForm.propTypes = {
  singleTest: PropTypes.object,
  closeTestModal: PropTypes.func,
  refetch: PropTypes.func,
};
export default UpdateTestForm;
