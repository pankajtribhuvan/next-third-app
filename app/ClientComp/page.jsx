'use client'
import React, { useEffect, useState } from 'react';

function page(props) {
    let URL = "https://dummyjson.com/products";
    let [products, setProducts] = useState([]);
    async function fetchData() {
            const res = await fetch(URL);
            const data = await res.json();
           setProducts(data.products)

        }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <h1 className='text-6xl text-center'>Client Component Example - Data Fetching</h1>
            <hr/>
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