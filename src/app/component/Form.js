"use client";
import React, { useContext } from "react";
import { FormContext } from "@/formContext/FormContext";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";

const Form = ({ closeModal }) => {
  const router = useRouter();

  const { user, updateFormField } = useContext(FormContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/checkout");
  };

  return (
    <div className="w-full text-start">
      <div className="flex justify-between gap-3">
        <h2 className="font-bold text-2xl mt-2">
          You will pay $54 on <br /> delivery.
        </h2>
        <RxCross2
          className="text-gray-400 font-bold text-2xl cursor-pointer"
          onClick={closeModal}
        />
      </div>

      <form className="x-8 pt-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Name Surname
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            name="phone"
            placeholder="+234 703 46 36"
            value={user.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-36"
            value={user.address}
            onChange={handleInputChange}
            required
            placeholder="Enter your address"
            name="address"
          />
        </div>
        <div className=" px-4 py-3 sm:flex justify-center sm:px-6 w-full">
          <button
            type="submit"
            className="inline-flex w-full justify-center border-black rounded-md bg-[#FFAC07] px-3 py-2 text-sm font-semibold text-black border-2 hover:bg-red-500 sm:ml-3 sm:w-auto mb-4"
          >
            Order
          </button>
        </div>
      </form>
    </div>
  );
};

// {
//   /* <input
//             class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             type="password"
//             placeholder="******************"
//           /> */
// }
// {
//   /* <p class="text-red-500 text-xs italic">Please choose a password.</p> */
// }

export default Form;
