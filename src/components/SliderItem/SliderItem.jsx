import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const SliderItem = ({ item }) => {
  const { title, desc, couponCode, discount, image } = item;
  return (
    <section
      className={`relative h-[calc(100vh-72px)]  bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute  bg-gradient-to-r from-white/90 to-white/5 top-0 left-0 w-full h-[calc(100vh-72px)]"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center md:text-left">
          {discount && (
            <h4 className="text-white inline-block px-2 py-1 md:text-2xl bg-primary-opacity font-bold">
              {discount}% Discount
            </h4>
          )}

          <h1 className="text-3xl font-extrabold sm:text-5xl">
            {title.slice(0, 18)}
            <strong className="block font-extrabold text-primary">
              {" "}
              {title.slice(18)}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg md:text-base font-medium">
            {desc}
            {couponCode && (
              <span className="font-semibold text-lg text-primary">
                Coupon {couponCode}
              </span>
            )}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to="/all-tests"
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary-opacity focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
SliderItem.propTypes = {
  item: PropTypes.object,
};
export default SliderItem;
