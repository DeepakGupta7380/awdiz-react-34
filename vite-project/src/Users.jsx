// import React from 'react';

// function Users(){

//     function handleClick(){
//         alert("Button Clicked!");
//     }
//     return(
//         <div>
//             <h1>React Event Handling</h1>

//             <button onClick={handleClick}>Click Me</button>
//         </div>
//     );
// }
// export default Users;


// import React from 'react';

// function Users(){

//     function handleChange(event){
//         console.log(event.target.value);
//     }

//     return(
//         <div>
//             <input type="text" placeholder="Type something" onChange={handleChange} />
//         </div>
//     );
// }

// export default Users;

// import React from 'react';

// function Users(){
//     function handleSubmit(event){
//         event.preventDefault();
//         alert("Form Submitted");
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder="Enter name" />
//             <button type="submit">Submit</button>
//         </form>
//     );
// }
// export default Users;

// import React from 'react';

// function Users(){

//     function showText(){
//         alert ("Mouse is over the text");
//     }

//     return(
//         <h2 onMouseOver={showText}>
//             Move mouse here
//         </h2>
//     );
// }

// export default Users;

import React from 'react';

function Users(){

    function handleKey(event){
        console.log("key Pressed:", event.key);
    }

    return(
        <input type="text" placeholder="Press any key" onKeyDown={handleKey} />
    );
}

export default Users;