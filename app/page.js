"use client";

import Link from "next/link";
import TaglineSection from "@/components/TaglineSection";
import RotatingCircle from "@/components/RotatingCircle";
import { IoMdArrowForward } from "react-icons/io";
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
              className="font-h1 font-black text-6xl text-white leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              HELPING EVERY SEED<br />
              TAKE ROOT
            </motion.h1>

            <motion.p
              className="font-body text-lg mt-2 text-gray-100"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              Empowering farmers with cocopeat for healthier, greener growth
            </motion.p>
          </div>

          <button className="h-24 w-24 flex items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-md hover:bg-background hover:text-primary text-white transition">
            <IoMdArrowForward className="text-4xl" />
          </button>
        </div>
      </section>

      {/* Animated Tagline Section */}
      <TaglineSection />

      {/* Product Section */}
      <section className="px-6 md:px-12 my-20 mx-12">
        <h2 className="font-heading font-semibold text-3xl mb-10">PRODUCTS</h2>
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
      <section className="px-6 md:px-12 my-20 mx-12">
        <div className="border-2 border-secondary rounded-tr-4xl rounded-bl-4xl p-6 relative">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-h1 font-semibold text-3xl text-left mb-2 text-primary">WHY CHOOSE VERDIGROW?</h2>
              <p className="font-body text-gray-700 mb-8">
                <span className="text-primary">Because quality matters:</span> our grow bags are crafted with EC, pH, moisture, and sand testing for consistent crop success.
              </p>
            </div>
            {/* Rotating animation in top right */}
            <div className="hidden md:block absolute top-6 right-6">
              <RotatingCircle />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "EC Tested", desc: "Ensures balanced nutrients." },
              { title: "pH Balanced", desc: "Optimized for healthy growth." },
              { title: "Moisture Control", desc: "Retains the right water levels." },
              { title: "Low Sand", desc: "Cleaner substrate for crops." },
              { title: "Eco-Friendly", desc: "Sustainable farming choice." },
              { title: "High Yield", desc: "Boosts productivity." },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="h-8 w-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-heading text-lg text-primary">{item.title}</h3>
                  <p className="font-body text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
