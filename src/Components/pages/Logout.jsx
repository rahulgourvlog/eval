import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
 import { AuthContext } from "../context/AuthContext";

const Logout = () => {
  const {handleLogout}=useContext(AuthContext)
  useEffect(() => {
     handleLogout()
      
      //  set token back to " " once logged out
    
    // get handleLogout call back from context
  }, []);
  return (
    <>
      <h3>
        User logged out succesfully click here to <Link to="/login">Login</Link>
      </h3>
    </>
  );
};

export { Logout };
