// import React, { useState } from "react";

// function Counter(){
//     const [count, setCount] = useState(0);

//     return(
//         <div>
//             <h2>Count: {count}</h2>

//             <button onClick={() => setCount(count + 1)}>Increase</button>
//             <button onClick={() => setCount(count - 1)}>decrease</button>
//             <button onClick={() => setCount(5)}>Reset</button>
//         </div>
//     );
// }
// export default Counter;



import React, { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const increase = () =>{
        if(count < 10){
            setCount(count + 1);
        }
    };

    const decrease = ()=> {
        if(count > 0){
            setCount(count - 1);
        }

    };
    const reset = () =>{
        setCount(0);
    };
    return(
        <div>
            <h1>React Counter App</h1>
            <h2>{count}</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default Counter;