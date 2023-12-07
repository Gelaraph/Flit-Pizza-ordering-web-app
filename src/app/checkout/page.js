"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Paid from "../../../public/assets/paid.png";
import Bake from "../../../public/assets/bake.png";
import Bike from "../../../public/assets/bike.png";
import Delivered from "../../../public/assets/delivered.png";
import { FaCheck } from "react-icons/fa6";
import Footer from "../component/Footer";
import Navbar from "../component/navbar/Navbar";
import { FormContext } from "@/formContext/FormContext";

const Page = () => {
  const { user } = useContext(FormContext);

  const [orderId, setOrderId] = useState("");

  // useEffect to generate the Order ID once when the component mounts
  useEffect(() => {
    setOrderId(generateOrderId());
  }, []);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(!isVisible);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isVisible]);

  const imageStyle = {
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
  };

  const generateOrderId = (length = 32) => {
    const characters = "abcdefghijklmnopqrstuvwxyz1234567890";
    let orderId = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      orderId += characters.charAt(randomIndex);
    }

    return orderId;
  };

  return (
    <div>
      <Navbar />
      <div className="flex gap-2 mt-64 mb-24 pr-10 ">
        <div className="w-full  ml-5 ">
          <div className="w-full mb-12 xl:mb-0 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">
                        Order ID
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                        Customer
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                        Phone
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                        Address
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                        Total
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border border-solid border-blueGray-100 border-l-0 border-r-0 ">
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {orderId}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {user.name}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        09876543456
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {user.address}
                      </td>

                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        $4540
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 w-full">
            <div className="flex flex-col items-center">
              <Image src={Paid} width={30} height={30} alt="status" />
              <p>Payment</p>
              <div className="">
                <div className="rounded-full w-8 mt-2 h-8 bg-lime-600 text-white text-lg flex items-center justify-center">
                  <FaCheck />
                </div>
              </div>
            </div>

            <div
              className="flex flex-col items-center preparing"
              style={imageStyle}
            >
              <Image src={Bake} width={30} height={30} alt="status" />
              <p>Preparing</p>
              <div className="hidden">
                <div className="rounded-full w-8 h-8 bg-lime-600 text-white text-lg flex items-center justify-center">
                  <FaCheck />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center opacity-30">
              <Image src={Bike} width={30} height={30} alt="status" />
              <p>On the way</p>
              <div className="hidden">
                <div className="rounded-full w-8 h-8 bg-lime-600 text-white text-lg flex items-center justify-center">
                  <FaCheck />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center opacity-30">
              <Image src={Delivered} width={30} height={30} alt="status" />
              <p>Delivered</p>
              <div className="hidden">
                <div className="rounded-full w-8 h-8 bg-lime-600 text-white text-lg flex items-center justify-center">
                  <FaCheck />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 bg-gray-950 text-[#fff]  p-7">
          <div>
            <h3 className="font-bold text-2xl">Cart Total</h3>
            <div className="flex gap-3 items-center text-start text-sm">
              <div>
                <p>Subtotal:</p>
                <p>Discount:</p>
                <p>Total:</p>
              </div>
              <div>
                <p> $123</p>
                <p> $3</p>
                <p> $200</p>
              </div>
            </div>

            <button
              className="text-[#fff] text-sm disabled:cursor-not-allowed px-2 rounded-full text-center font-bold bg-[#FFAC07] w-full h-10  mt-10"
              disabled
            >
              Paid
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
