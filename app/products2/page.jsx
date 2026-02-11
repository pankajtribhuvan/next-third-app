'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react';

function page(props) {
let data = useSearchParams();
// console.log(data) //ReadonlyURLSearchParams { 'age' => '10', 'city' => 'rahta' }
// console.log(data.get('age')) //10
console.log(data.get('city')) //Rahta

    return (
        <div>
            
            <h1 className='text-5xl'>useSearchParam in Client Component</h1>
            <h2 className='text-3xl'>Copy & Paste in URL : http://localhost:3000/products2?age=10&city=rahta</h2>
            {}
        </div>
    );
}

export default page;