"use client";

import { AiOutlineClose } from "react-icons/ai";

export default function AddProduct({ onClose }) {
  return (
    <div className="w-screen h-screen bg-black bg-opacity-50 fixed top-0 z-50 flex items-center justify-center text-[#444444] overflow-x-auto">
      <div className="w-[80%] md:w-[30%] bg-white p-10 md:p-10 lg:p-50 rounded-2xl flex flex-col justify-between">
        <div className="flex justify-between align-center items-center border-b gap-4 mb-3">
          <p className="text-xl font-semibold text-left tracking-wide leading-[1.5] my-3">
            Add New Pizza
          </p>
          <div onClick={onClose} className="text-gray-600 cursor-pointer">
            <AiOutlineClose size={20} />
          </div>
        </div>

        <div class="flex flex-col w-full mb-15 text-sm mb-5">
          <label className="mb-2">Choose Pizza Image</label>
          <input
            type="file"
            className="block w-full border border-gray-400 shadow-sm rounded-md dark:bg-white dark:border-gray-400 dark:text-gray-400 dark:focus:outline-none 
            file:bg-gray-500 file:border-0
            file:me-4
            file:py-2 file:px-4
            dark:file:bg-gray-500 dark:file:text-gray-300"
          />
        </div>
        <div class="flex flex-col w-full mb-15 text-sm mb-5">
          <label className="mb-2">Pizza Title</label>
          <input
            type="text"
            className="border border-gray-400 rounded-md outline-none p-2"
          />
        </div>

        <div class="flex flex-col w-full mb-15 text-sm mb-5">
          <label className="mb-2">Pizza Description</label>
          <textarea
            rows={3}
            type="text"
            className="border border-gray-400 rounded-md outline-none p-2"
          />
        </div>

        <div class="flex flex-col w-full mb-15 text-sm mb-5">
          <label className="mb-2">Pizza Prices</label>
          <input
            placeholder="Small"
            type="number"
            className="border border-gray-400 rounded-md outline-none p-2 mb-2"
          />
          <input
            placeholder="Medium"
            type="number"
            className="border border-gray-400 rounded-md outline-none p-2 mb-2"
          />
          <input
            placeholder="Large"
            type="number"
            className="border border-gray-400 rounded-md outline-none p-2 mb-2"
          />
        </div>

        <div class="flex flex-col w-full mb-15 text-sm mb-5">
          <label className="mb-2">Extra</label>
          <input
            placeholder="Item"
            type="text"
            className="border border-gray-400 rounded-md outline-none p-2 mb-2"
          />
          <input
            placeholder="Price"
            type="number"
            className="border border-gray-400 rounded-md outline-none p-2 mb-2"
          />
        </div>

        <button className="flex bg-teal-600 text-white mx-auto justify-center py-2 px-4 text-base rounded-lg cursor-pointer">
          Create Pizza
        </button>
      </div>
    </div>
  );
}
