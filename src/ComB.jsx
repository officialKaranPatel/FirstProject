import React, { useContext } from "react";
import ComC from "./ComC";
import { LastName } from "./App.jsx";
import { FirstName } from "./App.jsx";

const ComB =()=>{

    const fname = useContext(FirstName);
    const lname= useContext(LastName);
    return (
        <h1> kp {fname} {lname}</h1>
    )
}

export default ComB;