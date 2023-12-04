import Footer from "@/app/component/Footer";
import Navbar from "@/app/component/Navbar";
import React from "react";
import Image from "next/image";
import Burger from "../../../../public/assets/burger.jpg";
import Sizes from "../../../../public/assets/pizza-size.png";
import SizeBatch from "@/app/component/SizeBatch";
import Button from "@/app/component/Button";
import { FaRegHeart } from "react-icons/fa6";

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between gap-5 px-5 items-center mt-28 ">
        <div className="flex w-1/2">
          <Image src={Burger} alt="" width={500} height={400} className="" />
        </div>
        <div className="w-1/2">
          <h2 className={`text-4xl font-semibold`}>Burger Pizza</h2>
          <div className="flex gap-5 items-center mt-6 mb-3">
            <p style={{ color: "red" }} className="font-bold">
              $20
            </p>
            <p className={`text-2 font-semibold opacity-50 `}>8 Reviews</p>
          </div>
          <p className="my-3">This burger pizza</p>
          <p className="my-3">Category: Chicken, Lunch, Burger, Pizza</p>
          <p className="my-3">Tgs: Healthy, Organic, Chicken, Sauce</p>

          <div className="mt-8">
            <h2 className={`text-xl font-semibold`}>Choose pizza size</h2>
            <div className="flex gap-8 items-center mt-5">
              <div style={{ position: "relative" }}>
                <Image src={Sizes} alt="" width={50} height={50} className="" />
                <div
                  style={{ position: "absolute", top: "-1em", left: "1em" }}
                  className=""
                >
                  <SizeBatch text="Small" />
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <Image src={Sizes} alt="" width={80} height={80} className="" />{" "}
                <div
                  style={{ position: "absolute", top: "-1em", left: "2em" }}
                  className=""
                >
                  <SizeBatch text="Medium" />
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <Image
                  src={Sizes}
                  alt=""
                  width={120}
                  height={120}
                  className=""
                />
                <div
                  style={{ position: "absolute", top: "-1em", left: "4em" }}
                  className=""
                >
                  <SizeBatch text="Large" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="font-bold text-base">
              Choose addidional ingredients
            </h3>
            <div className="flex gap-3 items-center text-sm">
              <input type="checkbox" for="extra" className="" />
              <label for="extra">Sauce</label>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-5 mb-10">
            <input
              type="number"
              min={1}
              className="border-gray-30 dark:border-neutral-700 border h-7 w-28  p-1"
            />

            <button
              type="button"
              className="inline-flex w-full justify-center  rounded-full bg-[#FFAC07] px-3 py-2 text-sm font-semibold text-[#fff] border-2 hover:bg-red-500 sm:ml-3 sm:w-auto "
            >
              Add to Cart
            </button>
            <div className="text-slate-400 border-gray-30 dark:border-neutral-700 border justify-center flex items-center w-8 h-8 rounded-full">
              <FaRegHeart />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
