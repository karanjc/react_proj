import react, { useState, useEffect } from 'react';

function UseEffect() {
const [count, setCount] = useState(0);

useEffect(() => {
console.log('Component is called');

})
return (
<div>
<p> You are using the counter {count} number of times</p>
<button onClick={() => setCount(count + 1)}>
Start Counter
</button>
</div>
);
}

export default UseEffect;