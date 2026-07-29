// import { useState } from "react";

// function UseMemo() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");

//   console.log("Calculating...");

//   // Pretend this is a VERY expensive calculation
//   let total = 0;
//   for (let i = 0; i < 1_000_000_000; i++) {
//     total += i;
//   }

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>
//         Count: {count}
//       </button>

//       <br /><br />

//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Type here"
//       />

//       <h2>{total}</h2>
//     </div>
//   );
// }

// export default UseMemo;


import { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const total = useMemo(() => {
    console.log("Calculating...");

    let sum = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
      sum += i;
    }

    return sum;
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <br />
      <br />

      <input
        type="text"
        value={name}
        placeholder="Type here"
        onChange={(e) => setName(e.target.value)}
      />

      <h2>{total}</h2>
    </div>
  );
}

export default UseMemo;