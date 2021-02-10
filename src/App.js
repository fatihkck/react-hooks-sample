import react, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import First from './First';
import Second from './Second';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br></br>
      <First></First>
      <Second></Second>
    </div>
  );
}

export default App;
