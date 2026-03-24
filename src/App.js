<<<<<<< HEAD
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import CartProvider from './context/CartContext';
import ProductDetails from "./pages/ProductDetails";


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
=======
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
>>>>>>> b75b3eeef2203be75c5b9587ff7722018fa8ca4a
