import React, { useEffect } from "react";
import { Select } from "./Styled";
import {Grid} from "./Styled";
import {useDispatch,useSelector} from "react-redux";
import{ getProductsData} from "../Redux/actions"
import { ProductCard } from "./ProductCard";
export const Products = () => {
  const dispatch=useDispatch();
  const state=useSelector((state)=>state.data);
  console.log(state)
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
   dispatch( getProductsData())
  }, [dispatch]);
  const handleSort = (e) => {
    // dispatch sort products on change
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}

        {state.map((item)=>{
          return <div key={item.id}>
<div>
  <h2>{item.title}</h2>
</div>
<div>
  <img src={item.image}/>
</div>
<div>
  <h5>{item.brand}</h5>
</div>
<div>
  <p>Price:{item.price}</p>
</div>
          </div>
        })}
      </Grid>
    </>
  );
};
