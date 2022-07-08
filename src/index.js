import React from "react";
import ReactDom from "react-dom";
import Card from "./Cards";

ReactDom .render(
    <>
          <Card    
                    imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
                     title=" A Netflix original series "
                     Sname ="Dark"
                     link="https://www.netflix.com/in/title/80990668?source=35"
                      /> 
          <Card /> 

          <Card    
                    imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
                     title=" A Netflix original series "
                     Sname ="stranger things"
                     link="https://www.netflix.com/in/title/80990668?source=35"
                      /> 
          <Card />                                                                              
     </>,
    document.getElementById("root")

);