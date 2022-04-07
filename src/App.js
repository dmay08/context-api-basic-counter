import "./styles.css";
import React, { useState } from "react";
import CountContext from "./context";
import Child from "./Child";

export default function App() {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider value={{ count, countHandler }}>
      <h2>{count}</h2>
      <Child />
    </CountContext.Provider>
  );
}
