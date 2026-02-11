//In this example we are using dynamic routing in server components.
//But this will not work in client component. 
// //because we cann't use  await and async 
/*
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
*/

//But in the below exaple We can use - REACT use API -
// so we can use dynamic routing inside client component

'use client'
import React,{use} from 'react';


function page(props) {
    let obj =  use(props.params);
    console.log(obj);
    return (
        <div>
            Post ID : {obj.postId}
        </div>
    );
}

export default page;