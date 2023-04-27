import React from 'react';
import './App.css';


import Home from "./pages/Home";

import { Routes, Route} from "react-router-dom";

import Nav from "./components/Nav"


function App() {
  return (
      <body class="dark bg-light dark:bg-dark text-white h-screen">
      <div className="App">
          <Nav />
          <Routes >
              <Route path="/" element={<Home/>} />
          </Routes>
      </div>
      </body>

  );
}

export default App;
