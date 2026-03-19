import React, { useContext } from "react";
import { UserContext } from "./ThemeContext";

function Child(){
    const user = useContext(UserContext);

    return <h1>Hello {user}</h1>;
}
export default Child;