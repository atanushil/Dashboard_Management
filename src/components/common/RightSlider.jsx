"use client";


import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const RightSlider = ({ heading, content, open, setOpen }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10 max-h-screen "
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 max-h-screen bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 overflow-hidden max-h-screen">
          <div className="absolute inset-0 overflow-hidden ">
            <div className="pointer-events-none fixed inset-y-0  right-0  flex max-w-full  ">
              <DialogPanel
                transition
                className="pointer-events-auto relative   max-w-2xl w-full transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white  shadow-xl">
                  <div className="px-4 sm:px-6 bg-blue-600">
                    <DialogTitle className="text-base font-semibold flex justify-between py-2 text-gray-900 ">
                      <p className="text-xl text-white font-light">{heading}</p>
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md  text-gray-300 hover:text-warning focus:outline-none "
                      >
                        <span className="absolute -inset-2.5" />
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </DialogTitle>

                  </div>
                  <div className="relative flex-1 px-2 sm:px-4 ">
                    {content}
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default RightSlider;
