import "./globals.css";
import { Titillium_Web, Open_Sans } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define fonts with correct weights
const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-titillium',
});

// Open Sans for body
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
});

export const metadata = {
  title: "VerdiGrow",
  description: "Empowering farmers with cocopeat for healthier, greener growth.",
  icons: {
    icon: "/images/icon.ico", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${titillium.variable} ${openSans.variable}`}>
      <body className="bg-background min-h-screen overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}