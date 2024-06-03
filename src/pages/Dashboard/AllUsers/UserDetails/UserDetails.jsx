const UserDetails = () => {
  return (
    <article className="rounded-xl  p-4">
      <div className="flex items-center gap-4">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          className="size-16 rounded-full object-cover border-2 border-primary p-1"
        />

        <div>
          <h3 className="text-lg font-medium text-gray-900">Claire Mac</h3>

          <div className="flow-root">
            <p className="text-gray-900 text-sm">hammadsadi@yahoo.com</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flow-root">
          <dl className="-my-3 divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">District</dt>
              <dd className="text-gray-700 sm:col-span-2">Sunamganj</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Upazila</dt>
              <dd className="text-gray-700 sm:col-span-2">Bishwamberpur</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Blood Group</dt>
              <dd className="text-gray-700 sm:col-span-2">A-</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Role</dt>
              <dd className="text-gray-700 sm:col-span-2">Admin</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Account Status</dt>
              <dd className="text-gray-700 sm:col-span-2">Active</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
};

export default UserDetails;
