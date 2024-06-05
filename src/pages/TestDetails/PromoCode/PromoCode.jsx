import { useRef } from "react";

const PromoCode = () => {
  const promoRef = useRef();

  // handlePromo
  const handlePromo = () => {
    console.log(promoRef.current.value);
  };
  return (
    <div>
      <h2 className="text-center my-3 md:my-5 font-extrabold">
        Total Price: $<span>3234</span>
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

export default PromoCode;
