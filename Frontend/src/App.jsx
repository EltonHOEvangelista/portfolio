
import React from "react";
import {Route, Routes} from 'react-router-dom';
import './App.css'

// App components
import Home from "./components/Home.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Industry from "./components/Industry.jsx";
import Certificate from "./components/Certificate.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/education" element={< Education/>} />
        <Route path="/experience" element={< Experience/>} />
        <Route path="/industry" element={< Industry/>} />
        <Route path="/certificate" element={< Certificate/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
