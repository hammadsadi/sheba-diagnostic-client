import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const TestItem = ({ item }) => {
  console.log(item);
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg ">
      <img alt="" src={item?.photo} className="h-56 w-full object-cover" />

      <div className="bg-white p-4 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          {" "}
          {item?.date}
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
            {item?.name}
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-base text-gray-500">
          {item?.details.slice(0, 150)}
        </p>
        <div>
          <Link
            to="/test-details/98"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            Find out more
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

TestItem.propTypes = {
  item: PropTypes.object,
};
export default TestItem;
