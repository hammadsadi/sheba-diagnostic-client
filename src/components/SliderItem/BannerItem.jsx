import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BannerItem = ({ item }) => {
  const { title, details, couponCode, couponRate, photo } = item || {};
  return (
    <section
      className={`relative md:h-[calc(100vh-72px)]  bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url(${photo})`,
      }}
    >
      <div className="absolute  bg-gradient-to-r from-white/90 to-white/5 top-0 left-0 w-full h-full md:h-[calc(100vh-72px)]"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-14 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl  md:text-left">
          {couponRate && (
            <h4 className="text-white inline-block px-2 py-1 md:text-2xl bg-primary-opacity font-bold">
              {couponRate}% Discount
            </h4>
          )}

          <h1 className="text-3xl font-extrabold sm:text-5xl capitalize">
            {title?.slice(0, 20)}
            <strong className="block font-extrabold text-primary">
              {" "}
              {title?.slice(20)}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg md:text-base font-medium">
            {details}
            {couponCode && (
              <span className="font-semibold text-lg text-primary">
                &nbsp; Coupon {couponCode}
              </span>
            )}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center md:text-left">
            <Link
              to="/all-tests"
              className="  rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary-opacity focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
BannerItem.propTypes = {
  item: PropTypes.object,
};
export default BannerItem;
