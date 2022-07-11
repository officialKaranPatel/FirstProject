import React from "react";
import ReactDom from "react-dom";
import Card from "./Cards";
import data from "./data";
import './index.css'

ReactDom.render(
    <>
        <h1 className="heading_style">List Of top 5 netflix Series</h1>
        {data.map((val,index) => {
            console.log(index);
            return (
                <Card
                    key={val.id}
                    sname={val.sname}
                    imgsrc={val.imgscr}
                    title={val.title}
                    link={val.link}
                />
            );
        })
        }
    </>,
    document.getElementById("root")

);