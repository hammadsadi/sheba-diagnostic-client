const PromotionBanner = () => {
  return (
    <div>
      <section
        className={`relative md:h-96 h-40  bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url(https://torange.biz/photofxnew/27/IMAGE/fragment-template-district-doctor-medicine-doctors-27049.jpg)`,
        }}
      >
        <div className="absolute  bg-black bg-opacity-60 top-0 left-0 w-full h-40 md:h-96"></div>

        <div className="relative mx-auto max-w-screen-xl px-4  sm:px-6 flex items-center h-full lg:px-8">
          <div className="mx-auto max-w-3xl text-center z-20">
            <h1 className="text-white md:text-6xl text-2xl font-extrabold ">
              Understand User Flow.
              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <div className="mt-4 md:mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-primary bg-primary md:px-12 px-6 py-2 md:py-3 text-base font-medium text-white hover:bg-primary-opacity hover:border-primary-opacity hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Get Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default PromotionBanner;

<section
  className={`relative h-[calc(100vh-72px)]  bg-cover bg-center bg-no-repeat`}
  style={{
    backgroundImage: `url(https://torange.biz/photofxnew/27/IMAGE/fragment-template-district-doctor-medicine-doctors-27049.jpg)`,
  }}
>
  <div className="absolute  bg-gradient-to-r from-white/90 to-white/5 top-0 left-0 w-full h-[calc(100vh-72px)]"></div>

  <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
    <div className="mx-auto max-w-3xl text-center z-20">
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        Understand User Flow.
        <span className="sm:block"> Increase Conversion. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>;
