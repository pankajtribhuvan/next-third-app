//Loading 
export default async function Page() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store", // optional
  });

  const data = await res.json();

  return (
    <div>
      <h1 className="text-6xl text-center">
        Server Component Example - Data Fetching
      </h1>
      <hr />
      <ul>
        {data.products.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
