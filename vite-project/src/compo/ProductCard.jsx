import React from "react";

function ProductCard({ image, title, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <h4>{title}</h4>

      <p>{price}</p>
    </div>
  );
}

export default ProductCard;