"use client";
import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoFilterOutline } from "react-icons/io5";
import FilterImg from "../../../public/assets/filterImg.png";
import Image from "next/image";
import RangeSlider from "./RangeSlider";

const Filter = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        !sidebarRef.current.contains(e.target) &&
        !openSidebarButtonRef.current.contains(e.target)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setSidebarOpen(!isSidebarOpen);
  };

  const sidebarRef = React.createRef();
  const openSidebarButtonRef = React.createRef();
  return (
    <div>
      {/* <button
        ref={openSidebarButtonRef}
        className="text-gray-500 hover:text-gray-600"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>{" "} */}
      <button
        ref={openSidebarButtonRef}
        onClick={toggleSidebar}
        className="cursor-pointer bg-[#FBB200] px-4 py-2 text-lg md:text-xl rounded-full flex font-medium text-white gap-2 items-center mt-3 justify-center"
      >
        <IoFilterOutline />
        Filter
      </button>
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`absolute bg-black bg-opacity-50 left-0 top-0 z-10 w-full min-h-screen overflow-y-auto transition-transform transform ${
          isSidebarOpen ? "" : "-translate-x-full"
        } ease-in-out duration-300`}
      >
        {/* Your Sidebar Content */}
        <div
          className={`absolute bg-white text-black left-0 top-0 z-10 w-96 min-h-screen overflow-y-auto transition-transform transform ${
            isSidebarOpen ? "" : "-translate-x-full"
          } ease-in-out duration-300`}
        >
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-bold">Filter By Price</h1>
              <RxCross1
                onClick={toggleSidebar}
                className="font-bold text-gray-500"
              />
            </div>
            <div className="mt-10 mb-3">
              <RangeSlider />
            </div>
            <p className="mt-5">Price: $40 - $74</p>{" "}
            <button className="cursor-pointer bg-[#FBB200] px-4 py-2 text-lg md:text-xl rounded-full flex font-medium text-white gap-2 items-center mt-6 justify-center">
              <IoFilterOutline />
              Filter
            </button>
            <h3 className="font-bold text-lg mt-8">Top Product</h3>
            <ul className="mt-5 pl-5 flex flex-col gap-10">
              <li className="mb-5">
                <div className="flex gap-10 items-center">
                  <Image
                    src={FilterImg}
                    alt=""
                    width={100}
                    height={100}
                    className=""
                  />
                  <div className="">
                    <h3 className="font-bold text-xl">Shrimp pizza</h3>
                    <p className="font-bold text-lg">$35.00</p>
                  </div>
                </div>
              </li>
              <li className="mb-5">
                <div className="flex gap-10 items-center">
                  <Image
                    src={FilterImg}
                    alt=""
                    width={100}
                    height={100}
                    className=""
                  />
                  <div className="">
                    <h3 className="font-bold text-xl">Shrimp pizza</h3>
                    <p className="font-bold text-lg">$35.00</p>
                  </div>
                </div>
              </li>
              <li className="mb-5">
                <div className="flex gap-10 items-center">
                  <Image
                    src={FilterImg}
                    alt=""
                    width={100}
                    height={100}
                    className=""
                  />
                  <div className="">
                    <h3 className="font-bold text-xl">Shrimp pizza</h3>
                    <p className="font-bold text-lg">$35.00</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
