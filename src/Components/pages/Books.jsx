import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
 add required style here
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getdata()
    // make a GET request to http://localhost:8080/books to get all the books data
  }, []);

const getdata=async()=>{
let response= await fetch(` http://localhost:8080/books`);
let collect=await response.json();

console.log(collect);

setData([...collect])

}

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          {data.map((elem)=>{
            return <BookCard key={elem.id} {...elem}/>
          })

          }
      </Grid>
    </>
  );
};
export default Books;
