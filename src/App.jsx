import './App.css';
import Home from './Pages/home';
import Contact from './Pages/contact';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AllProduct from './Pages/products/all_products';
import Accesories from './Pages/products/accesories';
import BestSellers from './Pages/products/best_sellers';
import Consoles from './Pages/products/consoles';
import Controllers from './Pages/products/controllers';
import Login from './Pages/login';
import Register from './Pages/register';
import Item from './Pages/item';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [language, setLanguage] = useState(false)

  return (
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home language={language} setLanguage={setLanguage} /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />

        <Route path="/products/allProducts" element={isLoggedIn ? <AllProduct language={language} setLanguage={setLanguage} /> : <Navigate to="/login" />} />
        <Route path="/contact" element={isLoggedIn ? <Contact language={language} setLanguage={setLanguage} /> : <Navigate to="/login" />} />
        <Route path="/products/accesories" element={isLoggedIn ? <Accesories /> : <Navigate to="/login" />} />
        <Route path="/products/bestSellers" element={isLoggedIn ? <BestSellers /> : <Navigate to="/login" />} />
        <Route path="/products/consoles" element={isLoggedIn ? <Consoles /> : <Navigate to="/login" />} />
        <Route path="/products/controllers" element={isLoggedIn ? <Controllers /> : <Navigate to="/login" />} />
        <Route path="/item" element={isLoggedIn ? <Item /> : <Navigate to="/login" />} />

        <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
      </Routes>
  );
}

export default App;
