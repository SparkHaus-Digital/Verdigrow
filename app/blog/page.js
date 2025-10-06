import BlogList from "./blogList";
import { client } from "@/app/lib/contentful";

export default async function BlogPage() {
  const res = await client.getEntries({ content_type: "blog" });
  const posts = res.items;

  return <BlogList posts={posts} />;
}
