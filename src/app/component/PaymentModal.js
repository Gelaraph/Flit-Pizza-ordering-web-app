import React from "react";
import Form from "./Form";

const PaymentModal = ({ closeModal }) => {
  return (
    <div className="w-screen h-screen bg-black bg-opacity-50 fixed top-0 z-50 flex items-center justify-center text-[#444444] overflow-x-auto">
      <div className="w-[80%] md:w-[30%] bg-white p-10 md:p-10 lg:p-50 rounded-2xl flex flex-col justify-between">
        <Form closeModal={closeModal} />
      </div>
    </div>
  );
};

export default PaymentModal;
