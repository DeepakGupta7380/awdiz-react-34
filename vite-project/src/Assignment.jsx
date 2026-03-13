import React, { useState } from 'react';

function Assignment(){

    const [name, setName] = useState("");

    function handleChange(event){
        setName(event.target.value);
    }
    function clearName(){
        setName("");
    }

    return(
        <div>
            <h2>Enter Name:</h2>

            <input type="text" placeholder="Type your name"
            value={name} onChange={handleChange} />

            <br/><br/>

            <button onClick={clearName}>Clear Name</button>

            <h3>Hello {name}</h3>
        </div>
    );
}
export default Assignment;