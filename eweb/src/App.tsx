import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CartPage from "./pages/CartPage";


const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/c" element={<Categories/>}/>
          <Route path="/crt" element={<CartPage/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
