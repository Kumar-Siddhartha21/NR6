import React from "react";
import { Routes, Route } from "react-router-dom"; 
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";



// Episode 7 Started
function App() { 
  return (
    <div>
    <Header/>
   <Outlet/>
    </div>
  );
}

export default App;