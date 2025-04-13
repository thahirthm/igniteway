import React from "react";
import "./Content.css";

function Content() {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16">
      {/* Heading */}
      <h2 className="heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
        Android and{" "}
        <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
          IOS Apps
        </span>
      </h2>

      {/* Paragraph */}
      <p className="para text-gray-400 text-sm sm:text-base md:text-md lg:text-lg max-w-[90%] md:max-w-2xl">
        Transform your business with IgniteWay, offering fully branded native
        apps for both Android and iOS. IgniteWay delivers comprehensive mobile
        commerce capabilities, designed to help you boost customer acquisition,
        enhance retention, and provide a superior shopping experience on every
        device.
      </p>
    </div>
  );
}

export default Content;
