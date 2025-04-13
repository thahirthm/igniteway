import About from "@/components/About/About";
import Content from "@/components/content/Content";

import Footer from "@/components/footer/footer";
import ContactForm from "@/components/form/Contact";
import Hero from "@/components/hero/Hero";
import SubHero from "@/components/hero/SubHero";
import Navbar from "@/components/Navbar/Navbar";
import { FaqSectionDemo } from "@/components/new/New";

import Offer from "@/components/Offers/Offer";
import { AnimatedTestimonialsDemo } from "@/components/pre/Pre";
import Scroll from "@/components/scroller/Scroll";
import Stories from "@/components/service/Stories";
import Service from "@/components/services/Service";
import Show from "@/components/show/Show";
import TestiMonial from "@/components/testimonials/TestiMonial";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <Hero id="Home" />

      <div className="w-full flex justify-center" id="About">
        <About />
      </div>
      {/* <div >
        <Show />
      </div> */}

      <Content />
      <Scroll />

      {/* <AnimatedTestimonialsDemo /> */}
      <Stories />
      <TestiMonial />
      <Offer />
      <div className="w-full flex justify-center ">
        <FaqSectionDemo />
      </div>
      <ContactForm />

      <div className="mt-auto" id="Contact">
        <Footer />
      </div>
    </div>
  );
}
