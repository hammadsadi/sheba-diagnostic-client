import PropTypes from "prop-types";
const FeaturedBookTestItem = ({ booking }) => {
  return (
    <a className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-lg">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary via-blue-500 to-secondary"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {booking?.testName}
          </h3>

          {/* <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p> */}
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <img
            alt=""
            src={booking?.photo}
            className="size-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-pretty text-base text-gray-500">
          {booking?.details?.slice(0, 150)}
        </p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Published</dt>
          <dd className="text-xs text-gray-500">
            {" "}
            {new Date(booking?.bookingDate).toLocaleDateString()}
          </dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">
            {booking?.patientInfo?.name}
          </dt>
          <dd className="text-xs text-gray-500">By</dd>
        </div>
      </dl>
    </a>
  );
};

FeaturedBookTestItem.propTypes = {
  booking: PropTypes.object,
};
export default FeaturedBookTestItem;
