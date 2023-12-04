"use client";
import React from "react";
import Image from "next/image";
import Pizza from "../../../public/assets/hero-img.png";
import Burger from "../../../public/assets/burger.jpg";
import Button from "./Button";
import ProductCard from "./ProductCard";

const Menu = () => {
  return (
    <div className="mt-10">
      <div className="menu-header pl-5 pr-5">
        <h4 style={{ color: "red" }} className="font-bold ">
          Popular Dishes
        </h4>
        <h2 className="font-bold text-3xl">Browse our menu</h2>
      </div>
      <ProductCard />
    </div>
  );
};

export default Menu;
