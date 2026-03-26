import React, { useReducer } from "react";

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };

//     case "decrement":
//       return { count: state.count - 1 };

//     case "reset":
//       return { count: 0 };

//     default:
//       return state;
//   }
// }

function reducer(state, action){
    if (action.type === "increment"){
        return { count: state.count + 1 };
    }

    else if(action.type === "decrement"){
        return { count: state.count - 1 };
    }

    else if ( action.type === "reset"){
        return { count: 0 };
    }
    else{ 
        return state;
    }
}
function UseReducer(){
    const [state, dispatch] = useReducer(reducer, {count: 0 });

    return(
        <div>
            <h1>{state.count}</h1>

            <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
}
export default UseReducer;