import React, { useState } from 'react';

export function Counter(props) {
    let [counter,setCounter] = useState(0);
    return (
        <div>
            <button 
            className='bg-red-400 m-4 p-4'
            onClick={()=>setCounter((prev)=>prev+1)}> Counter : {counter}</button>
        </div>
    );
}
