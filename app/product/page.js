"use client"

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import AnimatedText from "@/components/AnimatedText";
import AnimatedImage from "@/components/AnimatedImage";


export default function Products() {
  return (
    <section className="mt-30 mb-7 lg:mb-20 font-open ">
      <div className="mb-10">
        <div className="p-6 mx-auto max-w-3xl text-center">
          <h1 className="font-sohne font-bold text-[20px] md:text-[40px] mb-3 md:mb-4 text-primary">
            <AnimatedText text="COCOPEAT GROW BAGS" />
          </h1>
          <p className="font-open mb-6 md:mb-10 text-[16px] md:text-xl">
            Our high-performance <span className="font-black">coconut substrate grow bags</span>  are the perfect solution for hydroponic
            growers, greenhouses, and commercial farms. Designed to deliver exceptional results, our grow
            bags provide an ideal growing environment for a wide variety of crops.
          </p>
        </div>

        <div className="mx-auto w-[75%]">
          <div
            className="relative aspect-[4/3] lg:aspect-[3/1] mb-6 md:mb-10 overflow-hidden rounded-tr-[50px] rounded-bl-[50px] md:rounded-tr-[100px] md:rounded-bl-[100px] shadow-md border-2 border-secondary"
          >
            <AnimatedImage
              src="/images/products.jpg"
              alt="Cocopeat Grow Bags"
              fill
              className="object-cover will-change-transform"
              style={{ transformOrigin: "center center" }}
              priority
            />
          </div>

          <p className="font-open text-[12px] md:text-lg text-justify mb-12">
            <span className="font-bold text-sm md:text-2xl">O</span>ur premium Cocopeat Grow Bags provide ideal root development with high aeration, ensuring uniform growth and stronger plants. They support efficient nutrient uptake and are easy to use in greenhouses or outdoor gardens, making them popular among both beginners and professional growers. <br />
            <br />

            Customers can choose from cocopeat only, cocochips only, or a custom blend of cocopeat and cocochips to suit their crop needs. We also offer fully customizable orders, including blend ratios and packaging options.
            <br />
            <br />

            For growers who are not focused on commercial sales, we offer our Verdigrow-branded grow bags, providing the same high-quality coir-based products for personal or farm use.
          </p>

          <h2 className="font-titillium text-2xl md:text-3xl font-bold text-primary inline-block border-b-4 border-secondary mb-8">
            KEY BENEFITS
          </h2>
          <ul className="space-y-4 text-[14px] md:text-lg mb-16">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-secondary w-5 h-5 shrink-0 mt-1" />
              <span><span className="font-bold">Optimal Growing Conditions:</span> Stronger roots, faster growth, and healthier crops.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-secondary w-5 h-5 shrink-0 mt-1" />
              <span><span className="font-bold">Ideal Water and Air Balance:</span> Perfect moisture & aeration for plant development.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-secondary w-5 h-5 shrink-0 mt-1" />
              <span><span className="font-bold">Stable & Reliable:</span> Consistent pH and EC values for nutrient absorption.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-secondary w-5 h-5 shrink-0 mt-1" />
              <span><span className="font-bold">Sustainable and Natural:</span> Made from renewable coir, 100% eco-friendly.</span>
            </li>
          </ul>


          <h2 className="font-titillium text-2xl md:text-3xl font-bold text-primary inline-block border-b-4 border-secondary mb-6">
            APPLICATIONS
          </h2>
          <ul className="space-y-4 text-[14px] md:text-lg mb-8">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-secondary w-5 h-5 shrink-0 mt-1" />
              <span><span className="font-bold">Vegetables:</span> Tomato, pepper, cucumber, eggplant, and melons</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-secondary w-5 h-5 shrink-0 mt-1" />
              <span><span className="font-bold">Flowers:</span> Gerberas, roses, and ornamental blooms</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-secondary w-5 h-5 shrink-0 mt-1" />
              <span><span className="font-bold">Soft Fruits:</span> Strawberries, berries, and similar crops</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-secondary w-5 h-5 shrink-0 mt-1" />
              <span><span className="font-bold">Fruit Nurseries:</span> Citrus trees, olive trees, and other fruit trees</span>
            </li>
          </ul>

          <p className="text-[14px] md:text-lg mb-16">
            Ready to grow healthier, more robust crops? Contact us today to receive a customized quote.
          </p>
        </div>
      </div>

      <div className="border-t border-primary/50">
        <div className="p-6 mx-auto max-w-3xl text-center mt-12">
          <h1 className="font-sohne font-bold text-[20px] md:text-[40px] mb-3 md:mb-4 text-primary">
            <AnimatedText text="PRIVATE LABEL - RETAIL" />
          </h1>
          <p className="font-open mb-6 md:mb-10 text-[16px] md:text-xl">
            Looking to sell high-quality substrates under your own brand? <br />
            We’ll work with you to define your exact requirements and
            create a custom blend that meets your specifications.
          </p>
        </div>

        <div className="mx-auto w-[75%]">
          <div
            className="relative aspect-[4/3] lg:aspect-[3/1] mb-6 md:mb-10 overflow-hidden rounded-tr-[50px] rounded-bl-[50px] md:rounded-tr-[100px] md:rounded-bl-[100px] shadow-md border-2 border-amber-600"
          >
            <AnimatedImage
              src="/images/blog-img2.jpg"
              alt="Cocopeat Grow Bags"
              fill
              className="object-cover will-change-transform"
              style={{ transformOrigin: "center center" }}
              priority
            />
          </div>

          <p className="font-open text-[12px] md:text-lg text-justify">
            <span className="font-bold text-sm  md:text-2xl">O</span>uur custom labeling service allows you to offer premium grow bags with your
            brand identity. Choose the ideal mix of cocopeat and cocochips, select
            packaging options, and set quality specifications. We will handle the rest,
            ensuring a product that reflects your brand and meets your customers’ needs. <br />
            <br />

            Private labeling is a straightforward yet powerful concept. It involves a
            manufacturer producing goods that are then branded and sold under your
            company’s name.
            <br />
            <br />
          </p>
        </div>
      </div>
    </section>

  );
}