const TestDetails = () => {
  return (
    <div className="my-5 md:my-10">
      <div className="container mx-auto px-2 md:px-0">
        <article className="overflow-hidden rounded-lg shadow transition ">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="md:h-[500px] h-52 w-full object-cover"
          />

          <div className="grid md:grid-cols-6 p-4 md:gap-5 sm:p-6">
            <div className="  md:col-span-4">
              <div className="flex justify-between">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {" "}
                  10th Oct 2022{" "}
                </time>
                <p>
                  {" "}
                  <span className="font-bold">$</span> 2334
                </p>
              </div>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900 font-semibold">
                  How to position your furniture for positivity
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-base text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
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
