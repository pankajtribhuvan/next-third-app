import Link from 'next/link';
import React from 'react';

async function Profile(props) {
    
    
    let obj = await props.params;
    let username = decodeURIComponent(obj.user)
    console.log(username)

    return (
        <div>
            <h1 className='text-6xl'>{username}</h1>
            
            {/* <Link href="/Profiles/Profile/posts" className='m-4 bg-amber-300 p-4'>Posts</Link> */}
        </div>
    );
}

export default Profile;