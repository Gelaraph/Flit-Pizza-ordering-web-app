import React from "react";
import ProductCard from "../component/ProductCard";
import Navbar from "../component/Navbar";
import Search from "../component/Search";
import Filter from "../component/Filter";
import Footer from "../component/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between gap-10 px-10 mt-20 items-center">
        <div className="w-1/2">
          <Filter />
        </div>
        <div className="w-1/2 flex items-center gap-5 justify-around">
          <p className="font-bold">Showing all 9 results</p>
          <Search />
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
