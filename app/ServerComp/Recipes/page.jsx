import Link from "next/link";

let Recipes = async () => {
  let res = await fetch("https://dummyjson.com/recipes");
  let data = await res.json();
  let recipes = data.recipes;

  return (
    <>
      <h1 className="text-center text-3xl m-4">
        searchParam - Server Component Project
      </h1>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-8">

        {/* ✅ Grid Container */}
        <div className="max-w-7xl mx-auto grid gap-8 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4">

          {recipes.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Meal Type */}
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {r.mealType?.[0]}
                </span>

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center gap-1 shadow">
                  ⭐ <span className="text-sm font-semibold">{r.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-3">
                  {r.name}
                </h2>
                {/* <Link href={`/Recipes/${r.id}`}>   */}
                <Link href={`/ServerComp/Recipes/SingleRecipe?id=${r.id}`} >
                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-300">
                  🍕 Order Now
                </button>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Recipes;
