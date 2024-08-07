"use client";
import React from "react";
import { TeamCarousel } from "./TeamCarousel";
import Image from "next/image";

export default function Team() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <h5 className="text-center text-5xl font-bold ">
          The DevTrio team
        </h5>
        <h5 className="text-center text-xl mb-4 font-normal pb-10">About us</h5>
        <div className="flex flex-row items-center gap-6">
          <div className="relative w-1/2 h-96">
            <Image
              alt="a team working with laptops"
              src={"/images/team.jpg"}
              objectFit="cover"
              layout="fill"
              className="relative rounded-md"
            />
          </div>
          <div className="w-1/2">
            <p className="mb-4">
              Welcome to DevTrio IT Solutions Ltd. We are passionate about
              turning your digital visions into tangible success. Based in the
              UK, with a remote team in Sri Lanka, we specialize in providing
              innovative web development, digital design, and mobile app
              development services. Our mission is to empower businesses with
              high-quality, client-focused solutions that drive growth and
              enhance digital.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              More about us
            </button>
          </div>
        </div>
      </div>
      <h4 className="font-semibold text-3xl pb-6">
        Meet our team of creators, designers, and problem solvers
      </h4>
      <TeamCarousel />
    </div>
  );
}
