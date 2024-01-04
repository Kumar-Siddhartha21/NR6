import React from "react";
import { Routes, Route } from "react-router-dom"; 
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";



// Episode 7 Started
function App() { 
  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Body />}  /> 
    </Routes>
    </div>
  );
}

export default App;