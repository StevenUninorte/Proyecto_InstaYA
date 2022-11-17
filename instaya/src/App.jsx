import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./components/Login"
import {
  BrowserRouter as Router,
  Routes, //Reemplaza el switch que se utilizaba en version anterior
  Route,
  Link
} from "react-router-dom";
import EncabezadoLogin from './components/layout/EncabezadoLogin';


function App() {  

  return (
    <>
      <div>
      <EncabezadoLogin/>
      </div>
      <div className="App">
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}
export default App