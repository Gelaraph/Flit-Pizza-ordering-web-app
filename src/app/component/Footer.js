"use client";
import React from "react";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex gap-5 bg-orange-100 justify-between py-10 px-5 mt-10">
      <div>
        <h4 className="font-bold text-lg">INFORMATION</h4>
        <ul>
          <li className="mt-2 opacity-50 mb-2">Home</li>
          <li className="mt-2 opacity-50 mb-2">Blog</li>
          <li className="mt-2 opacity-50 mb-2">About Us</li>
          <li className="mt-2 opacity-50 mb-2">Menu</li>
          <li className="mt-2 opacity-50 mb-2">Contact Us</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg">TOP ITEMS</h4>
        <ul>
          <li className="mt-2 opacity-50 mb-2">Pepperoni</li>
          <li className="mt-2 opacity-50 mb-2">Swiss Mushroom</li>
          <li className="mt-2 opacity-50 mb-2">Barbeque Chicken</li>
          <li className="mt-2 opacity-50 mb-2">Vegetarian</li>
          <li className="mt-2 opacity-50 mb-2">Ham & Cheese</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg">OTHERS</h4>
        <ul>
          <li className="mt-2 opacity-50 mb-2">Checkout</li>
          <li className="mt-2 opacity-50 mb-2">Cart</li>
          <li className="mt-2 opacity-50 mb-2">Product</li>
          <li className="mt-2 opacity-50 mb-2">Locations</li>
          <li className="mt-2 opacity-50 mb-2">Legal</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg">SOCIAL MEDIA</h4>
        <div className="mt-5 flex mb-5 gap-5">
          <AiFillFacebook className="facebook text-4xl text-[#3554A3]" />
          <FaSquarePinterest className="pinterest text-4xl text-[#C92526]" />
          <AiFillTwitterSquare className="twitter text-4xl text-[#31A8E4]" />
          <FaSquareInstagram className="instagram text-4xl text-[#E24A34]" />
        </div>
        <p>Signup and get exclusive offers and coupon codes</p>
        <button className="text-[#fff] mt-10 text-sm font-bold p-2 footer-btn bg-[#FFAC07] rounded-full w-32 h-14">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Footer;
