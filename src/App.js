import React from 'react';
import './App.css';


import Home from "./pages/Home";

import { Routes, Route} from "react-router-dom";

import Nav from "./components/Nav"


function App() {
  return (
      <div className="App">
          <Nav />
          <Routes >
              <Route path="/" element={<Home/>} />
          </Routes>
      </div>
  );
}

export default App;
