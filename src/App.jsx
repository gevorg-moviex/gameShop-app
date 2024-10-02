import { useState } from 'react'
import './App.css'
import Home from './Pages/home'
import Contact from './Pages/contact';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AllProduct from './Pages/products/all_products';
import Accesories from './Pages/products/accesories';
import BestSellers from './Pages/products/best_sellers';
import Consoles from './Pages/products/consoles';
import Controllers from './Pages/products/controllers';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products/allProducts' element={<AllProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/products/accesories' element={<Accesories />} />
        <Route path='/products/bestSellers' element={<BestSellers />} />
        <Route path='/products/consoles' element={<Consoles />} />
        <Route path='/products/controllers' element={<Controllers />} />
      </Routes>
    </>
  )
}

export default App