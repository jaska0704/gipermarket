import React from "react";
import { Dialog } from "@headlessui/react";

export const Modal = ({ isOpen, close, children }) => {
  return (
    <Dialog open={isOpen} onClose={close}>
      <div className="fixed bg-[#00000054] inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-[400px] bg-white p-[30px]">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
