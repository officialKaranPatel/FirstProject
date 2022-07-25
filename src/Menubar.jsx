import React from "react";
import {Link} from "react-router-dom";

const Menu = ()=>{
    return (
        <div>
            <Link to="/">About us</Link>
            
            <Link to="/contact">contact</Link>
            <br/>
            <a href="/">About us</a>
            <a href="/contact">Contact</a>
        </div>
    )
}

export default Menu;