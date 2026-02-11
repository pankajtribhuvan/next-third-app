import Link from 'next/link';
import React from 'react';

function Blogs(props) {
    return (
        <div>
            <h1 className='text-4xl text-center'> This is Blogs Page</h1>
            
            <ul className='m-4 p-4 bg-amber-300 flex-1 gap-1 inline-block'>
                <li className='m-4'>
                    <Link href="/Blogs/Technologies/blog1">My Blog 1</Link>
                </li>
                <li className='m-4'>
                    <Link href="/Blogs/Technologies/blog2">My Blog 2</Link>
                </li>
            </ul>
            
            
            
        </div>
    );
}

export default Blogs;