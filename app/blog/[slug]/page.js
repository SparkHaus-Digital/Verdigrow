import { client } from "@/app/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderOptions } from "@/app/lib/contentfulRenderOptions";

export default async function BlogDetail({ params }) {
  const { slug } = await params; 

  const res = await client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
  });

  const post = res.items[0]?.fields;

  if (!post) return <p>Post not found</p>;

  const { title, dateAndTime, tags, description } = post;

  const formattedDate = new Date(dateAndTime).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="w-[75%] mx-auto mt-30 mb-20">
      <h1 className="text-3xl font-bold text-primary mb-16">{title}</h1>

      <div className="flex items-center gap-10 mb-6">
       <p className="text-gray-500 font-open text-lg">{formattedDate}</p>
       <span className="border-2 border-secondary rounded-full px-3 py-1 text-sm font-open">
         {tags}
       </span>
     </div>

      <div className="mt-12 font-open prose max-w-none">
        {documentToReactComponents(description, renderOptions)}
      </div>
    </div>
  );
}

