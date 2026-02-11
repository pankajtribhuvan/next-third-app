import React from 'react';

async function Products(props) {
    let data = await props.searchParams;
    // console.log(data);
    return (
        <div>
            Category : {data.category} <br />
            Price : {data.price}
        </div>
    );
}

export default Products;