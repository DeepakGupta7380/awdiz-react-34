// import React from "react";
// import Navbar from "./componentX/Navbar";
// import Product from "./componentX/Product";
// import Footer from "./componentX/Footer";

// function App(){

// return(

// <div>

// <Navbar/>

// <Product/>

// <Footer/>

// </div>

// )

// }

// export default App;

import React from 'react';
import { UserContext } from './Contact';
import Child from "./Child";

function App(){
    const user = "Deepak";

    return(
        <UserContext.Provider value={user}>
            <Child />
        </UserContext.Provider>
    );
}
export default App;