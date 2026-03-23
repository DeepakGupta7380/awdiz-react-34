import React from "react";

const Childs = React.memo(({ onClick }) => {
    console.log("Child Rendered");

    return <button onClick={onClick}>Click Me</button>;
});

export default Childs