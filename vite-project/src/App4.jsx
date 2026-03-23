import React, { useCallback, useState } from "react";
import Childs from "./Childs";

function App4(){
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);

    return(
        <>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Childs onClick={handleClick} />
        </>
    );
}
export default App4;