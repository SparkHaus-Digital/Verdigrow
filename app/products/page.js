import Link from "next/link";

export default function Products() {
  const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <ul className="space-y-4">
        {products.map((p) => (
          <li key={p.id}>
            <Link href={`/products/${p.id}`} className="text-blue-600 hover:underline">
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
