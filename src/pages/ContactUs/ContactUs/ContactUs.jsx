import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaCalendarPlus } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <section className="mt-10 md:mt-20 text-gray-800">
        <div>
          <SectionTitle heading="Contact Us" />
        </div>
        <div className="container mx-auto px-2 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-8">
            <div className="text-center space-y-1 border p-4 border-t-4 hover:border-primary group transition-all duration-300">
              <div>
                <FaCalendarPlus
                  className=" mx-auto group-hover:text-primary transition-all duration-300"
                  size={50}
                />
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-semibold">Appointment</h3>
                <h2 className="text-base">+ 01 1122 333 333</h2>
                <p className="text-base">appointment@info.com</p>
              </div>
            </div>
            <div className="text-center space-y-1 border p-4 border-t-4 hover:border-primary group transition-all duration-300">
              <div>
                <FiPhoneCall
                  className=" mx-auto group-hover:text-primary transition-all duration-300"
                  size={50}
                />
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-semibold">Call Us</h3>
                <h2 className="text-base">+ 01 1122 666 333</h2>
                <p className="text-base">+ 01 1122 333 333 </p>
              </div>
            </div>

            <div className="text-center space-y-1 border p-4 border-t-4 hover:border-primary group transition-all duration-300">
              <div>
                <FaEnvelopeOpen
                  className=" mx-auto group-hover:text-primary transition-all duration-300"
                  size={50}
                />
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-semibold">Email Us</h3>
                <h2 className="text-base">sheba@info.com</h2>
                <p className="text-base">sheba@official.com</p>
              </div>
            </div>
            <div className="text-center space-y-1 border p-4 border-t-4 hover:border-primary group transition-all duration-300">
              <div>
                <FaLocationArrow
                  className=" mx-auto group-hover:text-primary transition-all duration-300"
                  size={50}
                />
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-semibold">Email Us</h3>
                <h2 className="text-base">213 Lane, London United Kingdom</h2>
                {/* <p className="text-base">sheba@official.com</p> */}
              </div>
            </div>
          </div>
          <div>
            <SectionTitle heading="Make A Request" />
            <div className="mx-auto max-w-screen-xl sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <form
                  action="#"
                  className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <label htmlFor="interYourFullName" className="text-sm">
                          Inter Your Full Name
                        </label>
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="interYourFullName"
                        placeholder=" Inter Your Full Name"
                        className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <label htmlFor="interYourEmail" className="text-sm">
                          Inter Your Email
                        </label>
                      </div>
                      <input
                        type="email"
                        name="name"
                        id="interYourEmail"
                        placeholder="Inter Your Email"
                        className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <label htmlFor="interYourNumber" className="text-sm">
                          Inter Your Number
                        </label>
                      </div>
                      <input
                        type="number"
                        name="number"
                        id="interYourNumber"
                        placeholder="Inter Your Number"
                        className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <label htmlFor="message" className="text-sm">
                          Query
                        </label>
                      </div>
                      <textarea
                        name="query"
                        id="message"
                        placeholder="Query"
                        className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="block mx-auto rounded-lg bg-primary px-10 py-3 text-sm font-medium text-white"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
