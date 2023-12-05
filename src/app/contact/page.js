import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col h-screen">
        <h2 className="font-bold text-3xl">Welcome to our Contact Page!</h2>
      </div>
      <Footer />
    </>
  );
};

export default page;
