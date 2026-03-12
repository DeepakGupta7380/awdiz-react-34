// import React, { useState } from 'react';

// function Msg(){
//     const [message, setMessage] = useState("");

//     function showMessage(){
//         setMessage("Button Clicked!");
//         alert("deepak");
//     }

//     return(
//         <div>
//             <h2>{message}</h2> 

//             <button onClick={showMessage}>Click Me</button>
//         </div>
//     );
// }
// export default Msg;

// import React, { useState } from 'react';

// function Msg(){
//     const [text, setText] = useState("");

//     function handleChange(event){
//         setText(event.target.value);
//     }

//     return(
//         <div>
//             <h2>You typed: {text}</h2>

//             <input type="text" placeholder="Type something" onChange={handleChange} />
//         </div>
//     );
// }
// export default Msg;

// import React, { useState } from 'react';

// function Msg(){
//     const [name, setName] = useState("");

//     function handleChange(event){
//         setName(event.target.value);
//     }

//     function handleSubmit(event){
//         event.preventDefault();
//         alert("Form Submitted: " + name);
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder="Enter name" value={name}
//              onChange={handleChange} />
             
//              <button type="submit">Submit</button>
//         </form>
//     );
// }
// export default Msg;

// import React, { useState } from 'react';

// function Msg(){
//     const [message, setMessage] = useState("Move mouse here");

//     function showText(){
//         setMessage("Mouse is over the text");
//     }

//     return(
//         <h2 onMouseOver={showText}>
//             {message}
//         </h2>
//     );
// }
// export default Msg;

import React, { useState } from 'react';

function Msg(){
    const [keyPressed, setKeyPressed] = useState("");

    function handleKey(event){
        setKeyPressed(event.key);
    }

    return(
        <div>
        <h2>Key Pressed: {keyPressed}</h2>

        <input type="text" placeholder="Press any key" onkeyDown={handleKey} />
        </div>
    );
}
export default Msg;