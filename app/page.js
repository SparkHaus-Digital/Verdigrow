"use client";

import Link from "next/link";
import TaglineSection from "@/components/TaglineSection";
import RotatingCircle from "@/components/RotatingCircle";
import { IoMdArrowForward } from "react-icons/io";

import { TiLeaf } from "react-icons/ti";
import { GrGroup } from "react-icons/gr";
import { GiRecycle } from "react-icons/gi";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineCube } from "react-icons/hi";

// modal view icon
import { HiOutlineCheckBadge } from "react-icons/hi2";

import { motion } from "framer-motion";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Landing Section */}
      <section
        className="relative h-[80vh] md:h-screen rounded-b-4xl shadow-xl overflow-hidden"
        style={{
          backgroundImage: "url('/images/landing-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute bottom-10 md:bottom-20 left-0 right-0 flex flex-col md:flex-row md:justify-between items-start md:items-center max-w-6xl mx-auto px-4 md:px-6 gap-6"
        >
          <div className="text-left">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl text-white leading-tight font-sohne"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              HELPING EVERY SEED<br />
              TAKE ROOT
            </motion.h1>

            <motion.p
              className="font-open font-normal text-base sm:ext-lg mt-2 text-gray-100 "
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              Your harvest, Your way
            </motion.p>
          </div>

          {/* round button */}
          <button
            className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-30 md:w-30 flex items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-md hover:bg-primary text-white transition mt-4 md:mt-0 md:ml-auto">
            <IoMdArrowForward className="text-2xl sm:text-3xl md:text-4xl" />
          </button>
        </div>
      </section>



      {/* Animated Tagline Section */}
      <TaglineSection className="" />

      {/* Product Section */}
      <ProductCard />

      {/* Why Choose Us Section */}
      <section className="px-8 md:px-12 my-20 md:mx-12">
        <div className="border-2 border-secondary rounded-tr-[75px] rounded-bl-[75px] md:rounded-tr-[100px] md:rounded-bl-[100px] pt-12 pb-12 px-4 md:px-10 relative">
          <div className="flex justify-between items-start">
            <div className="pb-10">
              <h2 className="font-sohne text-lg md:text-[40px] text-left mb-2 text-primary">WHY CHOOSE VERDIGROW?</h2>
              <p className="font-titillium font-normal text-sm md:text-xl text-gray-700 ">
                <span className="font-titillium text-primary font-semibold">Because quality matters:</span> our grow bags are crafted with EC, pH, moisture, <br /> and sand testing for consistent crop success.
              </p>
            </div>
            {/* Rotating animation in top right */}
            <div className="hidden lg:block absolute top-4 right-8">
              <RotatingCircle />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
            {[
              { title: "100% Eco Friendly", desc: "Produced from natural , renewable coconut husks", icon: <TiLeaf className="w-8 h-8 sm:w-12 sm:h-12  text-primary" /> },
              { title: "Committees to sustainability", desc: "Focused on long-term environmental impact.", icon: <GiRecycle className="w-8 h-8 sm:w-12 sm:h-12  text-primary" /> },
              { title: "Empowering Communities", desc: "supporting Sri Lanka’s coconut farming families.", icon: <GrGroup className="w-8 h-8 sm:w-12 sm:h-12  text-primary" /> },
              { title: "Reliable Quality Control", desc: "Tested at every stage for consistent quality.", icon: <HiOutlineCheckCircle className="w-8 h-8 sm:w-12 sm:h-12  text-primary" /> },
              { title: "Customizable Solutions", desc: "Sizes, blends, and packaging made to order.", icon: <IoSettingsOutline className="w-8 h-8 sm:w-12 sm:h-12  text-primary" /> },
              { title: "Sample Availability", desc: "Request samples before placing bulk orders.", icon: <HiOutlineCube className="w-8 h-8 sm:w-12 sm:h-12  text-primary" /> },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="pb-2">{item.icon}</div>

                <h3 className="font-open font-semibold text-base md:text-xl pb-2">{item.title}</h3>
                <p className="font-open text-sm md:text-lg text-center text-gray-600">{item.desc}</p>
              </div>

            ))}
          </div>
        </div>
      </section>
    </div>

  );
}
