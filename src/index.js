import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; 

const fname = "karan";
const lname = "patel";
const img1 =  "https://picsum.photos/200/300";
const img2 =  "https://picsum.photos/250/300";
const img3 =  "https://picsum.photos/300/300";
const links = "https://www.google.com/";

ReactDOM.render(
    
    <>
    <h1 className ="heading"> { `first name is ${fname} and last name is ${lname} `} </h1>
    <div className="img_div">
    <img src={img1} alt='karan'/>
    <img src={img2} alt='karan'/>
    <a href={links}>
    <img src={img3} alt='karan'/>
    </a>
    </div>  
     </>,
    document.getElementById("root")

);
