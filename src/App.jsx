import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Test from "./Test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h3>Test</h3>
        <Test name="am a redbull" eat="eater"></Test>
        <Test></Test>
        <Test></Test>
        <Test></Test>
      </div>
    </>
  );
}

export default App;
