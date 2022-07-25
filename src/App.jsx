import React, { useState } from "react";
import { useEffect } from "react";

const App = ()=> {
    const[num , setNum]=useState(0);
    
    const[nums , setNums]=useState(0);

    useEffect(()=>{
       // alert("i am clicked");
       document.title=`you clicked me ${num}` 
    },[num]);
    return(
    <div>
        <h1> {num} {nums}</h1>
        <button onClick={()=>{setNum(num + 1);}}>click me</button>
        
        <button onClick={()=>{setNums(nums+ 1);}}>click me</button>
    </div> 

)}

 
export default App;
