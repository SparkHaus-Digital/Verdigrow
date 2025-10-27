"use client"

import { FaCheckCircle } from "react-icons/fa";
import AnimatedImage from "@/components/AnimatedImage";
import { motion } from "framer-motion"
import { useEffect } from "react"

export default function Products() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }, [])

  // Fade-up animation variant
  const fadeUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const benefits = [
    { text: ["Optimal Growing Conditions:", "Stronger roots, faster growth, and healthier crops."], bold: [0] },
    { text: ["Ideal Water and Air Balance:", "Perfect moisture & aeration for plant development."], bold: [0] },
    { text: ["Stable & Reliable:", "Consistent pH and EC values for nutrient absorption."], bold: [0] },
    { text: ["Sustainable and Natural:", "Made from renewable coir, 100% eco-friendly."], bold: [0] },
  ]

  const applications = [
    { text: ["Vegetables:", "Tomato, pepper, cucumber, eggplant, and melons."], bold: [0] },
    { text: ["Flowers:", "Gerberas, roses, and ornamental blooms"], bold: [0] },
    { text: ["Soft Fruits:", "Strawberries, berries, and similar crops."], bold: [0] },
    { text: ["Fruit Nurseries:", "Citrus trees, olive trees, and other fruit trees."], bold: [0] },
  ]

  return (
    <section id="cocopeat-grow-bags" className="mt-30 mb-7 lg:mb-20 font-open ">
      <div className="mb-10">
        <div className="p-6 mx-auto max-w-3xl text-center">
          {/* Text Animation Suggestion 01 */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-sohne font-bold text-2xl md:text-[40px] mb-3 md:mb-4 text-primary"
          >
            COCOPEAT GROW BAGS
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-open mb-6 md:mb-10 text-[16px] md:text-xl"
          >
            Our high-performance <span className="font-black">coconut substrate grow bags</span>  are the perfect solution for hydroponic
            growers, greenhouses, and commercial farms. Designed to deliver exceptional results, our grow
            bags provide an ideal growing environment for a wide variety of crops.
          </motion.p>
        </div>

        <div className="mx-auto w-[75%]">
          <motion.div variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative aspect-[4/3] lg:aspect-[3/1] mb-6 md:mb-10 overflow-hidden rounded-tr-[50px] rounded-bl-[50px] md:rounded-tr-[100px] md:rounded-bl-[100px] shadow-md border-2 border-secondary"
          >
            <AnimatedImage
              src="/images/products.avif"
              alt="Cocopeat Grow Bags"
              fill
              className="object-cover will-change-transform"
              style={{ transformOrigin: "center center" }}
            />
          </motion.div>

          <motion.p variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} className="font-open text-[12px] md:text-lg text-justify mb-12">
            <span className="font-bold text-sm md:text-2xl">O</span>ur premium Cocopeat Grow Bags provide ideal root development with high aeration, ensuring uniform growth and stronger plants. They support efficient nutrient uptake and are easy to use in greenhouses or outdoor gardens, making them popular among both beginners and professional growers. <br />
            <br />

            Customers can choose from cocopeat only, cocochips only, or a custom blend of cocopeat and cocochips to suit their crop needs. We also offer fully customizable orders, including blend ratios and packaging options.
            <br />
            <br />

            For growers who are not focused on commercial sales, we offer our Verdigrow-branded grow bags, providing the same high-quality coir-based products for personal or farm use.
          </motion.p>

          <h2 className="font-titillium text-2xl md:text-3xl font-bold text-primary inline-block border-b-4 border-secondary mb-8">
            KEY BENEFITS
          </h2>

          <motion.ul variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 text-[14px] md:text-lg mb-16">

            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheckCircle className="text-secondary mt-[3px]" />
                <span>
                  {benefit.text.map((t, j) =>
                    benefit.bold.includes(j) ? (
                      <span key={j} className="font-semibold">{t} </span>
                    ) : (
                      <span key={j}>{t} </span>
                    )
                  )}
                </span>
              </li>
            ))}
          </motion.ul>


          <h2 className="font-titillium text-2xl md:text-3xl font-bold text-primary inline-block border-b-4 border-secondary mb-6">
            APPLICATIONS
          </h2>
          <motion.ul variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 text-[14px] md:text-lg mb-8">
            {applications.map((application, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheckCircle className="text-secondary mt-[3px]" />
                <span>
                  {application.text.map((t, j) =>
                    application.bold.includes(j) ? (
                      <span key={j} className="font-semibold">{t} </span>
                    ) : (
                      <span key={j}>{t} </span>
                    )
                  )}
                </span>
              </li>
            ))}

          </motion.ul>

          <motion.p variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} className="text-[14px] md:text-lg mb-16">
            Ready to grow healthier, more robust crops? Contact us today to receive a customized quote.
          </motion.p>
        </div>
      </div>

      <div id="private-label" className="border-t border-primary/50">
        <div className="p-6 mx-auto max-w-3xl text-center mt-12">
          <motion.h1 initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }} className="font-sohne font-bold text-[20px] md:text-[40px] mb-3 md:mb-4 text-primary">
            PRIVATE LABEL - RETAIL
          </motion.h1>
          <motion.p variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-open mb-6 md:mb-10 text-[16px] md:text-xl">
            Looking to sell high-quality substrates under your own brand? <br />
            We’ll work with you to define your exact requirements and
            create a custom blend that meets your specifications.
          </motion.p>
        </div>

        <div className="mx-auto w-[75%]">
          <motion.div variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative aspect-[4/3] lg:aspect-[3/1] mb-6 md:mb-10 overflow-hidden rounded-tr-[50px] rounded-bl-[50px] md:rounded-tr-[100px] md:rounded-bl-[100px] shadow-md border-2 border-amber-600"
          >
            <AnimatedImage
              src="/images/blog-img2.avif"
              alt="Cocopeat Grow Bags"
              fill
              className="object-cover will-change-transform"
              style={{ transformOrigin: "center center" }}
            />
          </motion.div>

          <motion.p variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} className="font-open text-[12px] md:text-lg text-justify">
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
          </motion.p>
        </div>
      </div>
    </section>

  );
}