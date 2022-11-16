import React from 'react'
import Login from "./components/Login"
import {
  BrowserRouter as Router,
  Routes, //Reemplaza el switch que se utilizaba en version anterior
  Route,
  Link
} from "react-router-dom";
import Brandbar from './components/layout/Brandbar';


function App() {  

  return (
    <>
      <div className="App">
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}
export default App