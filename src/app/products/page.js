import React from "react";
import ProductCard from "../component/ProductCard";
import Navbar from "../component/Navbar";
import Filter from "../component/Filter";
import Footer from "../component/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between gap-10 items-center mt-56">
        <div className="w-1/2 px-5">
          <Filter />
        </div>

        <div className="w-1/2 flex items-center gap-5 justify-around">
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
      <div className="mb-32">
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
};

export default page;
