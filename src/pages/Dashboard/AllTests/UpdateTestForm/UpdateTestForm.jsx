import { useForm } from "react-hook-form";
const UpdateTestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
              {...register("date")}
              id="date"
              className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="startTime" className="text-sm">
                Start Time
              </label>
            </div>
            <input
              type="time"
              name="startTime"
              {...register("startTime")}
              id="startTime"
              className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="endTime" className="text-sm">
                End Time
              </label>
            </div>
            <input
              type="time"
              name="endTime"
              {...register("endTime")}
              id="endTime"
              className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
            />
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
              // disabled={loading}
              className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white hover:bg-primary-opacity transition duration-300 flex items-center justify-center"
            >
              {/* {loading ? <AnimatedSpin /> : "Login"} */}
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateTestForm;
