import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaSquarePen } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { HiDocumentAdd } from "react-icons/hi";
import MyModal from "../../../../components/MyModal/MyModal";
import { useState } from "react";
import UpdateTestForm from "../UpdateTestForm/UpdateTestForm";
import useGetAllTests from "../../../../hooks/useGetAllTests";
import Loader from "../../../../components/Loader/Loader";
import swal from "sweetalert";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AllTests = () => {
  let [isTestModalOpen, setIsTestModalOpen] = useState(false);
  const [tests, isLoading, refetch] = useGetAllTests();
  const [singleTest, setSingleTest] = useState({});
  const axiosSecure = useAxiosSecure();

  function openTestModal() {
    setIsTestModalOpen(true);
  }

  function closeTestModal() {
    setIsTestModalOpen(false);
  }

  // Handle Test
  const handleTest = (test) => {
    setSingleTest(test);
    openTestModal();
  };

  // Handle Delete Test
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        swal("Test has been Deleted!", {
          icon: "success",
        });
        // Api Action
        const { data } = await axiosSecure.delete(`/test/delete/${id}`);
        if (data.deletedCount > 0) {
          refetch();
        }
      } else {
        swal("Your Data is safe!");
      }
    });
  };
  if (isLoading) {
    return <Loader />;
  }
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
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Reservations
              </th>

              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {tests.length > 0 ? (
              <>
                {tests.map((test, idx) => (
                  <tr className="odd:bg-gray-50" key={test._id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {idx + 1}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      <img
                        src={test.photo}
                        className="w-7 h-7 object-cover rounded-full border border-primary"
                        alt=""
                      />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {test.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      ${test.testPrice}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <p className="flex justify-center items-center">
                        <span>
                          <HiDocumentAdd className="text-lg text-primary cursor-pointer" />
                        </span>{" "}
                        <span>12</span>
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex items-center gap-1 justify-center">
                      <span>
                        <FaSquarePen
                          className="text-base text-primary cursor-pointer"
                          onClick={() => handleTest(test)}
                        />
                      </span>
                      <span>
                        <FaTrash
                          className="text-base cursor-pointer text-rose-700"
                          onClick={() => handleDelete(test._id)}
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
      <MyModal
        isOpen={isTestModalOpen}
        close={closeTestModal}
        modalTitle="Update Test Info"
      >
        <UpdateTestForm
          singleTest={singleTest}
          closeTestModal={closeTestModal}
          refetch={refetch}
        />
      </MyModal>
    </div>
  );
};

export default AllTests;
