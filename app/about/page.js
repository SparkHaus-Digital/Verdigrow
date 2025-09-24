import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="mt-30 mb-20">
      <div className="p-6 mx-auto max-w-3xl text-center">
        <h1 className="font-sohne font-bold text-[40px] mb-4 text-primary">ABOUT US</h1>
        <p className="font-sans mb-10 text-xl">
          VerdiGrow is a Sri Lankan company with deep roots in coconut plantations. We source raw materials from the lush Coconut Triangle, renowned for its thriving coconut groves, and manage our operations from Colombo, with production facilities in Dambadeniya and Kuliyapitiya.
        </p>
      </div>

      {/* <div className="grid grid-cols-3 h-[300px] md:h-[400px] lg:h-[500px]">
        <div className="relative">
          <Image
            src="/images/aboutus-img1.png"
            alt="Farm field"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative">
          <Image
            src="/images/aboutus-img2.png"
            alt="Flowers"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative">
          <Image
            src="/images/aboutus-img3.png"
            alt="Farm landscape"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div> */}
      <div className="grid grid-cols-3 h-[300px] md:h-[400px] lg:h-[500px]">
        {["aboutus-img1.png", "aboutus-img2.png", "aboutus-img3.png"].map((img, i) => (
          <div
            key={i}
            className="relative group overflow-hidden"
          >
            <Image
              src={`/images/${img}`}
              alt={`About image ${i + 1}`}
              fill
              className="object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-0 animate-fadeIn"
              priority
            />
          </div>
        ))}
      </div>


      <div className="w-full px-6 md:px-20 py-16 text-center">
        {/* Vision */}
        <div className="mb-10">
          <h2 className="font-titillium text-2xl md:text-3xl font-bold text-primary inline-block border-b-4 border-secondary pb-1">
            OUR VISION
          </h2>

          <p className="font-sans max-w-3xl mx-auto text-gray-700 mt-4">
            To be a global leader in sustainable cocopeat solutions, empowering
            agricultural communities and promoting eco-conscious cultivation
            worldwide.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16">
          <h2 className="font-titillium text-2xl md:text-3xl font-bold text-primary inline-block border-b-4 border-secondary pb-1">
            OUR MISSION
          </h2>
          <p className="font-sans max-w-3xl mx-auto text-gray-700 mt-4">
            To deliver premium, eco-friendly growing media by combining traditional
            Sri Lankan expertise with modern production practices. We are committed
            to quality, sustainability, and community upliftment—from coconut grove
            to global greenhouse.
          </p>
        </div>

        {/* CEO section */}
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg border-2 border-secondary">
            <Image
              src="/images/ceo.png"
              alt="CEO"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="text-center">
            <div className="flex flex-col justify-center">
              <FaQuoteLeft className="w-8 h-8 text-primary mb-8" />

              <p className="italic text-gray-700 leading-relaxed mb-6">
                Though my background is in engineering, my passion has always been
                agriculture. Recognizing the need for sustainable and organic growing
                solutions, I came across cocopeat, a renewable, eco-friendly medium
                ideal for various agricultural environments.
                <br />
                <br />
                Based in Sri Lanka, a country abundant in coconut plantations, I
                recognized the vast potential to harness this natural resource and
                transform it into high-quality, environmentally responsible growing
                substrates that promote sustainable agriculture.
                <br />
                <br />
                From this vision, Verdigr​ow was founded to support greener, more
                sustainable agriculture worldwide.
              </p>

              <div className="flex justify-end">
                <FaQuoteRight className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h3 className="font-sohne-regular text-lg">John Doe</h3>
            <p className="font-sohne-regular text-gray-600">Founder & CEO of Verdigr​ow</p>
          </div>
        </div>
      </div>
    </section>
  );
}
