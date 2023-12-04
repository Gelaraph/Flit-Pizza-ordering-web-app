import React, { useEffect } from "react";
import Form from "./Form";

const PaymentModal = ({ closeModal }) => {
  return (
    <div
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 z-50"
      // onClick={closeModal}
    >
      <div className=" w-full max-w-xl verflow-y-auto sm:rounded-2xl bg-white">
        <div className="w-full">
          <div className="m-4 my-5 max-w-[500px] mx-auto">
            <Form closeModal={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
