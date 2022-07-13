import React from 'react';
import { useState } from 'react';

const App = () =>{
   
    const [name,setName] = useState();
    const [fullName,setfullName]= useState();


    const inputEvent = (Event) =>{
        console.log(Event.target.value);
        setName(Event.target.value);
        
    };

    const onSubmit = () => {
        setfullName(name);
    }
    return(
    <>
      <div>
        <h1>hello {fullName} </h1>
        <input type="text"  placeholder="Enter Name" onChange={inputEvent} value={name}/>
        <button onClick={onSubmit}> click me</button>
      </div>
    
    </>
    ) 
}

export default App;
