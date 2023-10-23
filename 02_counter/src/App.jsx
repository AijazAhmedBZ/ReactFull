import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  // let counter = 1;
  const addValue = () => {
    // console.log("Value Added", Math.random())
    counter = counter + 1;
    setCounter(counter);
    console.log("Add", counter);
  };
  const removeValue = () => {
    // console.log("Value Added", Math.random())
    counter = counter - 1;
    setCounter(counter);
    console.log("Remove", counter);
  };
  return (
    <>
      <h1>Mangaoo aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
