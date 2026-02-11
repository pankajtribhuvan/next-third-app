import React from 'react';

async function page(props) {
    let URL = "https://dummyjson.com/products";
    const res = await fetch(URL);
    const data = await res.json(); //return object - products
    const products = data.products;
    

    return (
        <div>
            <h1 className='text-6xl text-center'>Server Component Example - Data Fetching</h1>
            <hr />
             <ul>
                {
                products.map((p)=>{
                    return (
                       <li key={ p.title}>{ p.title}</li>
                    )
                })
            }
            </ul>
        </div>
    );
}

export default page;