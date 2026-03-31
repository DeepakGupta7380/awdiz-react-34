import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Little(){
    const a = useContext(UserContext);

    return <h1>hello {a}</h1>;
}
export default Little;