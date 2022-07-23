import React from "react";
import { useState } from "react";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

const App = ()=>{

    const [addItem, setAddItem]=useState([]);


    const addNote = (note)=>{
     //   alert("I am clicked");
        setAddItem((prevData)=>{
            return[...prevData,note];
        })
    }
    const onDelete =(id )=>{
        setAddItem((olddata)=>{
            olddata.filter((currdata,index)=>{
                return index !== id;
            })
        })

    }

    return(
    <div>
        <Header/>
        <Footer/>
        <CreateNote passNote={addNote}/>
        
      {  addItem.map ((val,index) =>{
            return<Note
                   key={index}
                   id={index}
                   title={val.title}
                   content={val.content}
                   deleteItem={onDelete}
            />


        }) }
            
        
    </div>
    )

    
}
export default App;
