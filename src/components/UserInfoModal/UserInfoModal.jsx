import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import PropTypes from "prop-types";
export default function UserInfoModal({ isOpen, children, close, modalTitle }) {
  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
          __demoMode
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-2xl rounded-xl bg-[#ebfcfd] border p-6 backdrop-blur-2xl shadow-xl">
                  <DialogTitle
                    as="h3"
                    className="text-2xl text-gray-900 text-center font-semibold mb-2"
                  >
                    {modalTitle}
                  </DialogTitle>
                  {children}
                  <div className="mt-4"></div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

UserInfoModal.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.bool,
  children: PropTypes.element,
  modalTitle: PropTypes.string,
};
