import React, { useState, useMemo } from "react";

function A(){
    const [count, setCount] = React.useState(0);
    const [text, setText] = React.useState("");

    const result = useMemo(() => {
        console.log("calculation running...");
        return count;
    }, [count]);

    return(
        <div>
            <h1>{result}</h1>

            <button onClick={() => setCount (count + 1)}>Increase</button>

            <input value={text} onChange={(e) => setText(e.target.value)}
/>        </div>
    );
}
export default A;