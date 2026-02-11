import React from 'react';

async function page(props) {
    let obj = await props.params;
    console.log(obj);
    return (
        <div>
            Post ID : {obj.postId}
        </div>
    );
}

export default page;