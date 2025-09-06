export default function ProductDetail({ params }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Product {params.id}</h1>
      <p className="mt-4">Details about product {params.id}...</p>
    </div>
  );
}
