import React from "react";
import { useState } from "react";


const App = () =>{
    
 
   const currentTime = new Date().toLocaleTimeString();
   const [ctime, setCtime] = useState(currentTime);

    const UpdateTime = () => {
    
    const  currentTime = new Date().toLocaleTimeString();
    setCtime(currentTime);


 };
 
  setInterval(UpdateTime,1000);
    return(
        <>
        <h1>{ctime}</h1>
        

        </> 
);

    };
export default App;