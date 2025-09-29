import Image from "next/image";
import { posts } from "../data";
import AnimatedImage from "@/components/AnimatedImage";

export default async function BlogDetail({ params }) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);
  if (!post) return <p className="p-6 text-center">Post not found</p>;

  return (
    <div className="w-[75%] mx-auto mt-30 mb-20">
      {/* Title & Date */}
      <h1 className="text-3xl font-titillium font-bold text-primary mb-16">{post.title}</h1>

      <div className="flex items-center gap-10 mb-6">
        <p className="text-gray-500 font-open text-lg">{post.date}</p>
        <span className="border-2 border-secondary rounded-full px-3 py-1 text-sm font-open">
          {post.category}
        </span>
      </div>

      <p className="mb-16 font-open text-justify">{post.introduction}</p>

      {/* Featured Image */}
      <div className="w-[75vw] h-72 relative overflow-hidden rounded-tr-[100px] rounded-bl-[100px] border-2 border-secondary">
        <AnimatedImage
          src={post.image}
          alt={post.title}
          fill
          className="object-cover w-full"
        />
      </div>

      <div className="mt-12 font-open text-justify">
        <p>{post.content1}</p>
        <br />
        <p>{post.content2}</p>
      </div>
    </div>
  );
}
