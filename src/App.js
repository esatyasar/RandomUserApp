import React, {useState, useEffect} from "react";
import {images} from "./Assets";
import './App.css';
import axios from "axios";

function App() {

  const [picture,setPicture] = useState();
  const [title,setTitle] =useState();
  const [firstName, setFirstName] =useState();
  const [lastName, setLastName] =useState();
  const [email,setEmail] = useState();
  const [phoneNumber,setPhoneNumber] = useState();
  const [city,setCity] = useState();
  const [country,setCountry] = useState();
  const [age,setAge ] = useState();
  const [date,setDate] = useState();
  const [refresh,setRefresh] = useState(true);
 
  const response = axios.get("https://randomuser.me/api")
  
  useEffect(() => {
    response.then((response) => setPicture(() => response.data.results[0].picture.thumbnail))
    response.then((response) => setTitle(() => response.data.results[0].name.title))
    response.then((response) => setFirstName(() => response.data.results[0].name.first))
    response.then((response) => setLastName(() => response.data.results[0].name.last))
    response.then((response) => setEmail(() => response.data.results[0].email))
    response.then((response) => setPhoneNumber(() => response.data.results[0].phone))
    response.then((response) => setCity(() => response.data.results[0].location.city))
    response.then((response) => setCountry(() => response.data.results[0].location.country))
    response.then((response) => setAge(() => response.data.results[0].dob.age))
    response.then((response) => setDate(() => response.data.results[0].registered.date.slice(0,10)))
  },[refresh])

  const refreshRandom = () => {
    setRefresh(!refresh)
  }

  return (
    <div className="App d-flex justify-content-center flex-column align-items-center rounded-3" style = {{height:"100vh"}}>
      <div className="main-container" >
        <div className ="d-flex justify-content-around my-3"> 
          <img className="rounded-circle" src={picture} alt="user" style = {{width:"8rem"}} />
          <h3 className="d-flex justify-content-around my-auto" style = {{width:"20rem"}}><span>{title}. {firstName}</span><span>{lastName}</span></h3>
        </div>
        <div className="d-flex justify-content-around my-4">
          <div className="d-flex justify-content-center" style = {{width :"8rem"}}>
            <img style = {{width:"40px"}}src={images[0]} alt="email" />
          </div>
          <p className="d-flex justify-content-around my-auto" style = {{width:"20rem"}}>{email}</p>
        </div>
        <div className="d-flex justify-content-around my-4">
          <div className="d-flex justify-content-center" style = {{width :"8rem"}}>
            <img style = {{width:"40px"}} src={images[2]} alt="phone" />
          </div>
          <p className="d-flex justify-content-around my-auto" style = {{width:"20rem"}}>{phoneNumber}</p>
        </div>
        <div className="d-flex justify-content-around my-4">
          <div className="d-flex justify-content-center" style = {{width :"8rem"}}>
            <img style = {{width:"40px"}} src={images[1]} alt="location" />
          </div>
          <p className="d-flex justify-content-around my-auto" style = {{width:"20rem"}}><span>{city} / {country}</span></p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center my-4">
          <p>Age : {age}</p>
          <p>Register Date : {date}</p>
        </div>
        
      </div>
      <div className="d-flex justify-content-center my-5 ">
          <button className= "btn border-0 rounded-3 fs-4 p-2" onClick={refreshRandom} >Random User</button>
      </div>
    </div> 
  );
}

export default App;