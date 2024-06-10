import PropTypes from "prop-types";
const NewsItem = ({ item }) => {
  return (
    <a
      rel="noopener noreferrer"
      href="#"
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline border"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 "
        src={item?.image}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {item?.title}
        </h3>
        <span className="text-xs">{item?.date}</span>
        <p>{item?.desc?.slice(0, 100)}</p>
      </div>
    </a>
  );
};
NewsItem.propTypes = {
  item: PropTypes.object,
};
export default NewsItem;
