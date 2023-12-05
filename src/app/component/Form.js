import React from "react";
import { RxCross2 } from "react-icons/rx";

const Form = ({ closeModal }) => {
  return (
    <div class="w-full text-start">
      <div className="flex justify-between gap-3">
        <h2 className="font-bold text-2xl mt-2">
          You will pay $54 on <br /> delivery.
        </h2>
        <RxCross2
          className="text-gray-400 font-bold text-2xl cursor-pointer"
          onClick={closeModal}
        />
      </div>
      <form class="x-8 pt-6">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Name Surname
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Phone Number
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="+234 703 46 36"
          />
          {/* <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          /> */}
          {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Address
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-36" />
        </div>
        <div className=" px-4 py-3 sm:flex justify-center sm:px-6 w-full">
          <a href="/order">
            <button
              type="button"
              className="inline-flex w-full justify-center border-black rounded-md bg-[#FFAC07] px-3 py-2 text-sm font-semibold text-black border-2 hover:bg-red-500 sm:ml-3 sm:w-auto mb-4"
            >
              Order
            </button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Form;
