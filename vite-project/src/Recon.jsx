// import React, { useState } from "react";

// function Recon(){
//     const [items, setItems] = useState([
//         { id: 1, name: "A" },
//         { id: 2, name: "B" },
//         { id: 3, name: "C" },
//     ]);

//     const addItemAtStart = () => {
//         setItems([
//             { id: 4, name: "New, deepak" },
//              { id: 5, name: "New" },
//             ...items
//         ]);
//     };

//     return(
//         <div>
//             <button onClick={addItemAtStart}>Add Item</button>

//             <ul>
//                 {items.map(item => (
//                     <li key={item.id}>{item.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Recon;

import React, { useState } from "react";

function Recon(){
    const [text, setText] = useState("hello");

    return(
        <div>
            <h1>{text}</h1>

            <button onClick={() => setText(" World")}>
                Change Text
            </button>
        </div>
    );
}

export default Recon;