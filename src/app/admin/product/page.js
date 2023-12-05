"use client";
import { useState } from "react";
import AddProduct from "@/app/component/AddProduct";
import Filter from "@/app/component/Filter";
import Footer from "@/app/component/Footer";
import Navbar from "@/app/component/Navbar";
import ProductCard from "@/app/component/ProductCard";

const Page = () => {
  const [closeModal, setcloseModal] = useState(false);

  const toggleModal = () => {
    setcloseModal(!closeModal);
  };
  return (
    <div>
      <Navbar />
      <div className="flex justify-between gap-10 items-center mt-56">
        <div className="w-1/2 px-5">
          <Filter />
        </div>

        <div className="w-1/2 px-5 flex items-center gap-5 justify-around">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-around items-center">
            <p className="font-bold text-xl py-2">Showing all 9 results</p>
            <select
              placeholder="Default Sorting"
              className="w-1/2 md:w-full  border-2 rounded-lg px-2 py-2 text-sm"
            >
              <option>Default Sorting</option>
              <option>One</option> <option>Two</option> <option>Three</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={toggleModal}
          className="cursor-pointer bg-teal-600 hover:text-black hover:bg-white px-4 py-2 text-lg rounded-full flex font-medium text-white gap-2 items-center mt-5 justify-center"
        >
          Add New Pizza
        </button>
        {closeModal && <AddProduct onClose={toggleModal} />}
      </div>
      <div className="mb-32">
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
