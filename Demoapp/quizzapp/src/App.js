import logo from './logo.svg';
import './App.css';
import React from "react";
import LoginPage from "./LoginPage";
import QuizzPage from "./QuizzPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/quiz" element={<QuizzPage />} />
      </Routes>
    </Router>
  )
       
}

export default App;





