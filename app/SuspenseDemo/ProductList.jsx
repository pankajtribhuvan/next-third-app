export default async function ProductList() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>

      <ul className="space-y-2">
        {data.products.map((p) => (
          <li
            key={p.id}
            className="border-b pb-2 hover:text-blue-600 cursor-pointer"
          >
            {p.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
