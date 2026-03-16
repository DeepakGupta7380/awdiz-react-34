// // import React from 'react';
// // import ProductCard from './component/ProductCard';

// // function App(){

// //     return(
// //         <div>

// //             <ProductCard name="Laptop" price="50000" category="Electronics"/>
// //             <ProductCard name="Mobile" price="20000" category="Electronics"/>
// //             <ProductCard name="Shoes" price="30000" category="Fashion"/>
// //         </div>
// //     );
// // }
// // export default App;


// import React, { useState, useEffect } from "react";

// function App() {

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data.slice(0, 10)); // show only 10 products
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Product Listing</h1>

//       {products.map((product) => (
//         <div key={product.id} style={{border:"1px solid gray", margin:"10px", padding:"10px", width:"200px"}}>
          
//           <img 
//             src={product.image} 
//             alt={product.title} 
//             width="150"
//           />

//           <h3>{product.title}</h3>

//           <p>Price: ${product.price}</p>

//         </div>
//       ))}

//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App(){

const [products,setProducts] = useState([]);

function fetchProducts(){

fetch("https://fakestoreapi.com/products")
.then((res)=>res.json())
.then((data)=>{
setProducts(data.slice(0,10))
})

}

return(

<div>

<h1>Product Listing</h1>

<button onClick={fetchProducts}>
Fetch Products
</button>

{products.map((item)=>(

<div key={item.id}>

<img src={item.image} width="150"/>

<h3>{item.title}</h3>

<p>Price: {item.price}</p>

</div>

))}

</div>

)

}

export default App;