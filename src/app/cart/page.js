"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/Footer";
import Image from "next/image";
import Burger from "../../../public/assets/burger.jpg";
import PayPalPayment from "../component/PayPalPayment";
import PaymentModal from "../component/PaymentModal";

const Cart = () => {
  const [checkout, setCheckout] = useState(false);
  const [cashModal, setCashModal] = useState(false);

  const showCashPaymentModal = () => {
    setCashModal(!cashModal);
    console.log("first");
  };

  const toggleCheckoutBtn = () => {
    setCheckout(!checkout);
  };

  return (
    <>
      <Navbar />
      <div className="flex gap-2  mt-64 mb-24 pr-20 ">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto ">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">
                      Product
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                      Name
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                      Extra
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                      Price
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">
                      Qauntity
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                      Total
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border border-solid border-blueGray-100 border-l-0 border-r-0 ">
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      <Image
                        src={Burger}
                        alt=""
                        width={100}
                        height={100}
                        className=""
                      />
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      Burger Pizza
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 "></td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      $40
                    </td>
                    <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      4
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                      $46
                    </td>
                  </tr>
                </tbody>
              </table>
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
            {!checkout && (
              <button
                className="text-[#fff] text-sm px-2 rounded-full text-center font-bold bg-[#FFAC07] w-full h-10 hover:bg-red-500 mt-10"
                onClick={toggleCheckoutBtn}
              >
                Check Out Now!
              </button>
            )}

            {checkout && (
              <>
                <button
                  onClick={showCashPaymentModal}
                  className="text-sky-500 text-sm px-2 text-center font-bold bg-[#fff] w-full h-10 hover:bg-red-500 mt-10"
                >
                  CASH ON DELIVERY
                </button>
                <PayPalPayment />
              </>
            )}
          </div>
        </div>
      </div>

      {cashModal && <PaymentModal closeModal={showCashPaymentModal} />}
      <Footer />
    </>
  );
};

export default Cart;
