import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // let name = "dude";
  const [name, setName] = useState("dude");
  const changeName = () => {
    // name = "bro";
    setName("bro");
    console.log(name);
  };
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={changeName}>Change name</button>
    </div>
  );
}

export default App;
