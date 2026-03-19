import React, { useState } from "react";
// import { ThemeContext } from "./ThemeContext";
import { ThemeContext } from "./ThemeContext";
import Home from "./Home";

function App(){
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Home />
        </ThemeContext.Provider>
    );
}

export default App;