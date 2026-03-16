import React, { useState } from "react";
import Navbar from "./compo/Navbar";
import ProductCard from "./compo/ProductCard";
import Footer from "./compo/Footer";
import "./App.css";

function App2() {

  const [products, setProducts] = useState([]);

  const fetchProducts = () => {

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });

  };

  return (
    <div>

      <Navbar />

      <button className="fetchBtn" onClick={fetchProducts}>
        Click to fetch products..
      </button>

      <div className="productGrid">

        {products.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}

      </div>
      {/* <Navbar />
      <ProductCard /> */}

      <Footer />

    </div>
  );
}

export default App2;