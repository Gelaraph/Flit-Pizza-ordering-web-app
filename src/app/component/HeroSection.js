"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import HeroImage from "../../../public/assets/hero-img.png";
import HeroOnionImage from "../../../public/assets/pizza-onion.png";
import HerobottomPizza from "../../../public/assets/hero-pizza.png";
import HeroPizzaBorder from "../../../public/assets/pizza-border.png";
import OnionBulb from "../../../public/assets/onion-bulb.png";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div
          className="hero-text pl-5 pt-10 w-1/2 flex flex-col justify-center"
          style={{ marginTop: "-5em" }}
        >
          <div>
            <h1 className="text-7xl mb-3">
              Handmade, <br />
              With an Extra
              <br /> Pinch of <span style={{ color: "red" }}>Love</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the
              <br /> printing and typesetting industry.
            </p>
          </div>

          <Button className="hero-btn" text="ORDER NOW" />
        </div>
        <div className="hero-image-cont">
          <div
            className="hero-image-cont-bg"
            style={{
              backgroundColor: "rgb(249, 179, 29)",
              clipPath: "circle(42.3% at 96% 55%)",
              width: "800px",
              height: "800px",
            }}
          ></div>
          <Image
            src={HeroImage}
            alt=""
            height={500}
            width={450}
            style={{ position: "absolute", top: "12em", right: "14em" }}
            className="hero-img"
          />
          <Image
            src={HerobottomPizza}
            alt=""
            style={{ position: "absolute", top: "44em", right: "8em" }}
            className="hero-bottom-img"
            height={200}
            width={200}
          />{" "}
          <Image
            src={HeroOnionImage}
            alt=""
            style={{ position: "absolute", top: "44em", right: "38em" }}
            className="hero-onion-img"
            height={100}
            width={100}
          />
        </div>
      </div>
      <div className="tasty-section flex items-center gap-20 mb-10">
        <Image
          src={HeroPizzaBorder}
          alt=""
          className=""
          height={300}
          width={300}
        />
        <div className="mt-5">
          <h3 className=" font-bold text-lg mb-5">
            Daily fresh and
            <br /> always tasty
          </h3>
          <p>
            There are man variations of passages of <br />
            lorem ipsum available, but the majority
            <br /> have
          </p>
        </div>
        <Image
          src={OnionBulb}
          alt=""
          style={{ marginTop: "5em" }}
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default HeroSection;
