export default function BlogDetail({ params }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{params.slug.replace("-", " ")}</h1>
      <p className="mt-4">Detailed content for {params.slug}...</p>
    </div>
  );
}
