import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ContactUs = () => {
  return (
    <div>
      <section className="mt-10 md:mt-20 text-gray-800">
        <div>
          <SectionTitle heading="Contact Us" />
        </div>
        <div className="container mx-auto px-2 md:px-0">
          <div>
            <div>
              <div>icon</div>
              <div>
                <h3>Appointment</h3>
                <h2>+ 01 1122 333 333</h2>
                <p>appointment@info.com</p>
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
