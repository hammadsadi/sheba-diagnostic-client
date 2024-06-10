import { useForm } from "react-hook-form";
import uploadPhotoToCloud from "../../../../utils/uploadImageToCLoud";
import toastAlert from "../../../../utils/toastAlert";
import AnimatedSpin from "../../../../components/AnimatedSpin/AnimatedSpin";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
const AddTest = () => {
  const [isFormLoading, setIsFormLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsFormLoading(true);
      const imgLink = await uploadPhotoToCloud(data.photo[0]);
      const testData = {
        name: data.name,
        date: data.date,
        details: data.details,
        photo: imgLink.data.display_url,
        slots: parseInt(data.slots),
        testPrice: parseInt(data.testPrice),
      };
      const result = await axiosSecure.post("/tests", testData);
      if (result.data.insertedId) {
        setIsFormLoading(false);
        toastAlert("Test Created Successful", "success");
        reset();
      }
    } catch (error) {
      toastAlert(error.message, "error");
    }
  };
  return (
    <div className="flex justify-center h-full my-5 items-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-xl dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Create New Test</h1>
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
                {...register("testPrice", {
                  required: "Price Field is required",
                })}
                id="testPrice"
                placeholder="Test Price"
                className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
              />
              {errors.testPrice && (
                <p className="text-red-600">{errors.testPrice.message}</p>
              )}
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
                {...register("date", {
                  required: "Date Field is required",
                })}
                id="date"
                className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
              />
              {errors.date && (
                <p className="text-red-600">{errors.date.message}</p>
              )}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="slots" className="text-sm">
                  Slots
                </label>
              </div>
              <input
                type="number"
                name="slots"
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
                id="details"
                {...register("details", {
                  required: "Details Field is required",
                })}
                placeholder="Details"
                className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
              ></textarea>
              {errors.details && (
                <p className="text-red-600">{errors.details.message}</p>
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
                {...register("photo", {
                  required: "Photo Field is required",
                })}
                id="photo"
                name="photo"
                className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
              />
              {errors.photo && (
                <p className="text-red-600">{errors.photo.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                disabled={isFormLoading}
                className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white hover:bg-primary-opacity transition duration-300 flex items-center justify-center"
              >
                {isFormLoading ? <AnimatedSpin /> : "Add"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTest;
