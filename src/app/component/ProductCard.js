import React from "react";
import Image from "next/image";
import Pizza from "../../../public/assets/hero-img.png";
import Burger from "../../../public/assets/burger.jpg";
import Button from "./Button";
import Link from "next/link";
const productArray = [
  { img: Burger, name: "Burger Pizza", price: "$20", id: 1 },
  { img: Burger, name: "Burger Pizza", price: "$20", id: 2 },
  { img: Burger, name: "Burger Pizza", price: "$20", id: 3 },
];
const ProductCard = () => {
  return (
    <div className="mb-32 grid text-center  lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left mt-10">
      {productArray.map((product, index) => (
        <Link
          key={index}
          href={`/products/${product.id}`}
          className="group rounded-lg border px-5 py-4 transition-colors border-gray-30 dark:border-neutral-700  mx-5"
        >
          <div className="w-full flex justify-center h-2/3">
            <Image
              src={product.img}
              alt=""
              width={300}
              className="hero-img h-full"
            />
          </div>
          <div>
            <div className="flex gap-5 items-center mt-6 mb-3">
              <h2 className={`text-2 font-semibold w-1/2`}>{product.name}</h2>
              <p style={{ color: "red" }} className="font-bold">
                {product.price}
              </p>
            </div>
          </div>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 `}>
            This is burger pizza
          </p>
          <Button className="btn" text="ORDER NOW" />
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
