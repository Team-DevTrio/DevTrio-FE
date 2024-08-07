"use client";
import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import Image from "next/image";

export default function Hero() {
  const green = "143, 211, 166";
  const blue = "111, 188, 237";
  const indigo = "133, 160, 242";
  return (
    <div>
      <BackgroundGradientAnimation
        gradientBackgroundStart={"rgb(248, 253, 251)"}
        gradientBackgroundEnd={"rgb(248, 253, 251)"}
        firstColor={green}
        secondColor={green}
        thirdColor={blue}
        fourthColor={green}
        fifthColor={indigo}
        pointerColor={indigo}
        className="max-w-screen-2xl"
      >
        <div className=" absolute z-50 inset-0 flex text-black px-4 pointer-events-none text-3xl text-center flex-col gap-6 ">
          <div className="flex flex-row">
            <Image
              src={"/svgs/DevTrioLogo.svg"}
              alt={"DevTrio UK Logo"}
              width={100}
              height={50}
            />
          </div>
          <div className="pt-48">
            <p className=" drop-shadow-2xl text-black md:text-4xl lg:text-7xl font-bold">
              Transforming Digital Visions into Reality
            </p>
            <p className=" text-lg text-center pt-4">
              Helping business owners and start-ups gain an unfair advantage
              through industry-leading, results-driven marketing websites
            </p>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
