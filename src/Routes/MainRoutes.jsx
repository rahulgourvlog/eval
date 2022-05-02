import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import { Products } from "../components/Products";
import { CategoryCard } from "../components/CategoryCard";
const MainRoutes = () => {
  return <>{/* Navbar and all the routes */}
  <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/products" element={<Products/>} ></Route>
<Route path="/products/men" element={<CategoryCard/>}></Route>
<Route  path="/products/women" element={<CategoryCard/>}></Route>
<Route  path="/products/kids" element={<CategoryCard/>}></Route>
<Route  path="/products/homedecor" element={<CategoryCard/>}></Route>




  </Routes>
  
  
  
  
  
  
  
  </>;
};
export { MainRoutes };
