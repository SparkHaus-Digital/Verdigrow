// components/Footer.jsx
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { IoMdMail, IoMdCall, IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

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
        <div>
           <Image
            src="/images/footer-logo.png"
            alt="Verdigrow Logo"
            width={180} 
            height={50} 
            priority
          />
          <p className="font-titillium font-semibold text-primary text-2xl mt-1">
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
          <h3 className="font-titillium font-semibold text-2xl mb-3">EMAIL</h3>
          <p className="flex items-center gap-2 font-sans font-semibold text-lg text-black">
            <IoMdMail className="" /> info@verdigrowglobal.com
          </p>

          <h3 className="font-titillium font-semibold text-2xl mt-6 mb-3">
            CONTACT
          </h3>
          <p className="flex items-center gap-2 font-sans font-semibold text-lg text-black">
            <IoMdCall className="" /> +94 11 274 2238
          </p>
          <p className="flex items-center gap-2 font-sans font-semibold text-lg text-black">
            <IoLogoWhatsapp className="" /> +94 11 274 2238
          </p>
        </div>

        {/* Right - Address & Buttons */}
        <div>
          <h3 className="font-titillium font-semibold text-2xl mb-3">
            VERDIGROW GLOBAL
          </h3>
          <p className="font-sans font-semibold text-lg text-black mb-4">
            No. 590, <br/> Athurugiriya Road, Malabe, <br/> Colombo, Sri Lanka.
          </p>

          <div className="space-y-3">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-sans text-xl px-5 py-2 rounded-2xl hover:bg-secondary transition"
            >
              Contact
            </Link>
            <Link
              href="/quote"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-sans text-xl px-5 py-2 rounded-2xl hover:bg-secondary transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center font-sans text-xl text-black mt-10">
        <p>© 2025 Verdigrow. All rights reserved.</p>
        <p>
          Powered by <span className="italic font-semibold">Sparkhaus.</span>
        </p>
      </div>
    </footer>
  );
}
