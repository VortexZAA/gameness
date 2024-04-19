import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";


export default function Modal({
  modal,
  setModal,
  title,
  children,
  data
}: {
  modal: boolean;
  setModal: Function;
  title: string;
  children: any;
  data?: any;
}) {
  function Close() {
    setModal(false);
  }

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" open={modal} onClose={Close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </Transition.Child>
          <div
            id="register_modal"
            className="fixed  inset-0 z-[999] overflow-y-auto bg-[black]/50"
          >
            <div className="flex min-h-screen items-center justify-center px-4 py-8">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="panel  absolute z-10 flex w-fit max-w-[95vw]  bg-dark backdrop-blur-sm flex-col  overflow-hidden rounded-lg  p-0 text-black dark:text-white  2xl:max-w-[80vw] shadow-md shadow-white/20">
                  <div className=" h-fit  w-full flex flex-col p-6 overflow-y-auto relative">
                    <div className="flex absolute left-0 top-0 h-10 w-full items-end justify-between bg-purple px-6 text-sm font-semibold text-white md:text-xl z-10">
                      <h2>{title}</h2>
                      <button
                        type="button"
                        onClick={Close}
                        className="dark:text-white text-black dark:hover:text-white/80 hover:text-black/70 transition-colors "
                      >
                        <svg
                          className="fill-current h-6 w-6"
                          role="button"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <title>Close</title>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.414 10l4.293-4.293a1 1 0 00-1.414-1.414L10 8.586 5.707 4.293a1 1 0 00-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 101.414 1.414L10 11.414l4.293 4.293a1 1 0 001.414-1.414L11.414 10z"
                          />
                        </svg>
                      </button>
                    </div>
                    {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
