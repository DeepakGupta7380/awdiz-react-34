// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Intro(){
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get("https://fakestoreapi.com/products")
//         .then((res) =>{
//             setData(res.data);
//         });
//     }, []);

//     return(
//         <div>
//             <h1>Products</h1>

//             {data.map((item) => (
//                 <p key={item.id}>{item.title}</p>
//             ))}
//         </div>
//     );
// }
// export default Intro;


import React, { useEffect, useState } from 'react';
import axios from "axios";

function Intro () {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() =>{
        axios.get("https://fakestoreapi.com/products")
        .then((res) =>{
            setProducts(res.data);
            setLoading(false);
        })
        .catch((err) => {
            setError("Data fetch");
            setLoading(false);
        });
    }, []);

    const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
);

if(loading) 
    return <h2>Loading...</h2>;
if(error)
    return <h2>{error}</h2>;

return(
    <div style={{ textAlign: "center" }}>
        <h1>Product List</h1>

        <input type="text" placeholder="Search product..." value={search} onChange={(e) =>
            setSearch(e.target.value)} />

            {filteredProducts.map((product) =>(
                <div key={product.id} style={{ border: "1px solid gray", margin: "10px" }}>
                    <img src={product.image} width="100" />
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    </div>
            ))}
    </div>
);
}
export default Intro;
