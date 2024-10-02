import { useState } from 'react'
import './App.css'
import Home from './Pages/home'
import Contact from './Pages/contact';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar/sidebar';
import LayoutProducts from './Layout/layoutProducts';
// import Sidebar from './Components/Sidebar/sidebar';
import { products1 } from '../data';
import ProductSort from './Components/ProductSort/productSort';
import AllProduct from './Pages/products/all_products';
import Accesories from './Pages/products/accesories';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products/allProducts' element={<AllProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/products/accesories' element={<Accesories />} />
      </Routes>
    </>
  )
}

export default App
