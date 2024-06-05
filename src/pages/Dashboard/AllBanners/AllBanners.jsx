import { FaTrash } from "react-icons/fa";
// import { GoDotFil } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useGetAllBanners from "../../../hooks/useGetAllBanners";
const AllBanners = () => {
  const [banners] = useGetAllBanners();
  console.log(banners);
  const handleDeleteBanner = (id) => {
    alert(id);
  };
  return (
    <div>
      <div className="mt-3 md:mt-6">
        <SectionTitle heading="All Test List" />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-primary bg-white text-sm text-center">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                #
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Title
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Coupon Code
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Discount
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Status
              </th>

              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {banners.length > 0 ? (
              <>
                {banners.map((banner, idx) => (
                  <tr className="odd:bg-gray-50" key={banner._id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {idx + 1}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      <img
                        src={banner.photo}
                        className="w-10 h-7 object-cover  border border-primary"
                        alt=""
                      />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {banner.title}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {banner.couponCode}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      %{banner.couponRate}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {banner.isActive ? (
                        <button className="flex items-center cursor-pointer">
                          <GoDotFill className="text-primary" />{" "}
                          <span>Active</span>
                        </button>
                      ) : (
                        <button className="flex items-center cursor-pointer">
                          <GoDotFill className="text-rose-700" />{" "}
                          <span>Inactive</span>
                        </button>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex items-center gap-1 justify-center">
                      <span>
                        <FaTrash
                          className="text-base cursor-pointer text-rose-700"
                          onClick={() => handleDeleteBanner(banner._id)}
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <>
                <tr>
                  <td colSpan="6" className="py-3">
                    No Data Found
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBanners;
