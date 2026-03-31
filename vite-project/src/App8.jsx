import React, { Suspense, lazy } from "react";

//lazy loading
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App8(){
    const [page, setPage] = React.useState("about");

    return(
        <div style={{ textAlign: "center" }}>
            <button onClick={() => setPage("home")}>Home</button>
            <button onClick={() => setPage("about")}>About</button>

           <Suspense fallback={<h2>Loading...</h2>}>
           {page === "home" ? <Home /> : <About />}
           </Suspense>
          
        </div>
    );
}
export default App8;