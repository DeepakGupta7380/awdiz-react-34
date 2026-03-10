import React from "react";

function ProductCard(props){
    return(
        <div>
            <h2>Product Name: {props.name}</h2>
            <p>Price: {props.price}</p>
            <p>Category: {props.category}</p>
            <hr />
        </div>
    );
}
export default ProductCard;