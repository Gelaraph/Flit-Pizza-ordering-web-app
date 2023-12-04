"use client";
import React, { useState } from "react";
import { MdFilterList } from "react-icons/md";

const Filter = () => {
  const [showOption, setshowOption] = useState(false);

  const toggleOptions = () => {
    setshowOption(!showOption);
  };
  return (
    <div class="flex items-center ">
      <div class="relative inline-block">
        <div>
          <button
            type="button"
            class="group flex flex-row gap-3 justify-center text-sm text-[#fff] px-2 rounded-full font-bold bg-[#FFAC07] w-24 h-10 items-center"
            id="menu-button"
            aria-expanded="false"
            aria-haspopup="true"
            onClick={toggleOptions}
          >
            <MdFilterList />
            Filter
          </button>
        </div>

        {showOption && (
          <div
            class="absolute z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <a
                href="#"
                class="font-medium text-gray-900 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Most Popular
              </a>
              <a
                href="#"
                class="text-gray-500 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Best Rating
              </a>
              <a
                href="#"
                class="text-gray-500 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                Newest
              </a>
              <a
                href="#"
                class="text-gray-500 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                Price: Low to High
              </a>
              <a
                href="#"
                class="text-gray-500 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-4"
              >
                Price: High to Low
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
