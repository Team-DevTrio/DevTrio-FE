"use client";
import React from "react";
import { TeamCarousel } from "./TeamCarousel";

export default function Team() {
  return (
    <div className="flex flex-col items-center">
      <h4 className="font-semibold text-3xl pb-6">Meet our team of creators, designers, and problem solvers</h4>
      <TeamCarousel  />
    </div>
  );
}
