import React from "react";
import ProductCard from "../components/ProductCard";

export default function ProductsPage({ products, addToCart }) {
  return (
    <div className="products-page">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
