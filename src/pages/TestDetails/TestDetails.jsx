import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const TestDetails = () => {
  const { id } = useParams();
  const [testDetails, setTestDetails] = useState();
  const axiosSecure = useAxiosSecure();
  // Get All Test
  useEffect(() => {
    const getSingleTest = async () => {
      const { data } = await axiosSecure.get(`/tests/${id}`);
      setTestDetails(data);
    };
    getSingleTest();
  }, [id, axiosSecure]);
  console.log(testDetails);
  return (
    <div className="my-5 md:my-10">
      <div className="container mx-auto px-2 md:px-0">
        <article className="overflow-hidden rounded-lg shadow transition ">
          <img
            alt=""
            src={testDetails?.photo}
            className="md:h-[500px] h-52 w-full object-cover"
          />

          <div className="grid md:grid-cols-6 p-4 md:gap-5 sm:p-6">
            <div className="  md:col-span-4">
              <div className="flex justify-between">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {testDetails?.date}
                </time>
                <p>
                  {" "}
                  <span className="font-bold">$</span> {testDetails?.testPrice}
                </p>
              </div>

              <Link>
                <h3 className="mt-0.5 text-lg text-gray-900 font-semibold">
                  {testDetails?.name}
                </h3>
              </Link>

              <p className="mt-2 line-clamp-3 text-base text-gray-500">
                {testDetails?.details}
              </p>
            </div>
            <div className=" md:col-span-2 p-4 md:p-6  border rounded-md">
              <form className="">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="startTime"
                        className="text-sm font-medium"
                      >
                        Start Time
                      </label>
                    </div>
                    <input
                      type="time"
                      name="startTime"
                      id="startTime"
                      className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label htmlFor="endTime" className="text-sm font-medium">
                        End Time
                      </label>
                    </div>
                    <input
                      type="time"
                      name="endTime"
                      id="endTime"
                      className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2 mt-3">
                  <div>
                    <button
                      type="submit"
                      // disabled={loading}
                      className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white hover:bg-primary-opacity transition duration-300 flex items-center justify-center"
                    >
                      {/* {loading ? <AnimatedSpin /> : "Login"} */}
                      Book
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TestDetails;
