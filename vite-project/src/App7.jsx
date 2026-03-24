// import React, { useRef, useState } from "react";

// function App7(){
//     const countRef = useRef(0);
//     const [render, setRender] = useState(0);

//     const increment = () => {
//         countRef.current += 1;
//         console.log("Count:", countRef.current);
//     };

//     return(
//         <div>
//             <h2>Render: {render}</h2>
//             <button onClick={increment}>Increase Ref</button>
//             <button onClick={() => setRender(render + 1)}>Re-render</button>
//         </div>
//     );
// }
// export default App7;


import React, { useState, useRef } from "react";

function App7() {
  // Normal state counter
  const [count, setCount] = useState(0);

  // useRef counter
  const refCount = useRef(22222);

  // Input reference
  const inputRef = useRef();

  // State counter button
  const handleStateCounter = () => {
    setCount(count + 1);
  };

  // Ref counter button
  const handleRefCounter = () => {
    refCount.current += 1;
    console.log("Ref Counter:", refCount.current);
  };

  // Focus input
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {count}</h2>

      <button onClick={handleStateCounter}>
        Addition for counter
      </button>

      <br /><br />

      <h3>Name:</h3>
      <input ref={inputRef} placeholder="Enter name" />

      <br /><br />

      <h3>Reference counter: {refCount.current}</h3>

      <button onClick={handleRefCounter}>
        Addition to used object data
      </button>

      <br /><br />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default App7;