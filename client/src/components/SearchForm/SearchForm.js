import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const styles = {}
const SearchForm = props => {
  console.log(props)
  return ( 
  <form>
  <p>Name: {props.name}</p>
  <input
    type="text"
    placeholder="Username"
    name="name"
    value={props.name}
    onChange={props.handleInputChange}
  />
  
  <p>Photo: {props.photo}</p>
  <input
    type="text"
    name="photo"
    value={props.photo}
    onChange={props.handleInputChange}
  />

  <p>Photo: {props.photo}</p>
  <input
    type="text"
    name="photo"
    value={props.photo}
    onChange={props.handleInputChange}
  />

  <p>Photo: {props.photo}</p>
  <input
    type="text"
    name="photo"
    value={props.photo}
    onChange={props.handleInputChange}
  />




  <button onClick={props.handleFormSubmit}>Submit</button>
</form>)
}

export default SearchForm;