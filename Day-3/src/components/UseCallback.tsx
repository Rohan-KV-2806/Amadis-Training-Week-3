import { useCallback, useState, memo } from "react";

const Child = memo(function Child({
  onHello,
}: {
  onHello: () => void;
}) {
  console.log("Child Rendered");

  return (
    <button onClick={onHello}>
      Say Hello
    </button>
  );
});

function UseCallback() {
  const [count, setCount] = useState(0);

  // ❌ Normal function
//   function hello() {
//     console.log("Hello");
//   }

  // ✅ Uncomment this and comment the function above

  const hello = useCallback(() => {
    console.log("Hello");
  }, []);


  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child onHello={hello} />
    </div>
  );
}

export default UseCallback;