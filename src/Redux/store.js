// create store here
import { reducer } from "./reducer";
import {legacy_createStore as createStore,compose,applyMiddleware} from "redux";
import { combineReducers } from "redux";




const thunk=(store)=>(next)=>(action)=>{
  if(typeof action==="function"){
 return action(store.dispatch)
  }
  next(action)
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);





 export const store=  createStore(reducer,enhancer)




// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
