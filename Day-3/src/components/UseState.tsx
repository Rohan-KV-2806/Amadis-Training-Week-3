import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(7);
  
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <br />
      <button onClick={() => setCount(0)}>
        Increment
      </button>
    </div>
  );
  
}

export default UseState;