import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CartPage from "./pages/CartPage";
import Deals from "./pages/Deals";
import SignUp from "./pages/authPages/SignUp";
import Login from "./pages/authPages/Login";
import Items from "./components/Items";
import ItemDetail from "./pages/ItemDetail"
import Electronics from "./components/itemssold/Electronics";
import Clothes from "./components/itemssold/Clothes";
import Accessories from "./components/itemssold/Accessories";
import HomeAndWellness from "./components/itemssold/HomeAndWellness";
import BeautyAndSkinCare from "./components/itemssold/BeautyAndSkinCare";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/Overview";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/lg" element={<Login />} />
           <Route path="/" element={<SignUp />} />
<Route path="/dashboard" element={<DashboardLayout/>}>
         <Route index element={<Overview/>}/>
          <Route path="h" element={<Home />}/>
          <Route path="c" element={<Categories/>} />
          <Route path="crt" element={<CartPage/>} />
          <Route path="d" element={<Deals/>}/>
          <Route path="it" element={<Items />}/>
          <Route path="item/:id" element={<ItemDetail/>}/>
          <Route path="electronics" element={<Electronics/>}/>
          <Route path="clothes" element={<Clothes/>}/>
          <Route path="accessories" element={<Accessories/>}/>
          <Route path="home-and-wellness" element={<HomeAndWellness/>}/>
          <Route path="beauty-and-skin-care" element={<BeautyAndSkinCare/>}/>
       </Route> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;
