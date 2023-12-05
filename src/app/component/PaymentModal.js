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

{
  /* <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 z-50">
      <div className=" w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
        <div className="w-full">
          <div className="m-4 my-5 max-w-[500px] mx-auto">
            <Form closeModal={closeModal} />
          </div>
        </div>
      </div>
    </div> */
}

export default PaymentModal;
