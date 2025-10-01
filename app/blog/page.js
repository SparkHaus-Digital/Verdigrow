import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import AnimatedText from "@/components/AnimatedText";
import { client } from "../lib/contentful";

export default async function Blog() {
  const res = await client.getEntries({ content_type: "blog" }); // your content model id = "blog"
  const posts = res.items;


  return (
    <div className="mt-30 mb-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-sohne font-bold text-3xl sm:text-4xl md:text-[40px] mb-6 text-primary">
          <AnimatedText text="BLOG" />
        </h1>
      </div>

      {/* Blog List */}
      <ul className="space-y-10 md:space-y-12">
        {posts.map((post) => {
          const { slug, title, tags, dateAndTime, thumbnail } = post.fields;
          const formattedDate = new Date(dateAndTime).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long", // "short" for abbreviated month
            day: "numeric",
          });
          return (
            <li key={slug}>
              <div className="mx-auto max-w-5xl rounded-2xl p-4 md:p-6 shadow-sm flex flex-col md:flex-row md:items-start gap-6 bg-tertiary/15">
                {/* Left: Image */}
                <div className="relative w-full md:w-1/2 h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden">
                  {thumbnail && (
                    <Image
                      src={`https:${thumbnail.fields.file.url}`}
                      alt={title}
                      width={600}
                      height={400}
                      className="object-cover rounded-2xl border-2 border-secondary w-full h-full"
                    />
                  )}
                </div>

                {/* Right: Content */}
                <div className="flex flex-col justify-between w-full md:w-1/2 space-y-4">
                  <div>
                    {/* Tag */}
                    <span className="bg-secondary text-white text-xs sm:text-sm font-open px-3 py-1 rounded-full w-fit">
                      {tags}
                    </span>

                    {/* Title */}
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-gray-800 mt-5">
                      {title}
                    </h2>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-6 md:mt-24 font-open">
                    {/* Date */}
                    <p className="text-gray-500 text-sm sm:text-base">{formattedDate}</p>

                    {/* Read More Button */}
                    <Link
                      href={`/blog/${slug}`}
                      className="group bg-background text-primary sm:px-5 text-base px-2 py-1 rounded-2xl flex items-center gap-2 border border-primary hover:bg-primary hover:text-background transition duration-300 w-fit"
                    >
                      READ MORE
                      <span className="rounded-full p-1.5 bg-primary group-hover:bg-background transition duration-300 flex items-center justify-center">
                        <MdArrowOutward className="rotate-0 text-white group-hover:text-primary group-hover:rotate-[45deg] transition-transform duration-300 text-sm" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
