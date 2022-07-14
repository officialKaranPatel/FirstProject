import React from 'react';
import { useState } from 'react';

const App = () => {

    const [fullName, setfullName] = useState({
        fname : '',
        lname : '',

    });
    
    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        const value = event.target.value;
        const name = event.target.name;

        setfullName ((prevalue) => {
          //  console.log(prevalue);
          if (name === "fname") {
            return {
                fname : value ,
                lname : prevalue.lname ,
            }
          }else if(name === "lname"){
            return{
                lname : value ,
                fname : prevalue.fname ,

            }
          }

        });

    };
    

    const onSubmit = (event) => {
        event.preventDefault();
        alert('form submitted');
         };

    return (
        <>
            <div className='main_div'>
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>hello {fullName.fname} {fullName.lname} </h1>
                        <input type="text" placeholder="Enter Name"  name='fname' onChange={inputEvent} value={fullName.fname}/>
                        <br />
                        <input type="text" placeholder="Enter Last Name" name='lname' onChange={inputEvent} value={fullName.lname} />
                        <br/>
                       
                    </div>
                </form>
            </div>
        </>
    )
}

export default App;
