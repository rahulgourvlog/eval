import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
<Link to="/" >Home</Link>
<Link to="/about">About</Link>
<Link to="/products">Products</Link>
<Link to="/products/men">Men</Link>
<Link to="/products/women">Women</Link>
<Link to="/products/kids">Kids</Link>
<Link to="/products/homedecor">homedecor</Link>
    </nav>
  );
};
