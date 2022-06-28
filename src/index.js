import React from "react";
import ReactDOM from "react-dom";

const fname = "karan";
const lname = "patel";
const birthDate = 17/02/2000
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();


ReactDOM.render(
    
    <>
    <h1> { `first name is ${fname} and last name is ${lname} `} </h1>
    <p> current date is = {currDate} </p>
    <p> current time is = {currTime} </p>
    
     </>,
    document.getElementById("root")

);
