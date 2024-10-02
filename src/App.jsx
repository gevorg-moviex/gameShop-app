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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <LayoutProducts>
          <ProductSort database={products1} />
      </LayoutProducts>   */}
    </>
  )
}

export default App
