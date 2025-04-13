"use client";

import { HorizontalScrollCarousel } from "@/components/ui/horizontal-scroll-carousel";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

const images = [
  "https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQMZQEdgRrY7LJ9eqvB1ajVKuU0Wbk4HxwtfpQP",
  "https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQMzJQ7xaNoZ3G2rHXoPdKuFTjBv5QNVW4mREah",

  "https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQMJeCxOsbsQmL4FIPjOkhuG8p6UKY3qb0n9V2v",
  "https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQM89EIm91gqae68lmn9dtJW2FKbLczfiBCI3SZ",
];

function Scroll() {
  return (
    <div>
      {/* Image visible only on mobile screens */}
      <motion.div
  className="group  mt-[30px] flex md:hidden relative h-[550px] w-[full] overflow-hidden rounded-lg items-center justify-center"
>
  <Image
    src="https://p0s6j4vdsr.ufs.sh/f/kIhPyf5uPqQMZQEdgRrY7LJ9eqvB1ajVKuU0Wbk4HxwtfpQP"
    fill
    className="object-cover object-center"
    alt="carousel image"
  />
</motion.div>


      {/* Horizontal scroll carousel visible only on medium and larger screens */}
      <div className="hidden md:flex h-full bg-black">
        <HorizontalScrollCarousel images={images} />
      </div>
    </div>
  );
}

export default Scroll;
