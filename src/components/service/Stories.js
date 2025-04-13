"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";

import Image from "next/image";
import Slider1 from "../../../public/images/stories-1.jpg";
import Slider2 from "../../../public/images/stories-2.jpg";
import Slider3 from "../../../public/images/stories-3.jpg";

const Stories = () => {
    const swiperRef = useRef(null);

    return (
        <div className="md:px-8 lg:px-10 px-3">
            <div>
                <h2 className="md:text-[36px] text-[28px] font-[500] text-center">
                Expert Solutions for Your Business
                </h2>

                <div className="relative">
                    {/* Swiper Container */}
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={3}
                      
                        spaceBetween={50}
                    
                        centeredSlides={true}
effect="coverflow"
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 1,
                            depth: 100,
                            modifier: 1.3,
                            slideShadows: true,
                        }}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        modules={[EffectCoverflow, Navigation]}
                        className="mySwiper md:!pt-20 !pt-10 !pb-20"
                        speed={2000}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {[Slider1, Slider2, Slider3, Slider1, Slider3, Slider2].map((img, index) => (
                            <SwiperSlide key={index} className="w-[600px]">
                                <Image
                                    src={img}
                                    alt="sliders"
                                    className="w-full h-full object-contain"
                                />
                               <h2 className="text-[24px] text-center  pt-3 font-[500]">   {
                                        [
                                            "Web Development",
                                            "App Development",
                                            "Digital Marketing",
                                        ][index % 3]
                                    }

                               </h2>
                                <p className="pt-3 text-center text-[18px] font-[200]">
                                    {
                                        [
                                            "Get a fully customized website tailored to your brand and business needs. We create responsive, fast, and SEO-friendly websites that leave a lasting impression.",
                                            "We build high-performance, user-friendly mobile apps tailored to your business needs. Whether it's iOS, Android, or cross-platform, we ensure a seamless experience.",
                                            "We offer a range of digital marketing services to help businesses grow their online presence and reach their target audience.",
                                        ][index % 3]
                                    }
                                </p>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 mt-5 flex items-center gap-5 justify-center z-[999]">
                        <button className="custom-prev bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition">
                            Prev
                        </button>
                        <button className="custom-next bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stories;
