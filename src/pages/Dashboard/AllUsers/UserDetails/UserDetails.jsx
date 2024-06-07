import PropTypes from "prop-types";
const UserDetails = ({ singleUserInfo }) => {
  return (
    <article className="rounded-xl  p-4">
      <div className="flex items-center gap-4">
        <img
          alt=""
          src={singleUserInfo?.photo}
          className="size-16 rounded-full object-cover border-2 border-primary p-1"
        />

        <div>
          <h3 className="text-lg font-medium text-gray-900">
            {singleUserInfo?.name}
          </h3>

          <div className="flow-root">
            <p className="text-gray-900 text-sm">{singleUserInfo?.email}</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flow-root">
          <dl className="-my-3 divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">District</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {singleUserInfo?.district}
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Upazila</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {singleUserInfo?.upazila}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Blood Group</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {singleUserInfo?.blood}
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Role</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {singleUserInfo?.role}
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Account Status</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {singleUserInfo?.status}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
};

UserDetails.propTypes = {
  singleUserInfo: PropTypes.object,
};

export default UserDetails;
