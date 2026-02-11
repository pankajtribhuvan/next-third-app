'use client';

import { Counter } from "./Counter";

// Below is the example of client Component
// We can't make CLIENT COMPONENT AS async


 function Home(){
  return (
    <>
    <div className="p-4">
<h1 className="text-7xl">Hello world</h1>
    <button className="bg-amber-700 p-3 hover:bg-amber-200"
    onClick={()=>{alert('Helllo')}}
    >Click</button>
    </div>
    <Counter />
    </>
  )
}
export default Home;