import React from "react";
import { createRoot } from "react-dom";
const root = createRoot(document.getElementById("root"));

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Hello World</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

root.render(<App />);
