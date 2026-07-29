// import { useState } from "react";

// function UseRef() {
//   let clicks = 0;
//   const [name, setName] = useState("");

//   function handleClick() {
//     clicks++;
//     console.log("Clicks:", clicks);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>

//       <input
//         type="text"
//         placeholder="Type here"
//         onChange={(e) => setName(e.target.value)}
//       />

//       <h1>Clicks: {clicks}</h1>
//       <h2>Name: {name}</h2>
//     </div>
//   );
// }

// export default UseRef;


import { useRef, useState } from "react";

function UseRef() {
  const clicks = useRef(0);
  const [name, setName] = useState("");

  function handleClick() {
    clicks.current++;
    console.log("Clicks:", clicks.current);
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>

      <input
        type="text"
        placeholder="Type here"
        onChange={(e) => setName(e.target.value)}
      />

      <h1>Clicks: {clicks.current}</h1>
      <h2>Name: {name}</h2>
    </div>
  );
}

export default UseRef;