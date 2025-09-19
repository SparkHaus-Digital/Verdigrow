import { posts } from "./data";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Blog() {
  return (
    <div className="mt-30 mb-20">
      <div className=" mx-auto max-w-3xl text-center">
        <h1 className="font-sohne font-bold text-[40px] mb-4 text-primary">BLOG</h1>
      </div>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>

            <div className="w-[75%] mx-auto rounded-2xl p-4 md:flex md:items-start shadow-sm">

              {/* Left: Image */}
              <div className="relative md:w-1/2 h-56 md:h-64 rounded-2xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="object-fit rounded-2xl border-2 border-secondary"
                />
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-between md:w-1/2 space-y-3 mt-4 md:mt-0">
                {/* Tag */}
                <div>
                  <span className="bg-secondary text-white text-xs font-sans px-3 py-1 rounded-full w-fit ">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-semibold leading-snug text-gray-800 mt-7">{post.title}</h2>
                </div>


                <div className="flex justify-between items-end mt-20 font-sans">
                  {/* Date */}
                  <p className="text-gray-500 text-lg">{post.date}</p>

                  {/* Read More Button */}
                  <Link href={`/blog/${post.slug}`}>
                    <button className="flex items-center gap-2 text-primary font-medium text-sm border-2 border-primary rounded-full px-4 py-1 w-fit hover:bg-green-50 transition">
                      READ MORE
                      <FaArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </li>
        ))}
      </ul>

    </div>
  );
}
