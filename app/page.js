import Link from "next/link";
import TaglineSection from "@/components/TaglineSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Landing Section */}
      <section
        className="relative h-screen rounded-b-4xl shadow-xl overflow-hidden"
        style={{
          backgroundImage: "url('/images/landing-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute bottom-20 left-5 right-5 flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-left">
            <h1 className="font-h1 font-black text-6xl text-white leading-tight">
              HELPING EVERY SEED<br />
              TAKE ROOT
            </h1>
            <p className="font-body text-lg mt-2 text-gray-100">
              Empowering farmers with cocopeat for healthier, greener growth.
            </p>
          </div>
          <button className="h-24 w-24 flex items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-md hover:bg-background hover:text-primary text-white transition">
            →
          </button>
        </div>
      </section>

      {/* Animated Tagline Section */}
      <TaglineSection />

      {/* Product Section */}
      <section className="px-6 md:px-12 my-20 mx-8">
        <h2 className="font-heading text-2xl mb-6">Products</h2>
        <div className="bg-primary rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start text-white">
          <div className="flex-1 space-y-4">
            <h3 className="font-heading text-xl">Cocopeat Grow Bags</h3>
            <p className="font-body text-sm md:text-base">
              High-yield, eco-smart grow bags for greenhouse and hydroponic success.
            </p>
            <Link
              href="/products"
              className="inline-block bg-secondary px-6 py-2 rounded-lg font-body hover:bg-orange-600 transition"
            >
              Discover More
            </Link>
          </div>
          <div className="flex-1 mt-6 md:mt-0 md:ml-6">
            <img
              src="/images/product-sample.jpg"
              alt="Cocopeat Grow Bags"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 md:px-12 my-20 mx-8">
        <div className="border-2 border-secondary rounded-tr-4xl rounded-bl-4xl p-6">
          <h2 className="font-h1 text-3xl text-left mb-2">Why Choose VerdiGrow?</h2>
          <p className="font-body text-gray-700 mb-8">
            Because quality matters: our grow bags are crafted with EC, pH, moisture, and sand testing for consistent crop success.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "EC Tested", desc: "Ensures balanced nutrients." },
              { title: "pH Balanced", desc: "Optimized for healthy growth." },
              { title: "Moisture Control", desc: "Retains the right water levels." },
              { title: "Low Sand", desc: "Cleaner substrate for crops." },
              { title: "Eco-Friendly", desc: "Sustainable farming choice." },
              { title: "High Yield", desc: "Boosts productivity." },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="h-8 w-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-heading text-lg text-primary">{item.title}</h3>
                  <p className="font-body text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
