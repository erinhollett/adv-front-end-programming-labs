import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Your current count is {count}</p>
      <div style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
        <button onClick={() => setCount(count + 1)}
          style={{
            border: "1px solid #ccc",
            padding: "3px 3px"
          }}
        >Increment</button>

        <button onClick={() => setCount(count - 1)}
          style={{
            border: "1px solid #ccc",
            padding: "3px 3px"
          }}
        >Decrement</button>
      </div>
    </div>
  )
}