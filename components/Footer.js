// components/Footer.jsx
import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { IoMdMail, IoMdCall, IoLogoWhatsapp } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative bg-white text-primary py-10"
      style={{
        backgroundImage: "url('/images/footer-bg-2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FDFFF5]/75 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Left - Logo & Socials */}
        <div className="flex flex-col items-start justify-start">
          {/* <Image
            src="/images/footer-logo.png"
            alt="Verdigrow Logo"
            width={280} 
            height={100} 
            priority
          /> */}

          <h1 className="font-titillium font-bold text-3xl text-primary uppercase">VerdiGrow</h1>
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
          <h3 className="font-titillium font-semibold text-base md:text-xl mb-3">EMAIL</h3>
          <p className="flex items-center gap-2 font-sans font-semibold text-[12px] md:text-base text-black hover:text-secondary">
            <IoMdMail className="" /> info@verdigrowglobal.com
          </p>

          <h3 className="font-titillium font-semibold text-base md:text-xl mt-6 mb-3">
            CONTACT
          </h3>
          <p className="flex items-center gap-2 font-sans font-semibold text-[12px] md:text-base text-black hover:text-secondary">
            <IoMdCall className="" /> +94 11 274 2238
          </p>
          <p className="flex items-center gap-2 font-sans font-semibold text-[12px] md:text-base text-blac hover:text-secondaryk">
            <IoLogoWhatsapp className="" /> +94 11 274 2238
          </p>
        </div>

        {/* Right - Address & Buttons */}
        <div>
          <h3 className="font-titillium font-semibold text-base md:text-xl mb-3">
            VERDIGROW GLOBAL
          </h3>
          <p className="font-sans font-semibold text-[12px] md:text-base text-black mb-4 hover:text-secondary">
            No. 590, <br /> Athurugiriya Road, Malabe, <br /> Colombo, Sri Lanka.
          </p>

          <div className=" md:flex items-center space-x-2 sm:space-x-4 lg:space-x-6 font-open">
            <Link
              href="/contact"
              className="group bg-primary text-background px-3 sm:px-4 md:px-4 lg:px-5 py-1 sm:py-2 rounded-2xl flex items-center gap-1 sm:gap-2 hover:bg-secondary hover:text-background transition duration-300"
            >
              Contact
              <span className="rounded-full p-1 sm:p-1.5 bg-background group-hover:bg-background transition duration-300 flex items-center justify-center">
                <FaArrowUp className="rotate-40 text-primary group-hover:text-primary group-hover:rotate-[90deg] transition-transform duration-300 text-xs sm:text-sm" />
              </span>
            </Link>


            <Link
              href="/quote"
              className="group bg-primary text-background px-3 sm:px-4 md:px-4 lg:px-5 py-1 sm:py-2 rounded-2xl flex items-center gap-1 sm:gap-2 hover:bg-secondary hover:text-background transition duration-300"
            >
              Get a Quote
              <span className="rounded-full p-1 sm:p-1.5 bg-background group-hover:bg-background transition duration-300 flex items-center justify-center">
                <FaArrowUp className="rotate-40 text-primary group-hover:text-primary group-hover:rotate-[90deg] transition-transform duration-300 text-xs sm:text-sm" />
              </span>
            </Link>
          </div>
        </div>

      </div>
      {/* Bottom */}
      <div className="relative z-10 text-center font-open text-base text-black mt-10 max-w-6xl mx-auto px-6">
        <p>© 2025 Verdigrow. All rights reserved.</p>
        <p>
          Powered by <span className="italic font-semibold"><a
            href="https://www.sparkhausdigital.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="italic font-semibold hover:text-secondary transition-colors duration-300"
          >
            Sparkhaus.
          </a></span>
        </p>
      </div>


    </footer>
  );
}
