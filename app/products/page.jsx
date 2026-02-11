import React from 'react';

async function Products(props) {
    let data = await props.searchParams;
    // console.log(data);
    return (
        <div>
            <h2>
            Copy & Paste in url  :    http://localhost:3000/products?category=laptop&price=340000
            </h2>
            Category : {data.category} <br />
            Price : {data.price}
        </div>
    );
}

export default Products;