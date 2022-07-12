import React from "react";
import { useState } from "react";


const App = () =>{
    const state = useState();
 //console.log(state);
 const [count, setCount] = useState(0);
const IncNum = () =>{
    setCount(count +1);
}
    return(
        <>
        <h1>{count}</h1>
        <button onClick={IncNum}>click me</button>
        </>
    )

}

export default App;