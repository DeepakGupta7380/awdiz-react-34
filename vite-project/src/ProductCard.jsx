import React from 'react';

function ProductCard({title, price, image}){

    return(
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>

            <p>${price}</p>

            <button>Buy Now</button>
        </div>
    );
}
export default ProductCard;