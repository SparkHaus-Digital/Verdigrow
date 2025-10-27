// components/Footer.jsx
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebookF, FaArrowUp } from "react-icons/fa";
import { IoMdMail, IoMdCall, IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <footer
      className="relative bg-white text-primary py-10" >
      <Image
        src="/images/footer-bg-2.avif"
        alt="footer background"
        fill
        className="object-cover object-center"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FDFFF5]/75 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6">


        {/* ---------- MOBILE LAYOUT ---------- */}
        <div className="flex flex-col gap-8 sm:hidden">
          {/* Logo & Subtitle */}
          <div className="flex flex-col items-start mb-4">
            <h1 className="font-titillium font-bold text-3xl text-primary uppercase">
              VerdiGrow
            </h1>
            <p className="font-open font-semibold text-primary text-xl mt-1">
              GROW | SUSTAIN | THRIVE
            </p>


          </div>

          {/* Top row: Email + Contact */}
          <div className="flex justify-between gap-4">
            <div>
              <h2 className="font-titillium font-semibold text-base mb-2">EMAIL</h2>
              <a
                href="mailto:info@verdigrowglobal.com"
                className="flex items-center gap-2 font-open font-semibold text-[12px] text-black hover:text-secondary no-underline"
              >
                <IoMdMail /> info@verdigrowglobal.com
              </a>
            </div>

            <div>
              <h2 className="font-titillium font-semibold text-base mb-2">CONTACT</h2>
              <p className="flex items-center gap-2 font-open font-semibold text-[12px] text-black hover:text-secondary">
                <IoMdCall /> +94 11 274 2238
              </p>
              <p className="flex items-center gap-2 font-open font-semibold text-[12px] text-black hover:text-secondary">
                <IoLogoWhatsapp /> +94 11 274 2238
              </p>
            </div>
          </div>

          {/* Bottom row: Address + Buttons */}
          <div className="flex justify-between items-start gap-6">
            <div>
              <h2 className="font-titillium font-semibold text-base mb-2">
                VERDIGROW GLOBAL
              </h2>
              <p className="font-open font-semibold text-[12px] text-black hover:text-secondary">
                No. 590, <br /> Athurugiriya Road, Malabe, <br /> Colombo, Sri Lanka.
              </p>
            </div>

            <div className="flex flex-col gap-3 font-open">
              <Link
                href="/contact"
                className="group bg-primary text-background px-2 sm:px-4 py-2 sm:py-2 rounded-2xl flex items-center justify-center gap-2 sm:gap-2 hover:bg-secondary hover:text-background transition duration-300"
              >
                Contact
                <span className="rounded-full p-1 sm:p-1.5 bg-background group-hover:bg-secondary transition duration-300 flex items-center justify-center">
                  <FaArrowUp className="rotate-40 text-primary group-hover:text-background group-hover:rotate-[90deg] transition-transform duration-300 text-xs sm:text-sm" />
                </span>
              </Link>

              <Link
                href="/quote"
                className="group bg-primary text-background px-4 py-2 rounded-2xl flex items-center gap-2 whitespace-nowrap hover:bg-secondary hover:text-background transition duration-300"
              >
                Get a Quote
                <span className="bg-background rounded-full p-1 group-hover:bg-secondary transition duration-300 flex items-center justify-center">
                  <FaArrowUp className="rotate-40 text-primary group-hover:text-background group-hover:rotate-[90deg] transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>


        {/* ---------- DESKTOP LAYOUT ---------- */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-10">
          {/* Left - Logo & Socials */}
          <div className="flex flex-col items-start justify-start">
            <h1 className="font-titillium font-bold text-3xl text-primary uppercase">
              VerdiGrow
            </h1>
            <p className="font-open font-semibold text-primary text-xl mt-1">
              GROW | SUSTAIN | THRIVE
            </p>

            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Instagram" className="hover:text-secondary">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-secondary">
                <FaTwitter size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-secondary">
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>

          {/* Middle - Email & Contact */}
          <div>
            <h2 className="font-titillium font-semibold text-xl mb-3">EMAIL</h2>
            <a
              href="mailto:info@verdigrowglobal.com"
              className="flex items-center gap-2 font-open font-semibold text-base text-black hover:text-secondary no-underline"
            >
              <IoMdMail /> info@verdigrowglobal.com
            </a>

            <h2 className="font-titillium font-semibold text-xl mt-6 mb-3">
              CONTACT
            </h2>
            <p className="flex items-center gap-2 font-open font-semibold text-base text-black hover:text-secondary">
              <IoMdCall /> +94 11 274 2238
            </p>
            <p className="flex items-center gap-2 font-open font-semibold text-base text-black hover:text-secondary">
              <IoLogoWhatsapp /> +94 11 274 2238
            </p>
          </div>

          {/* Right - Address & Buttons */}
          <div>
            <h2 className="font-titillium font-semibold text-xl mb-3">
              VERDIGROW GLOBAL
            </h2>
            <p className="font-open font-semibold text-base text-black mb-4 hover:text-secondary">
              No. 590, <br /> Athurugiriya Road, Malabe, <br /> Colombo, Sri Lanka.
            </p>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="group w-fit bg-primary text-background px-3 sm:px-4 md:px-4 lg:px-5 py-1 sm:py-2 rounded-2xl flex items-center sm:gap-8 hover:bg-secondary hover:text-background transition duration-300 mb-4"
            >
              Contact
              <span className="rounded-full p-1 sm:p-1.5 bg-background group-hover:bg-background transition duration-300 flex items-center justify-center">
                <FaArrowUp className="rotate-40 text-primary group-hover:text-primary group-hover:rotate-[90deg] transition-transform duration-300 text-xs sm:text-sm" />
              </span>
            </Link>

            {/* Get A Quote Button */}
            <Link
              href="/quote"
              className="group w-fit bg-primary text-background px-4 py-2 rounded-2xl flex items-center gap-2 whitespace-nowrap hover:bg-secondary hover:text-background transition duration-300"
            >
              Get a Quote
              <span className="bg-background rounded-full sm:p-1.5 transition duration-300 flex items-center justify-center">
                <FaArrowUp className="rotate-40 text-primary group-hover:text-primary group-hover:rotate-[90deg] transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile-only Socials */}
      <div className="relative z-10 flex justify-center space-x-6 mt-8 sm:hidden">
        <a href="#" aria-label="Instagram" className="hover:text-secondary">
          <FaInstagram size={20} />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-secondary">
          <FaTwitter size={20} />
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-secondary">
          <FaFacebookF size={20} />
        </a>
      </div>


      {/* Bottom */}
      <div className="relative z-10 text-center font-open text-[12px] md:text-base  text-black mt-6 sm:mt-10 max-w-6xl mx-auto px-6">
        <p>© 2025 Verdigrow. All rights reserved.</p>
        <p>
          Powered by{" "}
          <span className="italic font-semibold">
            <a
              href="https://www.sparkhausdigital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="italic font-semibold hover:text-secondary transition-colors duration-300"
            >
              Sparkhaus.
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
