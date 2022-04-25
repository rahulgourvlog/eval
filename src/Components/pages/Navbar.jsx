import { useContext } from "react";
 import { Link } from "react-router-dom";
// import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // if(token){
  //   <Link to="/Logout" >Logout</Link>
  // }
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      {/* <nav> */}
      <Link to="/home" >Home</Link>
      <Link to="/About" >About</Link>
      <Link to="/books" >Books</Link>
     {token ?<Link to="/logout" >Logout</Link>:  <Link to="/login" >Login</Link>}
        {/* keep all the NavLinks here */}
        
      {/* </nav> */}
    </>
  );
};
