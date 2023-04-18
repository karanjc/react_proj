import React, {useState, useRef } from 'react';

function UpdateCount(){
const[count,setCount]= useState(0);
useRef(()=>{
document.title = count
},[count])

return (
<div>
<h1>
You are using thee counter {count} number of times
</h1>
<button onClick={()=>{setCount(count+1)}}>Start Counter</button>
</div>
)}


export default UpdateCount