import React, { useState } from "react";
import CartItem from "../components/CartItem";

export default function CartPage({ cartItems, updateQuantity, removeFromCart, placeOrder }) {
  const [user, setUser] = useState({ firstName: "", lastName: "", address: "" });
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.firstName || !user.lastName || !user.address) {
      alert("Please fill all the fields!");
      return;
    }
    placeOrder(user);
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      {cartItems.map((item, index) => (
        <CartItem 
          key={index} 
          item={item} 
          index={index} 
          updateQuantity={updateQuantity} 
          removeFromCart={removeFromCart} 
        />
      ))}

      <h3>Total: ₹{total}</h3>

      <form onSubmit={handleSubmit} className="order-form">
        <input 
          type="text" 
          placeholder="First Name" 
          value={user.firstName} 
          onChange={(e) => setUser({ ...user, firstName: e.target.value })} 
          required
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          value={user.lastName} 
          onChange={(e) => setUser({ ...user, lastName: e.target.value })} 
          required
        />
        <textarea 
          placeholder="Address" 
          value={user.address} 
          onChange={(e) => setUser({ ...user, address: e.target.value })} 
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
