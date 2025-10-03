export default function ProductCard({ product, addToCart }) {
  console.log(product.image)
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img"/>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
