import { db } from '@/config/db';
import React from 'react';

async function page(props) {
    let [students] = await db.execute("select * from students");
    console.log(students);

    return (
        <div>
        <h1>Hello </h1>        
        </div>
    );
}

export default page;