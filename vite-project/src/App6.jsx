import React, { useState, useCallback } from 'react';

const Child = React.memo(({ onClick }) => {
    console.log("Child Rendered");

    return <button onClick={onClick}>Click me</button>;
});

function App6(){
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button Clicked");
    }, []);

    return(
        <div>
            <h1>Count: {count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>
            <Child onClick={handleClick} />
        </div>
    );
}
export default App6;
   
