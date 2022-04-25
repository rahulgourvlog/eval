import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";

// add style for form
export const Form = styled.form`
`;
// add style for text area
export const Textarea = styled.textarea`

`;

export const EditBookData = () => {
  const {id}=useParams();
  const handleUpdate = async(e) => {
    e.preventDefault();
    // let response= await fetch(` http://localhost:8080/books/${id}`,{
    //   method:"PATCH",
    //   headers: {"content-type":"Application/json"},
    //   body:JSON.stringify({
    //   "thumbnailUrl": thumbnailUrl,
    //  "longDescription": longDescription
    //   })
    // });
    // let data=await response.json();
    
    // console.log(data);

    // make a PATCH request to http://localhost:8080/books/${id} and update thubnail and long description fields
    // on successfull request navigate to previous page
  };

  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Input
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
        />
        <Textarea
          data-testid="update-form-description"
          placeholder="Update long Description"
        />
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>
    </>
  );
};
