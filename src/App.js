import React from "react";
import { Routes, Route } from "react-router-dom"; 
import "./App.css";
import Body from "./components/Body";
import About from "./components/About";
import Header from "./components/Header";


// Episode 7 Started
function App() { 
  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Body />} /> 
      <Route path="/About" element={<About />} />
    </Routes>
    </div>
  );
}

export default App;