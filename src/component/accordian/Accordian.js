import React, { useState } from "react";
import { questions } from "./api";
import "./accordian.css";
import MyAccordian from "./MyAccordian";

const Accordian =()=>{
    const [data,setData] = useState(questions);
    return(
        <>
        {
            data.map((curElement)=>{
                const {id,question,answer} = curElement;
                return<MyAccordian key={id} {...curElement}/>

            })
        }
        </>
    )
}
export default Accordian;