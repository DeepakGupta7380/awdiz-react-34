import React, {useState, useEffect} from "react";
import "../App.css";

function Product(){

const [product, setProduct] = useState(null);

useEffect(()=>{

fetch("https://fakestoreapi.com/products/1")
.then((res)=>res.json())
.then((data)=>{

setProduct(data)

})

},[])


if(!product){
return <h2>Loading...</h2>
}

return(

<div className="product-container">

<div className="product-image">

<img src={product.image} alt="product"/>

</div>

<div className="product-details">

<h2 className="product-name">
Name : {product.title}
</h2>

<h3>Product Description :</h3>

<p>
{product.description}
</p>

<h3 className="price">
Price : ${product.price}
</h3>

</div>

</div>

)

}

export default Product;