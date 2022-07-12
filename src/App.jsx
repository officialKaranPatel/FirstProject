import {useState} from "react";


const App = () => {
    const purple = '#8e44ad';
    const [bg, setBg] = useState(purple); 
    const [name,setName] = useState('click me');
    const bgchange = () => {
       // console.log("clicked");
       let newBg = '#34495e';
       setBg(newBg);
       setName('yup');

    };
    const bgBack = () =>{
        setBg(purple);
        setName("ayyo");
    }
    return(
        <> 
        <div style={{ backgroundColor: bg }}>
             <button onClick = {bgchange} onDoubleClick ={bgBack}>{name}</button>
        </div>
        </>
    )
}

export default App;
/*import { useState } from "react";


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
export default App; */