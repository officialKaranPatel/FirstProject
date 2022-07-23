import React from "react";

const MyAccordian =({question,answer})=>{
    return(
        <>
       <h1> {question} </h1>
       <p>{answer}</p>
        </>
    )
}
export default MyAccordian;