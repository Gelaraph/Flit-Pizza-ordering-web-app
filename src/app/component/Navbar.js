"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { CiMenuBurger } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
import LogoImage from "../../../public/assets/pizza-logo.png";
import Image from "next/image";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const pathname = usePathname();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <PrimaryNav>
      <div className="container">
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
    </PrimaryNav>
  );
};

export const PrimaryNav = styled.nav`
  .container {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 2.2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 3.2em;
    padding-bottom: 1.5em;
    background-image: url("/assets/pizza-header-img.png");
    background-position: 13em -1.5em;
    background-repeat: no-repeat;
    background-color: #fff;
    height: 100px;
  }

  .navbar {
    height: 60px;
    background-color: #021543;
    position: relative;
  }
  .logo {
  }

  .menu-icon {
    display: none;
  }

  .nav-elements {
    padding-left: 2em;
  }

  .nav-elements ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
  }

  .nav-elements ul li:not(:last-child) {
    margin-right: 60px;
  }

  .nav-elements ul a {
    font-size: 16px;
    font-weight: 400;
    font-weight: bold;
    text-decoration: none;
  }

  .nav-elements ul a.active {
    color: red;
    font-weight: 500;
    position: relative;
  }

  .nav-elements ul a.active:not(.no-underline)::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #021543;
  }

  ul {
    align-items: center;
  }

  @media (max-width: 768px) {
    .nav-elements ul li:not(:last-child) {
      margin-right: 30px;
    }
  }

  @media (max-width: 600px) {
    .menu-icon {
      display: block;
      cursor: pointer;
    }

    .nav-elements {
      position: absolute;
      right: 0;
      top: 60px;
      background-color: #fff;
      width: 0;
      height: calc(100vh - 60px);
      transition: all 0.3s ease-in;
      overflow: hidden;
    }

    .nav-elements.active {
      width: 270px;
    }

    .nav-elements ul {
      display: flex;
      flex-direction: column;
    }

    .nav-elements ul li {
      margin-right: unset;
      margin-top: 22px;
    }
  }
`;

export default Navbar;
