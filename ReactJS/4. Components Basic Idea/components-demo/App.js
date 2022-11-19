import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Clicker from "./components/Clicker";
import Counter from "./components/Counter";
import Book from "./components/Book";
import Child from "./components/Child";
import { useState } from "react";

function App() {
    const [childData, setChildData] = useState({
      name: 'unknown',
      age: 'unknown'
    });
  
    const passData = (data) => {
      setChildData(data);
    };
  
    return (
      <div className="App">
        <Child passData={passData} />
        <p>The person info from the Child compoent: <strong>{childData.name}</strong>, <strong>{childData.age}</strong> years old</p>
      </div>
    );
  }
  
  export default App;
