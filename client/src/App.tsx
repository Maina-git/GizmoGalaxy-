import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CartPage from "./pages/CartPage";
import Deals from "./pages/Deals";
import SignUp from "./pages/authPages/SignUp";
import Login from "./pages/authPages/Login";
import Footer from "./components/Footer";
import Items from "./components/Items";
import ItemDetail from "./pages/ItemDetail"

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/c" element={<Categories/>}/>
          <Route path="/crt" element={<CartPage/>}/>
          <Route path="/d" element={<Deals/>}/>
          <Route path="/sgn" element={<SignUp/>}/>
          <Route path="/lg" element={<Login/>}/>
          <Route path="/it" element={<Items/>}/>
          <Route path="/item/:id" element = {<ItemDetail/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
