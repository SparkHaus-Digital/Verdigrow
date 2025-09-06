import "./globals.css";
import { Titillium_Web, Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define fonts with correct weights
const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "VerdiGrow",
  description: "Empowering farmers with cocopeat for healthier, greener growth.",
};


const soehneBreit = localFont({
  src: [
    { path: "../public/fonts/soehne-breit/SohneBreit-Fett.woff2", weight: "900", style: "normal"},
    { path: "../public/fonts/soehne-breit/SohneBreit-ExtraFett.woff2", weight: "800", style: "normal" },
    { path: "../public/fonts/soehne-breit/SohneBreit-Dreiviertelfett.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-soehne-breit",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${soehneBreit.variable} ${titillium.variable} ${openSans.variable}`}>
      <body className="bg-transparent min-h-screen overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}