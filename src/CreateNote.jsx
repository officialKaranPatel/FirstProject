import React from "react";
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";



const CreateNote = (props)=>{

    const [note,setNote]=useState({
        title:"",
        content:"",
    });

    const InputEvent = (Event)=>{
        const value = Event.target.value;
        const name = Event.target.name;

        setNote((prevData)=>{
            return{
                ...prevData,
                [name]: value,
            }
        })
    }

    const addEvent = ()=>{
        props.passNote(note)
        setNote({
            title:"",
            content:"",
        });

    }
    
    return(
    <div>
        <div className="main_note">
            <form>
                <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/>
                <textarea rows="" name="content" column="" value={note.content} onChange={InputEvent} placeholder="write a note..."></textarea>
                <button onClick={addEvent}>
                  <AddIcon/>
                </button>
            </form>
        </div>
    </div>
    )

    
}
export default CreateNote;