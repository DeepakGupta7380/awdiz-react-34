import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Home(){
    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <div style={{
            background: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            height: "100vh"
        }}>
            <h1>{theme} Mode</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}
export default Home;