import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaSquarePen } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { HiDocumentAdd } from "react-icons/hi";
import MyModal from "../../../../components/MyModal/MyModal";
import { useState } from "react";
import UpdateTestForm from "../UpdateTestForm/UpdateTestForm";

const AllTests = () => {
  let [isTestModalOpen, setIsTestModalOpen] = useState(false);

  function openTestModal() {
    setIsTestModalOpen(true);
  }

  function closeTestModal() {
    setIsTestModalOpen(false);
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
            <tr className="odd:bg-gray-50">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                2
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBTDPwLgj4cYlyRiR1XE7F_JKO6QLki82-Q&s"
                  className="w-7 h-7 object-cover rounded-full border border-primary"
                  alt=""
                />
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Hammad sadi
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                $667
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
                    onClick={openTestModal}
                  />
                </span>
                <span>
                  <FaTrash className="text-base cursor-pointer text-rose-700" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <MyModal
        isOpen={isTestModalOpen}
        close={closeTestModal}
        modalTitle="Update Test Info"
      >
        <UpdateTestForm />
      </MyModal>
    </div>
  );
};

export default AllTests;
