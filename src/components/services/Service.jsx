

"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export default function Service() {
  return (
    <div className="h-screen py-20 w-full">
      <div className="w-full flex justify-center items-center">
      <h1 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight items-center">Services </h1>

      </div>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Tailor Your Website
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      We create fully customized,
       responsive websites that reflect your brand identity and engage your audience.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Digital Marketing
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Improve your website’s
       ranking on Google and attract organic traffic with our proven SEO strategies.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Data Analytics
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Get real-time, interactive dashboards and reports that provide clear insights into your business performance.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        APP Development
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Create feature-rich iOS and Android apps
       that deliver seamless user experiences and drive engagement
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
    "https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQMGOm3HQ2DE0RCnIYNjs5P6LSQTJchgzdy8me4"
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
"https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQM6YABfPVAv0oc7R8D4UQTFJquLWpEyCxerhan"  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQM4T167Big9EvzHnJuiBPF7OxSftNcKmGkZXaj",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
