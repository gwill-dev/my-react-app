import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>My React App 🚀</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        ➕ Increase
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        ➖ Decrease
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ marginLeft: "10px" }}
      >
        🔄 Reset
      </button>
    </div>
  );
}

export default App;