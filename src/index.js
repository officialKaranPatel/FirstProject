import React from "react";
import ReactDOM  from "react-dom";
import myfav,{favprog,myName} from "./App.jsx";

ReactDOM.render(
    <>
    <ol>
        <li>kp</li>
        <li>{myfav}</li>
        <li>{favprog}</li>
        <li>{myName()}</li>
    </ol>
    </>,
    document.getElementById("root")
);

