import PropTypes from "prop-types";
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mb-5 md:mb-9 max-w-lg mx-auto space-y-2">
      <h1 className="text-3xl md:text-4xl font-extrabold capitalize">
        {heading}
      </h1>
      <h6 className="text-gray-600">{subHeading}</h6>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};
export default SectionTitle;
