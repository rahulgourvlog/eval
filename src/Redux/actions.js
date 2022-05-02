// use axios for api call
import axios from "axios";
import {REQUEST, SUCCESS,FAILURE} from "./actionTypes"

 export const getrequest=()=>({
   type: REQUEST,

})

 export const getsucess=(payload)=>({
    type: SUCCESS,
payload
})

export const geterror=()=>({
    type:FAILURE
})

export const  getProductsData=(payload)=>async(dispatch)=>{
    dispatch(getrequest());
try{
    
    let res= await fetch("https://movie-fake-server.herokuapp.com/products");
    let data=await res.json();

    console.log(data)
   // let payload=data
    dispatch(getsucess(data));



}catch(err){
    dispatch(geterror())
}


}

//  const sortProducts = (payload)=> {

//  };

// const filterProducts = () => {};

// { getProductsData, sortProducts, filterProducts };
