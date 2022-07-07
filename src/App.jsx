import React from "react";
import add , {sub,mul,div} from "./Calc"

function App (){
    return(
        <>
       <ul>
          <li> sum is{add(40,4)} </li>
          <li> sub is{sub(40,4)} </li>
          <li> mul is{mul(40,4)} </li>
          <li> div is{div(40,4)} </li>
       </ul>
    </>
    )
}

export default App;