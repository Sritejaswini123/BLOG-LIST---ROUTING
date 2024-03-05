import React from 'react';
import './App.css';
import { BrowserRouter  , Link, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
     <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/contact" element={<Contact/>} />
      <Route path = "*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
