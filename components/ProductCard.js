"use client"

import Link from "next/link"
import AnimatedImage from "./AnimatedImage"

const products = [
  {
    id: 1,
    title: "COCOPEAT GROW BAGS",
    description:
      "High-yield, eco-smart grow bags for greenhouse and hydroponic success.",
    image: "/images/product-sample.avif",
    link: "/product#cocopeat-grow-bags",
  },
  {
    id: 2,
    title: "PRIVATE LABEL – RETAIL",
    description:
      "Custom-branded premium substrates tailored to your business needs.",
    image: "/images/blog-img2.avif",
    link: "/product#private-label",
  },
]

export default function ProductCard() {
  return (
    <section className="px-8 md:px-12 my-20 md:mx-12">
      <h2 className="font-titillium font-semibold text-3xl mb-10 text-left">
        PRODUCTS
      </h2>

      {/* Grid for multiple products */}
      <div className="grid sm:grid-cols-2 gap-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-primary rounded-4xl p-6 text-white flex flex-col w-full h-[400px] border-1 border-secondary"
          >
            {/* Title */}
            <h3 className="font-titillium text-base md:text-lg font-semibold uppercase mb-2">
              {product.title}
            </h3>

            {/* Description */}
            <p className="font-open text-sm md:text-base leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Button */}
            <Link
              href={product.link} scroll={false}
              className="bg-secondary px-5 py-2 rounded-full font-titillium text-xs md:text-sm  font-medium tracking-wide hover:bg-background hover:text-primary transition duration-300 ease-in-out w-fit mb-6"
            >
              DISCOVER MORE
            </Link>

            {/* Image pinned to bottom */}
            <div className="mt-4 overflow-hidden rounded-lg">
              <AnimatedImage
                src={product.image}
                alt={product.title}
                width={250}
                height={250}
                className="object-cover w-full h-40 md:h-48"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
