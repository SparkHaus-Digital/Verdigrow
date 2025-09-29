"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiLeaf } from "react-icons/ti";
import { GiRecycle } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { HiOutlineCheckCircle, HiOutlineCube } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseVerdigrow() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const items = [
    {
      title: "100% Eco Friendly",
      desc: "Produced from natural, renewable coconut husks",
      icon: <TiLeaf className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />,
    },
    {
      title: "Committees to sustainability",
      desc: "Focused on long-term environmental impact.",
      icon: <GiRecycle className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />,
    },
    {
      title: "Empowering Communities",
      desc: "Supporting Sri Lanka’s coconut farming families.",
      icon: <GrGroup className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />,
    },
    {
      title: "Reliable Quality Control",
      desc: "Tested at every stage for consistent quality.",
      icon: <HiOutlineCheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />,
    },
    {
      title: "Customizable Solutions",
      desc: "Sizes, blends, and packaging made to order.",
      icon: <IoSettingsOutline className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />,
    },
    {
      title: "Sample Availability",
      desc: "Request samples before placing bulk orders.",
      icon: <HiOutlineCube className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />,
    },
  ];

  useEffect(() => {
    gsap.from(itemsRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current, // 🔥 trigger whole section
        start: "top 80%",
        toggleActions: "play none none none", // play once
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-8 md:px-12 my-20 md:mx-12"
    >
      <div className="border-2 border-secondary rounded-tr-[75px] rounded-bl-[75px] md:rounded-tr-[100px] md:rounded-bl-[100px] pt-12 pb-12 px-4 md:px-10 relative">
        <div className="flex justify-between items-start">
          <div className="pb-10">
            <h2 className="font-sohne text-lg md:text-[40px] text-left mb-2 text-primary">
              WHY CHOOSE VERDIGROW?
            </h2>
            <p className="font-titillium font-normal text-sm md:text-xl text-gray-700">
              <span className="font-titillium text-primary font-semibold">
                Because quality matters:
              </span>{" "}
              our grow bags are crafted with EC, pH, moisture, <br /> and sand
              testing for consistent crop success.
            </p>
          </div>
        </div>

        {/* Animated Items */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="flex flex-col items-center text-center"
            >
              <div className="pb-2">{item.icon}</div>
              <h3 className="font-open font-semibold text-base md:text-xl pb-2">
                {item.title}
              </h3>
              <p className="font-open text-sm md:text-lg text-center text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
