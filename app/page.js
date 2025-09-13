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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Landing Section */}
      <section
        className="relative h-screen rounded-b-4xl shadow-xl overflow-hidden"
        style={{
          backgroundImage: "url('/images/landing-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute bottom-20 left-5 right-5 flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-left">
            <motion.h1
              className="text-6xl text-white leading-tight font-sohne"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              HELPING EVERY SEED<br />
              TAKE ROOT
            </motion.h1>

            <motion.p
              className="font-open font-semibold text-lg mt-2 text-gray-100 "
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              Empowering farmers with cocopeat for healthier, greener growth
            </motion.p>
          </div>

          <button className="h-30 w-30 flex items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-md hover:bg-gradient-to-r hover:from-[#227C3B] hover:to-[#42CD36] text-white transition">
            <IoMdArrowForward className="text-4xl" />
          </button>
        </div>
      </section>

       <div className="px-6 md:px-[120px]">

      {/* Animated Tagline Section */}
      <TaglineSection />

      {/* Product Section */}
      <section className="px-6 md:px-12 my-20 mx-12">
        <h2 className="font-heading font-titillium font-semibold text-3xl mb-10">PRODUCTS</h2>
        <div className="bg-primary rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start text-white">
          <div className="flex-1 space-y-4">
            <h3 className="font-heading text-xl">COCOPEAT GROW BAGS</h3>
            <p className="font-body text-sm md:text-base">
              High-yield, eco-smart grow bags <br />for greenhouse and hydroponic success.
            </p>
            <Link
              href="/products"
              className="inline-block bg-secondary px-6 py-2 rounded-lg font-body hover:bg-background hover:text-primary transition duration-500 ease-in-out"
            >
              Discover More
            </Link>
          </div>
          <div className="flex items-end">
            <Image src="/images/product-sample.png" alt="Cocopeat Grow Bags" height={400} width={400} className="rounded-lg"/>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-8 md:px-12 my-20 mx-12">
        <div className="border-2 border-secondary rounded-tr-[100px] rounded-bl-[100px] pt-12 pb-12 px-10 relative">
          <div className="flex justify-between items-start">
            <div className="pb-10">
              <h2 className="font-sohne font-semibold text-[40px] text-left mb-2 text-primary">WHY CHOOSE VERDIGROW?</h2>
              <p className="font-titillium font-normal text-2xl text-gray-700 mb-8">
                <span className="font-titillium text-primary font-semibold">Because quality matters:</span> our grow bags are crafted with EC, pH, moisture, and <br/> sand testing for consistent crop success.
              </p>
            </div>
            {/* Rotating animation in top right */}
            <div className="hidden md:block absolute top-4 right-8">
              <RotatingCircle />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
            {[
              { title: "100% Eco Friendly", desc: "Produced from natural , renewable coconut husks", icon: <TiLeaf className="text-3xl" /> },
              { title: "Committees to sustainability", desc: "Focused on long-term environmental impact.", icon: <GiRecycle className="text-3xl" /> },
              { title: "Empowering Communities", desc: "supporting Sri Lanka’s coconut farming families.", icon: <GrGroup className="text-3xl" /> },
              { title: "Reliable Quality Control", desc: "Tested at every stage for consistent quality.", icon: <HiOutlineCheckCircle className="text-3xl" /> },
              { title: "Customizable Solutions", desc: "Sizes, blends, and packaging made to order." , icon: <IoSettingsOutline className="text-3xl" />},
              { title: "Sample Availability", desc: "Request samples before placing bulk orders.", icon: <HiOutlineCube className="text-3xl" /> },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-3 pb-10">
                 <div>{item.icon}</div>
                
                  <h3 className="font-open font-semibold text-xl">{item.title}</h3>
                  <p className="font-open text-xl text-gray-600">{item.desc}</p>
                </div>
              
            ))}
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
