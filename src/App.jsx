import React from 'react';
import { useState } from 'react';

const App = () => {

    const [fullName, setfullName] = useState({
        fname : '',
        lname : '',
        email : '',
        phone : '',
    });
    
    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        const {value,name} = event.target;
        

        setfullName ((prevalue) => {

            return{
                ...fullName,
                [name] : value,
            }
          //  console.log(prevalue);
         /* if (name === "fname") {
            return {
                fname : value ,
                lname : prevalue.lname ,
                email : prevalue.email ,
                phone : prevalue.phone ,
            }
          }else if(name === "lname"){
            return{
                lname : value ,
                fname : prevalue.fname ,
                email : prevalue.email ,
                phone : prevalue.phone ,

            }
          }else if (name === "email"){
            return{
                lname : prevalue.lname ,
                fname : prevalue.fname ,
                email : value ,
                phone : prevalue.phone ,

            }
          }else if (name === "phone"){
            return{
                lname : prevalue.lname ,
                fname : prevalue.fname ,
                email : prevalue.email ,
                phone : value ,

            }
          }*/

        });
        

    };
    

    const onSubmit = (event) => {
        event.preventDefault();
        alert('form submitted');
         };

    return (
        <>
            <div className='main_div'>
                <form>
                    <div>
                        <h1>hello {fullName.fname} {fullName.lname} </h1>
                        <p> {fullName.email}  </p>
                        <p> {fullName.phone} </p>
                        <input type="text" placeholder="Enter Name"  name='fname' onChange={inputEvent} value={fullName.fname}/>
                        <br />
                        <input type="text" placeholder="Enter Last Name" name='lname' onChange={inputEvent} value={fullName.lname} />
                        <br/>
                        <input type="text" placeholder="Enter email" name='email' onChange={inputEvent} value={fullName.email} />
                        <br/>
                        <input type="text" placeholder="Enter Last Name" name='phone' onChange={inputEvent} value={fullName.phone} />
                        <br/>
                        <button onClick={onSubmit}>click me </button>
                       
                    </div>
                </form>
            </div>
        </>
    )
}

export default App;
