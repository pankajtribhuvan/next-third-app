import React from 'react';

async function page(props) {
    let {slug} = await props.params;
    console.log(slug)
    return (
        <div className='m-28 p-4'>
            <h1 className='text-5xl text-red-500'>{slug}</h1>
            <h2 className='text-4xl m-4'>Catch All Segments - ([...slug]). -</h2>
            <hr />
            <p className='m-4'>                
                In Next.js, a slug segment is a key feature of dynamic routing, allowing developers to create user-friendly, SEO-optimized URLs when the exact route names are not known ahead of time. Instead of using generic IDs in the URL (e.g., /posts/123), you can use human-readable identifiers (e.g., /blog/my-awesome-post). 
            </p>
        </div>
    );
}

export default page;