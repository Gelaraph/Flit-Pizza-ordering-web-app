import React from "react";
import Image from "next/image";
import Leaf from "../../../public/assets/leaf.png";
import SecondCustomer from "../../../public/assets/secondCus.jpg";
import ThirdCustomer from "../../../public/assets/thirdCus.jpg";
import FourthCustomer from "../../../public/assets/fourthCus.jpg";
import FirstCustomer from "../../../public/assets/firstCus.png";

const Testimonial = () => {
  return (
    <div className="mb-10">
      <div className="mt-5">
        <Image src={Leaf} alt="" width={100} height={100} className="" />
      </div>
      <div className="menu-header pl-5 pr-5">
        <h4 style={{ color: "red" }} className="font-bold ">
          Customer Feedback
        </h4>
        <h2 className="font-bold text-3xl mt-1">Client Testimonial</h2>
      </div>
      <div className="mb-32 grid text-center lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left mt-10 gap-5 pr-5 pl-5">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors w-full flex justify-center flex-col border-gray-300">
          <div className="w-full flex justify-center">
            <Image
              src={FirstCustomer}
              alt=""
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          <div className="text-center">
            <h2 className={`mb-3 text-lg font-semibold mt-2`}>
              All Kinds Of Food
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Lorem Ipsum is simply dummy text of the print book. It has
              survived not only five centuries, but also a leap.
            </p>
          </div>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors w-full flex justify-center flex-col border-gray-300">
          <div className="w-full flex justify-center">
            <Image
              src={SecondCustomer}
              alt=""
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <h2 className={`mb-3 text-lg font-semibold mt-2`}>
              All Kinds Of Food
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Lorem Ipsum is simply dummy text of the print book. It has
              survived not only five centuries, but also a leap.
            </p>
          </div>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors w-full flex justify-center flex-col border-gray-300">
          <div className="w-full flex justify-center">
            <Image
              src={ThirdCustomer}
              alt=""
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <h2 className={`mb-3 text-lg font-semibold mt-2`}>
              All Kinds Of Food
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Lorem Ipsum is simply dummy text of the print book. It has
              survived not only five centuries, but also a leap.
            </p>
          </div>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors w-full flex justify-center flex-col border-gray-300">
          <div className="w-full flex justify-center">
            <Image
              src={FourthCustomer}
              alt=""
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <h2 className={`mb-3 text-lg font-semibold mt-2`}>
              All Kinds Of Food
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Lorem Ipsum is simply dummy text of the print book. It has
              survived not only five centuries, but also a leap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
