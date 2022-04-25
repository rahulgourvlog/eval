// import axios from "axios";
import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = (email, password) => {
    //  api request to reqres.in for the token
    const Postdata=async()=>{
      try{let response=await fetch(`https://reqres.in/api/login`,{
        method:"POST",
       headers: {"content-type":"Application/json"},
       body:JSON.stringify({
       "email": email,
      "password": password
       })
      })
      let data=await response.json();
  console.log(data);
 
    if(data.token){
      setToken(true)
    }
  
    }catch(err){
      console.log(err)
    }
    }
    Postdata()
    console.log(email, password);
  };


  const handleLogout = () => {
    setToken("")
    //  set token back to " " once logged out
  };

  const value = { handleLogin, token, handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
