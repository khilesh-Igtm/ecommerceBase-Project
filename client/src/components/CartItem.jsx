import React from "react";

export default function CartItem({
  item,
  index,
  updateQuantity,
  removeFromCart,
}) {
  const increase = () => updateQuantity(index, item.quantity + 1);
  const decrease = () => {
    if (item.quantity > 1) {
      updateQuantity(index, item.quantity - 1);
    } else {
      removeFromCart(index); // Quantity is 1, so remove it completely
    }
  };
  return (
    <div className="cart-item">
      <span>{item.name}</span>
     <span>₹{item.price * item.quantity}</span>

      <div className="quantity-control">
        <button onClick={decrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={increase}>+</button>
      </div>
      <button onClick={() => removeFromCart(index)}>Remove</button>
    </div>
  );
}
