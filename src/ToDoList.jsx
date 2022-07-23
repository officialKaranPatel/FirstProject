import React from "react";
import AddIcon from '@material-ui/icons/Add';

const ToDoList =()=>{
    return(
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder="add a item"/>
                <button>
                    <AddIcon/>
                </button>
            </div>
        </div>
    )

}

export default ToDoList;