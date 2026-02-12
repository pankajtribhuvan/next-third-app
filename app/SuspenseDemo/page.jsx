import { Suspense } from "react";
import Loading from "./loading";
import ProductList from "./ProductList";

export default function Page() {
  return (
    <div>
      <h1 className="text-6xl text-center">
        Server Component Example - Data Fetching
      </h1>
      <hr />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">

  {/* Column 1 - Static Content */}
  <div className="bg-gray-100 p-6 rounded-xl shadow-md">
    <h1 className="text-3xl font-bold mb-4 text-gray-800">
      Welcome to Our Product Store
    </h1>

    <p className="text-gray-600 mb-4">
      Explore a wide range of high-quality products carefully selected 
      to meet your needs. From electronics to lifestyle essentials, 
      we bring you the best at competitive prices.
    </p>

    <h2 className="text-xl font-semibold mb-2 text-gray-700">
      Why Choose Us?
    </h2>

    <ul className="list-disc list-inside text-gray-600 space-y-1">
      <li>Premium Quality Products</li>
      <li>Affordable Pricing</li>
      <li>Fast & Secure Delivery</li>
      <li>24/7 Customer Support</li>
    </ul>
  </div>

        {/* Column 2 - Suspense Wrapped */}
        <Suspense fallback={<Loading />}>
          <ProductList />
        </Suspense>

      </div>
    </div>
  );
}
