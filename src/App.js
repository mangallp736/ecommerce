import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

 function App() {
  return (
    <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<Products />} />
      <Route path='/' element={<Cart />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;