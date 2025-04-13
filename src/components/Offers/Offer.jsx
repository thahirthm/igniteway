import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";
import { HyperText } from "../ui/hyper-text";

function Offer() {
  return (
    <div className=" w-full  scale-90 ">
      <div className=" w-full">
        <HyperText className="text-5xl font-bold text-white z-50" text="Why us" />
        <FeaturesSectionWithHoverEffects />
      </div>
    </div>
  );
}

export default Offer;
