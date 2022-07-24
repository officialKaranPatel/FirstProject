import React from "react";
import { LastName } from "./App.jsx";
import { FirstName } from "./App.jsx";

const ComC =()=>{
    return (
         <div>
             <FirstName.Consumer>{(fname)=>{  
                return(
                    <LastName.Consumer>{(lname)=>{
                       return(<h1> kp {fname}{lname}</h1>)
                    }}
                        </LastName.Consumer>
                )
                 
             }}</FirstName.Consumer>
         </div>
    
    )
}

export default ComC;