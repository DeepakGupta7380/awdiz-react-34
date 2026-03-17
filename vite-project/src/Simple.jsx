// import React from "react";

// function Simple(){

//     const products = ["Mobile", "Laptop", "Shoes"];

//     return(
//         <div>
//             <h1>Product List</h1>

//             <ul>
//                 {products.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// export default Simple;

import React from 'react';

function Simple() {

    const products = [
        { id: 1, name: "Mobile", price: 10000 },
        { id: 2, name: "Laptop", price: 50000 },
        { id: 3, name: "Shoes", price: 2000 },
    ];

    return (
        <div>
            <h1>Products</h1>

            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                </div>
            ))}
            </div>

            );
    }
    export default Simple
