"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/Footer";
import Pizza from "../../../public/assets/hero-img.png";
import GreekPizza from "../../../public/assets/hero-pizza.png";
import Burger from "../../../public/assets/burger.jpg";

export default function Page() {
  const [productsDetail, setProductsDetail] = useState([
    {
      id: "1",
      image: Burger,
      title: "Burga Pizza",
      price: "20",
    },
    {
      id: "2",
      image: Burger,
      title: "Burga Pizza",
      price: "20",
    },
    {
      id: "3",
      image: Pizza,
      title: "New Pizza",
      price: "10",
    },
    {
      id: "4",
      image: GreekPizza,
      title: "Greek Pizza",
      price: "40",
    },
  ]);

  const orderDetail = [
    {
      id: "1",
      phoneNumber: "07087654326",
      price: "175",
      payment: "Cash",
      status: "Delivered",
    },
    {
      id: "2",
      phoneNumber: "09876543761",
      price: "140",
      payment: "Cash",
      status: "On the way",
    },
    {
      id: "3",
      phoneNumber: "04543235787",
      price: "50",
      payment: "Cash",
      status: "On the way",
    },
    {
      id: "4",
      phoneNumber: "07987654653",
      price: "150",
      payment: "Cash",
      status: "Preparing",
    },
    {
      id: "5",
      phoneNumber: "08167432266",
      price: "160",
      payment: "Cash",
      status: "Preparing",
    },
  ];

  const handleDelete = (productId) => {
    // Filter out the product with the specified id
    const updatedProducts = productsDetail.filter(
      (product) => product.id !== productId
    );

    // Update the state with the new array of products
    setProductsDetail(updatedProducts);
  };

  return (
    <div>
      <Navbar />
      <div className="mt-40 p-4">
        <div>
          <h3 className="font-bold mb-4 text-lg px-5">Products</h3>
        </div>
        <div className="flex flex-col lg:flex-row items-start mx-auto  mb-20  gap-4">
          <div className="lg:w-1/2 w-full mb-10">
            <div className="px-5">
              <table className="w-[100%] table-auto border-collapse border-b border-gray-300">
                <thead>
                  <tr>
                    <th className="border-b text-left p-3">Image</th>
                    <th className="border-b text-left p-3">Id</th>
                    <th className="border-b text-left p-3">Title</th>
                    <th className="border-b text-left p-3">Price</th>
                    <th className="border-b text-left p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {productsDetail.map((product) => (
                    <tr
                      key={product.id}
                      className="flex-col justify-start items-start"
                    >
                      <td className="border-b p-3 whitespace-nowrap align-top">
                        <Image
                          src={product.image}
                          alt="pizza-icon"
                          width={100}
                          height={100}
                        />
                      </td>
                      <td className="border-b p-3 whitespace-nowrap align-top">
                        {product.id}
                      </td>
                      <td className="border-b p-3 whitespace-nowrap align-top">
                        {product.title}
                      </td>
                      <td className="border-b p-3 whitespace-nowrap align-top">
                        ${product.price}
                      </td>
                      <td className="border-b p-3 whitespace-nowrap align-top">
                        <button className="mr-3 bg-green-500 text-white px-1 cursorr-pointer rounded-sm">
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-1 cursor-pointer rounded-sm"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:w-1/2 w-full mb-10">
            <div className="px-5">
              <table className="w-[100%] table-auto border-collapse border-b border-gray-300">
                <thead>
                  <tr>
                    <th className="border-b text-left p-2">Id</th>
                    <th className="border-b text-left p-2">Customer</th>
                    <th className="border-b text-left p-2">Total</th>
                    <th className="border-b text-left p-2">Payment</th>
                    <th className="border-b text-left p-3">Status</th>
                    <th className="border-b text-left p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetail.map((order) => (
                    <tr
                      key={order.id}
                      className="flex-col justify-start items-start"
                    >
                      <td className="border-b p-2 whitespace-nowrap align-top">
                        {order.id}
                      </td>
                      <td className="border-b p-2 whitespace-nowrap align-top">
                        {order.phoneNumber}
                      </td>
                      <td className="border-b p-2 whitespace-nowrap align-top">
                        ${order.price}
                      </td>
                      <td className="border-b p-2 whitespace-nowrap align-top">
                        {order.payment}
                      </td>
                      <td className="border-b p-2 whitespace-nowrap align-top">
                        {order.status}
                      </td>
                      <td className="border-b py-2 whitespace-nowrap align-top">
                        <button className="bg-green-500 text-white px-1 cursor-pointer rounded-sm justify-center item-center">
                          Next Stage
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
