// -----------------------------------------------
// WITHOUT USE EFFECT
// ----------------------------------------------

// import { useState } from "react";

// function UseEffect() {
//   const [count, setCount] = useState(0);

//   console.log("🔄 Rendering...", count);

//   fetch("https://en.wikipedia.org/api/rest_v1/page/summary/Cat")
//     .then((res) => res.json())
//     .then(() => {
//       console.log("📥 Fetched");
//       setCount((c) => c + 1); 
//     });

//   return <h1>{count}</h1>;
// }

//  export default UseEffect;

// -----------------------------------------------
// USE EFFECT
// ----------------------------------------------

import { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  console.log("🔄 Rendering...", count);

  useEffect(() => {
    console.log("🚀 useEffect ran");

    fetch("https://en.wikipedia.org/api/rest_v1/page/summary/Cat")
      .then((res) => res.json())
      .then(() => {
        console.log("📥 Fetched");
        setCount((c) => c + 1);
      });
  }, []);

  return <h1>{count}</h1>;
}

export default UseEffect;