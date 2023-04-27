import React from 'react';
import './App.css';


import Home from "./pages/Home";

import { Routes, Route} from "react-router-dom";

import Nav from "./components/Nav"


function App() {
  return (
      <div className="App bg-light dark:bg-dark text-white h-screen">
          <Nav />
          <Routes >
              <Route path="/" element={<Home/>} />
          </Routes>
      </div>
  );
}

export default App;
