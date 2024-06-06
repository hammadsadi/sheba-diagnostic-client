import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader/Loader";
import toastAlert from "../../../utils/toastAlert";
import useAuth from "../../../hooks/useAuth";
import MyModal from "../../../components/MyModal/MyModal";
import { useState } from "react";
import PromoCode from "../PromoCode/PromoCode";
const TestDetails = () => {
  let [isTestModalOpen, setIsTestModalOpen] = useState(false);
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: testDetails = {}, isLoading } = useQuery({
    queryKey: ["singleTest"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/tests/${id}`);
      return data;
    },
  });
  function openTestModal() {
    setIsTestModalOpen(true);
  }

  function closeTestModal() {
    setIsTestModalOpen(false);
  }

  // Handle Test Book
  const handleBookTest = () => {
    if (!testDetails.slots > 0) {
      return toastAlert("Sorry...! Slot is Not Available", "error");
    }
    openTestModal();
    const bookingInfo = {
      testId: testDetails?._id,
      testName: testDetails?.name,
      photo: testDetails?.photo,
      price: testDetails?.testPrice,
      userSlotNumber: testDetails?.slots,
      status: "Pending",
      patientInfo: {
        patientEmail: user?.email,
        patientName: user?.displayName,
        photo: user?.photoURL,
        date: new Date(),
      },
    };
  };

  if (isLoading) return <Loader />;

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
                {/* <p>
                  {" "}
                  <span className="font-bold">$</span> {testDetails?.testPrice}
                </p> */}
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
              <div className="flex items-center justify-between">
                <p>
                  {" "}
                  <span className="font-bold">$</span> {testDetails?.testPrice}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Available Slots</span>{" "}
                  {testDetails?.slots}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2"></div>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
                    readOnly
                  />
                </div>
              </div>
              <div className="space-y-2 mt-3">
                <div>
                  <button
                    type="submit"
                    // disabled={loading}
                    className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white hover:bg-primary-opacity transition duration-300 flex items-center justify-center"
                    onClick={handleBookTest}
                  >
                    {/* {loading ? <AnimatedSpin /> : "Login"} */}
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      {/* Popup Modal */}
      <MyModal
        isOpen={isTestModalOpen}
        close={closeTestModal}
        modalTitle="Please Pay First For Booking"
      >
        <PromoCode testDetails={testDetails} />
      </MyModal>
    </div>
  );
};

export default TestDetails;
