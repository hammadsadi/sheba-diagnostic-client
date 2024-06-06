import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useGetAllBanners from "../../../hooks/useGetAllBanners";
import toastAlert from "../../../utils/toastAlert";
import queryString from "query-string";
import PropTypes from "prop-types";
const PromoCode = ({ testDetails }) => {
  const [banners] = useGetAllBanners();
  const navigate = useNavigate();
  const promoRef = useRef();

  // handlePromo
  // const handlePromo = () => {
  //   // console.log(promoRef.current.value);
  //   let codePromo = banners.find(
  //     (code) => code.couponCode === promoRef.current.value
  //   );
  //   if (!codePromo) {
  //     return toastAlert("Invalid Code", "error");
  //   }

  //   const promoInfo = { verify: testDetails._id, pro: codePromo._id };
  //   const url = queryString.stringifyUrl({
  //     url: "/payment",
  //     query: promoInfo,
  //   });
  //   navigate(url);
  // };

  // const handlePromo = () => {
  //   // console.log(promoRef.current.value);
  //   let codePromo = banners.find(
  //     (code) => code.couponCode === promoRef.current.value
  //   );
  //   if (!codePromo || !codePromo.isActive) {
  //     return toastAlert("Invalid Code", "error");
  //   }

  //   const promoInfo = { verify: testDetails._id, pro: codePromo._id };
  //   const url = queryString.stringifyUrl({
  //     url: "/payment",
  //     query: promoInfo,
  //   });
  //   navigate(url);
  // };

  // Handle Test Promo
  const handlePromo = () => {
    // Check Promo Code
    let codePromo = banners.find(
      (code) => code.couponCode === promoRef.current.value
    );

    if (!codePromo || !codePromo.isActive) {
      return toastAlert("Invalid Code", "error");
    }

    const promoInfo = { verify: testDetails._id, pro: codePromo.couponRate };
    const url = queryString.stringifyUrl({
      url: "/payment",
      query: promoInfo,
    });
    navigate(url);
  };

  // Handle Skip Promo
  const handleSkipPromo = () => {
    const promoInfo = { verify: testDetails._id };
    const url = queryString.stringifyUrl({
      url: "/payment",
      query: promoInfo,
    });
    navigate(url);
  };

  // const handlePromo = () => {
  //   //Check Promo Code

  //   if (promoRef.current.value != false) {
  //     let codePromo = banners.find(
  //       (code) => code.couponCode === promoRef.current.value
  //     );
  //     if (!codePromo || !codePromo.isActive) {
  //       return toastAlert("Invalid Code", "error");
  //     }

  //     const promoInfo = { verify: testDetails._id, pro: codePromo._id };
  //     const url = queryString.stringifyUrl({
  //       url: "/payment",
  //       query: promoInfo,
  //     });
  //     navigate(url);
  //   } else {
  //     const promoInfo = { verify: testDetails._id };
  //     const url = queryString.stringifyUrl({
  //       url: "/payment",
  //       query: promoInfo,
  //     });
  //     navigate(url);
  //   }
  // };
  return (
    <div>
      <h2 className="text-center my-3 md:my-5 font-extrabold">
        Total Price: $<span>{testDetails?.testPrice}</span>
      </h2>
      <div>
        <div>
          <div className="flex justify-between mb-2">
            <label htmlFor="promo" className="text-sm">
              Do you Have Promo Code?
            </label>
          </div>
          <input
            type="text"
            name="promo"
            id="promo"
            ref={promoRef}
            placeholder="Apply Code"
            className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:outline-none focus:border-primary"
          />
        </div>
        <div className="flex gap-2 justify-end mt-1">
          <button
            type="submit"
            className=" px-2 py-1 font-semibold rounded-md bg-gray-300 text-black hover:bg-gray-400 transition duration-300 flex items-center justify-center text-xs"
            onClick={handleSkipPromo}
          >
            Skip
          </button>

          <button
            type="submit"
            className=" px-2 py-1 font-semibold rounded-md bg-primary text-white hover:bg-primary-opacity transition duration-300 flex items-center justify-center text-xs"
            onClick={handlePromo}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
PromoCode.propTypes = {
  testDetails: PropTypes.object,
};
export default PromoCode;
