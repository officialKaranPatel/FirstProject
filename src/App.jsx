import React from "react"; 
// import {Route,Switch} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menubar";

const App = ()=> {
    const Name=()=>{
        return<h1>hello, i am name page</h1>
    }
    return (
        <div>
            <Menu/>
            <Switch>
                <Route exact path="/" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route path="/contact/Name" component={Name}/>
            </Switch>
        </div>
    )
}

 
export default App;
