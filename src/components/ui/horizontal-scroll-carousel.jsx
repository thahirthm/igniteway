"use client";
import * as React from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

const HorizontalScrollCarousel = ({ images }) => {
  const targetRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Adjusted transform to center the first image
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-150%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          ref={containerRef}
          className="flex gap-x-20"
        >
          {images.map((src, i) => (
            <Card
              src={src}
              key={i}
              index={i}
              containerRef={containerRef}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ src, index, containerRef, scrollYProgress }) => {
  // Track the position of the image relative to the viewport
  const imageRef = React.useRef(null);

  // Calculate the distance of the image from the center of the viewport
  const distanceFromCenter = useTransform(scrollYProgress, (progress) => {
    if (!containerRef.current || !imageRef.current) return 1;

    const containerRect = containerRef.current.getBoundingClientRect();
    const imageRect = imageRef.current.getBoundingClientRect();

    // Calculate the center of the viewport
    const viewportCenter = window.innerWidth / 2;

    // Calculate the center of the image
    const imageCenter = imageRect.left + imageRect.width / 2;

    // Distance from the viewport center
    const distance = Math.abs(viewportCenter - imageCenter);

    // Normalize the distance to a scale factor (0 = center, 1 = far away)
    return Math.max(0, 1 - distance / (window.innerWidth / 2));
  });

  // Apply scaling based on distance from the center
  const scale = useTransform(distanceFromCenter, [0, 1], [1, 1.5]);

  // Smooth the scale animation
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      ref={imageRef}
      style={{ scale: smoothScale }}
      className="group relative h-[550px] w-[200px] overflow-hidden rounded-lg"
    >
      <Image
        src={src}
        fill
        style={{ objectFit: "cover" }}
        alt="carousel image"
      />
    </motion.div>
  );
};

export { HorizontalScrollCarousel };