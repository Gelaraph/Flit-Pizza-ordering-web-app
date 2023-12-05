"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
import LogoImage from "../../../public/assets/pizza-logo.png";
import Image from "next/image";
import "./nav.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const pathname = usePathname();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="">
      <div
        className="container fixed top-0 z-10 max-w-full min-w-full mx-auto px-5 flex justify-between items-center pt-3 pb-1.5 bg-white h-100"
        style={{
          backgroundImage: "url('/assets/pizza-header-img.png')",
          backgroundPosition: "13em -1.5em",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="logo">
          <Image src={LogoImage} width={50} height={50} alt="website logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <CiMenuBurger />
        </div>
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="/" className={pathname == "/" ? "active" : ""}>
                HOME
              </a>
            </li>
            <li>
              <a
                href="/products"
                className={pathname == "/products" ? "active" : ""}
              >
                PRODUCTS
              </a>
            </li>
            <li>
              <a
                className={pathname === "/about" ? "active-link" : ""}
                href="/about"
              >
                PAGES
              </a>
            </li>
            <li>
              <a
                className={pathname === "/about" ? "active-link" : ""}
                href="/about"
              >
                BLOG
              </a>
            </li>
            <li>
              <a
                className={pathname === "/about" ? "active-link" : ""}
                href="/about"
              >
                CONTACT
              </a>
            </li>
            <div className="flex gap-5 items-center relative">
              <CiSearch className="text-2xl" />

              <a
                href="/cart"
                className={pathname === "/cart" ? "active-cart" : ""}
              >
                <div className="flex">
                  <IoCartSharp
                    className="text-4xl"
                    style={{
                      color: "blue",
                    }}
                  />
                  <div
                    className=" rounded-full w-6 h-6 flex items-center justify-center text-xs"
                    style={{
                      color: "#fff",
                      backgroundColor: "red",
                      marginLeft: "-1.5em",
                      marginTop: "-0.5em",
                    }}
                  >
                    34
                  </div>
                </div>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// export const PrimaryNav = styled.nav`
//   .nav-elements ul a.active {
//     color: red;
//     font-weight: 500;
//     position: relative;
//   }

//   .nav-elements ul a.active:not(.no-underline)::after {
//     content: "";
//     position: absolute;
//     bottom: -4px;
//     left: 0;
//     width: 100%;
//     height: 2px;
//     background-color: #021543;
//   }

//   @media (max-width: 768px) {
//     .nav-elements ul li:not(:last-child) {
//       margin-right: 30px;
//     }
//   }

//   @media (max-width: 600px) {
//     .menu-icon {
//       display: block;
//       cursor: pointer;
//     }

//     .nav-elements {
//       position: absolute;
//       right: 0;
//       top: 60px;
//       background-color: #fff;
//       width: 0;
//       height: calc(100vh - 60px);
//       transition: all 0.3s ease-in;
//       overflow: hidden;
//     }

//     .nav-elements.active {
//       width: 270px;
//     }

//     .nav-elements ul {
//       display: flex;
//       flex-direction: column;
//     }

//     .nav-elements ul li {
//       margin-right: unset;
//       margin-top: 22px;
//     }
//   }
// `;

export default Navbar;
