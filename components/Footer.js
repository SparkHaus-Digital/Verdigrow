// components/Footer.jsx
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { IoMdMail, IoMdCall, IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-white text-primary py-10"
      style={{
        backgroundImage: "url('/images/footer-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Left - Logo & Socials */}
        <div>
          <h2 className="font-h1 text-2xl font-bold text-primary">
            VERDIGROW
          </h2>
          <p className="text-sm text-secondary font-semibold mt-1">
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
          <h3 className="font-heading font-semibold text-lg mb-3">EMAIL</h3>
          <p className="flex items-center gap-2 text-sm">
            <IoMdMail className="text-secondary" /> info@verdigrowglobal.com
          </p>

          <h3 className="font-heading font-semibold text-lg mt-6 mb-3">
            CONTACT
          </h3>
          <p className="flex items-center gap-2 text-sm">
            <IoMdCall className="text-secondary" /> +94 11 274 2238
          </p>
          <p className="flex items-center gap-2 text-sm">
            <IoLogoWhatsapp className="text-secondary" /> +94 11 274 2238
          </p>
        </div>

        {/* Right - Address & Buttons */}
        <div>
          <h3 className="font-heading font-semibold text-lg mb-3">
            VERDIGROW GLOBAL
          </h3>
          <p className="text-sm mb-4">
            No. 590, Athurugiriya Road, Malabe, Colombo, Sri Lanka.
          </p>

          <div className="space-y-3">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-2 rounded-md hover:bg-secondary transition"
            >
              Contact
            </Link>
            <Link
              href="/quote"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-2 rounded-md hover:bg-secondary transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-600 mt-10">
        <p>© 2025 Verdigrow. All rights reserved.</p>
        <p>
          Powered by <span className="italic font-semibold">Sparkhaus.</span>
        </p>
      </div>
    </footer>
  );
}
