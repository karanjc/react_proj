import React, { useState } from "react";

function TodoList() {
const [Arr, setArr] = useState([]);
const [val, setVal] = useState("");
const [title, setTitle] = useState("");
const [amt, setAmt] = useState("");

const done = (e) => {
e.preventDefault();

// console.log(title + amt);
setVal("title is :" + title + " and amout is :" + amt);
if (val !== "") {
setArr([...Arr, val]);
}
};

return (
<div>
<h1>Order</h1>
<ul>
{Arr.map((task, index) => (
<li key={index}>{task}</li>
))}
</ul>
<form>
Title
<input
type="text"
style={{ border: "1px solid black" }}
onChange={(e) => {
setTitle(e.target.value);
}}
/>
Amount
<input
type="text"
style={{ border: "1px solid black" }}
onChange={(e) => {
setAmt(e.target.value);
}}
/>
<button onClick={done}>Done</button>
</form>
</div>
);
}

export default TodoList;