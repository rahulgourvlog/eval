import { REQUEST } from "./actionTypes";
import { SUCCESS } from "./actionTypes";
import { FAILURE } from "./actionTypes";
const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

 export const reducer = (state = initState, { type, payload }) => {
switch(type){
case  REQUEST:{
  return{
    ...state,
    data:[],
    isLoading:true,
    isError: false,
    filterData: [],
    products: [],

  }

}

case  SUCCESS:{
  return{
    ...state,
    data:payload,
    isLoading:false,
    isError: false,
    filterData: [],
    products: [],

  }

}


case FAILURE :{
  return{
    ...state,
    data:[],
    isLoading:false,
    isError: true,
    filterData: [],
    products: [],

  }

 

}
default:return state


}
};





