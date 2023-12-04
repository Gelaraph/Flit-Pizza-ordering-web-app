import React from "react";
import Image from "next/image";
import HalfPizza from "../../../public/assets/half-pizza.png";
import HappyFace from "../../../public/assets/happy.png";
import Location from "../../../public/assets/location.png";
import Food from "../../../public/assets/food.png";
import Flower from "../../../public/assets/flower.png";

const Best = () => {
  return (
    <div className="bg-orange-100 py-10 mt-20">
      <div className="flex justify-between  items-center">
        <div className="menu-header pl-5 pr-5">
          <h4 style={{ color: "red" }} className="font-bold ">
            Our Strength
          </h4>
          <h2 className="font-bold text-3xl mt-1">Why Are Ae The Best?</h2>
        </div>
        <Image src={HalfPizza} alt="" width={300} className="" />
      </div>

      <div className="mb-32 grid text-center lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors ">
          <Image src={Food} alt="" width={50} height={50} className="" />
          <h2 className={`mb-3 text-lg font-semibold mt-2`}>
            All Kinds Of Food
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors ">
          <Image src={Flower} alt="" width={50} height={50} className="" />
          <h2 className={`mb-3 text-lg font-semibold mt-2`}>
            All Kinds Of Food
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors ">
          <Image src={HappyFace} alt="" width={50} height={50} className="" />
          <h2 className={`mb-3 text-lg font-semibold mt-2`}>
            All Kinds Of Food
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors">
          <Image src={Location} alt="" width={50} height={50} className="" />
          <h2 className={`mb-3 text-lg font-semibold mt-2`}>
            All Kinds Of Food
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Best;
