'use client'
import { useSearchParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";

 function Page(props) {
  let [recipe,setSingleRecipe] = useState({});
  // const obj = await props.searchParams;
  let data = useSearchParams(); //we can use useSearchParams()
  let id = data.get('id'); 
  
  // console.log(id) //return id=1,id=2 etc...

  let fetchSingleRecipe = async()=>{
 const res = await fetch(`https://dummyjson.com/recipes/${+id}`, {
    cache: "no-store",
  });
  const recipe = await res.json();
  // console.log(recipe) 
  setSingleRecipe(recipe)
  }

  useEffect(()=>{
    fetchSingleRecipe();
  },[])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">

        {/* Hero Image */}
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <h1 className="text-4xl md:text-5xl font-bold text-white p-8">
              {recipe.name}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 grid md:grid-cols-3 gap-8">

          {/* Left Section */}
          <div className="md:col-span-2 space-y-6">

            {/* Rating & Info */}
            <div className="flex flex-wrap items-center gap-6 text-lg">
              <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">
                ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
              </span>

              <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full">
                {recipe.cuisine}
              </span>

              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
                {recipe.difficulty}
              </span>
            </div>

            {/* Ingredients */}
            <div>
              <h2 className="text-2xl font-bold mb-4">🛒 Ingredients</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {recipe.ingredients?.map((item, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 p-3 rounded-lg shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-2xl font-bold mb-4">👩‍🍳 Instructions</h2>
              <ol className="space-y-3 list-decimal list-inside text-gray-700">
                {recipe.instructions?.map((step, index) => (
                  <li key={index} className="bg-gray-50 p-3 rounded-lg">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">

            <div className="bg-orange-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">⏱ Time</h3>
              <p>Prep: {recipe.prepTimeMinutes} mins</p>
              <p>Cook: {recipe.cookTimeMinutes} mins</p>
            </div>

            <div className="bg-green-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">🔥 Calories</h3>
              <p>{recipe.caloriesPerServing} kcal / serving</p>
            </div>

            <div className="bg-purple-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">🏷 Tags</h3>
              <div className="flex flex-wrap gap-2">
                {recipe.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white px-3 py-1 rounded-full text-sm shadow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
);
  
}

export default Page;
