import Link from "next/link";

const posts = [
  { slug: "intro-to-nextjs", title: "Intro to Next.js" },
  { slug: "tailwind-setup", title: "Tailwind Setup Guide" },
];

export default function Blog() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
