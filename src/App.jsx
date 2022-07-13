import React from 'react';
import { useState } from 'react';

const App = () =>{
   
    const [name,setName] = useState();
    const [lastName,setlastName] = useState();
    const [fullName,setfullName]= useState();
    const [lastNamenew,setlastNamenew] = useState();


    const inputEvent = (Event) =>{  
        console.log(Event.target.value);
        setName(Event.target.value);
        
    };

    const onSubmit = (Event) => {
        Event.preventDefault();
        setfullName(name);
        setlastNamenew(lastName);
    }
    

    const inputEventTwo = (Event) =>{
        setlastName(Event.target.value); 
    }
    return(
    <>
      <div className='main_div'>
        <form onSubmit={onSubmit}>
            <div>

        <h1>hello {fullName} {lastNamenew} </h1>
        <input type="text"  placeholder="Enter Name" onChange={inputEvent} value={name}/>
        <br/>
        <input type="text"  placeholder="Enter Last Name" onChange={inputEventTwo} value={lastName}/>
        <button type="submit" > click me</button>
      </div>
      </form>
      </div>
    
    </>
    ) 
}

export default App;
