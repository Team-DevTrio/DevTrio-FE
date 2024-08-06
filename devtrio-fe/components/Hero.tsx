"use client"
import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

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
      >
        <div className=" absolute z-50 inset-0 flex text-black pt-48  px-4 pointer-events-none text-3xl text-center flex-col gap-6 ">
          <p className="bg-clip-text  drop-shadow-2xl text-black md:text-4xl lg:text-7xl font-bold">
            Transforming Digital Visions into Reality
          </p>
          <p className="relative text-lg text-center">
            Helping business owners and start-ups gain an unfair advantage
            through industry-leading, results-driven marketing websites
          </p>
        </div>{" "}
      </BackgroundGradientAnimation>
    </div>
  );
}
