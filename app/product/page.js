import Link from "next/link";

export default function Products() {

  return (
    <div className="p-6 mx-20 mt-30">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <p className="mb-2">
        We offer a range of high-quality cocopeat products designed to meet the needs of farmers and gardeners worldwide. Our products are sourced from the finest coconuts, ensuring optimal performance and sustainability.
      </p>
      <p className="mb-2">
        Our product lineup includes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Premium Cocopeat Blocks</li>
        <li>Organic Cocopeat Mulch</li>
        <li>Cocopeat Growing Medium</li>
        <li>Custom Cocopeat Solutions</li>
      </ul>
      <p>
        Each of our products is carefully processed and packaged to maintain its quality and effectiveness. Whether you're a small-scale gardener or a large agricultural operation, VerdiGrow has the right cocopeat solution for you.
      </p>
    </div>
  );
}