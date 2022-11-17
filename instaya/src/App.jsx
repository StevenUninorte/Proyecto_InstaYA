import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes, //Reemplaza el switch que se utilizaba en version anterior
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login"
import Registro from './components/Registro';
import ValidationExample from './components/ValidationExample'


function App() {  

  return (
    <>
      <div className="App">
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/validation" element={<ValidationExample />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}
export default App