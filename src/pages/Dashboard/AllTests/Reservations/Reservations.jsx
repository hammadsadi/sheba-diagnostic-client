import PropTypes from "prop-types";
import { MdOutlineWatchLater } from "react-icons/md";

const Reservations = ({ reservationsList }) => {
  return (
    <div className="flex flex-col gap-3">
      {reservationsList?.map((reservation) => (
        <article
          className="rounded-xl border-2 border-gray-100 bg-white"
          key={reservation._id}
        >
          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
            <div>
              <h3 className="font-medium sm:text-lg">
                <a className="hover:underline">{reservation?.testName}</a>
              </h3>

              <p className="line-clamp-2 text-sm text-gray-700">
                {reservation?.details?.slice(0, 70)}...
              </p>

              <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <MdOutlineWatchLater />

                  <p className="text-xs">
                    {new Date(reservation?.bookingDate).toLocaleDateString()}
                  </p>
                </div>

                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                  Booked by
                  <a className="font-medium underline hover:text-gray-700">
                    &nbsp;
                    {reservation?.patientInfo?.name}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-primary px-3 py-1.5 text-white">
              <span className="text-[10px] font-medium sm:text-xs">
                {reservation?.report}
              </span>
            </strong>
          </div>
        </article>
      ))}
    </div>
  );
};
Reservations.propTypes = {
  reservationsList: PropTypes.array,
};
export default Reservations;
