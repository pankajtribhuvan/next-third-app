import Link from 'next/link';
import React from 'react';

function Home() {
  return (
    <div>
      <h1 className='text-6xl text-center'>Client Vs Server Component in NEXT.js</h1>

     <hr />
<nav>
  <ul className="flex gap-4 list-none">
    <li>
      <Link
        href="/ClientComp"
        className="bg-amber-300 px-4 py-2 block"
      >
        Client Component Example
      </Link>
    </li>

    <li>
      <Link
        href="/ServerComp"
        className="bg-amber-300 px-4 py-2 block"
      >
        Server Component Example
      </Link>
    </li>
    <li>
      <Link
        href="/ClientComponentDemo"
        className="bg-amber-300 px-4 py-2 block"
      >
        Client Component Demo
      </Link>
    </li>
    <li>
      <Link
        href="/Profiles"
        className="bg-amber-300 px-4 py-2 block"
      >
Dynamic Route 
      </Link>
    </li>
    <li>
      <Link
        href="/products"
        className="bg-amber-300 px-4 py-2 block"
      >
        Search Param - Products 
      </Link>
    </li>
    <li>
      <Link
        href="/products2"
        className="bg-amber-300 px-4 py-2 block"
      >
        Search Param in Client Component 
      </Link>
    </li>
    <li>
      <Link
        href="/Blogs"
        className="bg-amber-300 px-4 py-2 block"
      >
        Slug Example in Server Component
      </Link>
    </li>
     <li>
      <Link
        href="/Recipes"
        className="bg-amber-300 px-4 py-2 block"
      >
        Recipes - Server Component Project
      </Link>
    </li>
  </ul>
</nav>

      
       
      
    </div>
  );
}

export default Home;