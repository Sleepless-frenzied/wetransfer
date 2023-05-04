import React from 'react';
import './App.css';


import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";



import { Routes, Route} from "react-router-dom";
import Nav from "./components/Nav"


function App() {
  return (
      <div className="App bg-light dark:bg-dark text-white h-screen  transition-all duration-500">
          <Nav />
          <Routes  >
              <Route path="/" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Contacts" element={<Contacts/>} />

          </Routes>
      </div>
  );
}

export default App;
