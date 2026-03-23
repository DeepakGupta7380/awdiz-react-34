
import React, { useState, useMemo } from "react";

function B() {
  // 🔥 Large Product Data
  const products = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: "Product " + i,
    price: Math.floor(Math.random() * 1000),
  }));

  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);

  // 🚀 useMemo Optimization
  const filteredProducts = useMemo(() => {
    console.log("Filtering running...");

    return products.filter((item) => {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        item.price >= minPrice
      );
    });
  }, [search, minPrice]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Product Filter App</h2>

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 💰 Price Filter */}
      <input
        type="number"
        placeholder="Minimum Price"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />

      <h3>Results:</h3>

      {/* 📦 Product List */}
      {filteredProducts.map((item) => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
        </div>
      ))}
    </div>
  );
}

export default B;