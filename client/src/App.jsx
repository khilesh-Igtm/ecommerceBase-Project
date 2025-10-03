import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductsPage from "./pages/ProductsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import { fetchProducts, placeOrder } from "./api";
import "./App.css";

function App() {
  const [page, setPage] = useState("products");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const addToCart = (product) => {
    const exist = cart.find((p) => p._id === product._id);
    if (exist) {
      setCart(
        cart.map((p) =>
          p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (index, qty) => {
    const newCart = [...cart];
    newCart[index].quantity = qty;
    setCart(newCart);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handlePlaceOrder = async (user) => {
    const response = await placeOrder({
      items: cart.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      ...user,
    });

    if (response.message) {
      alert(response.message);
      setCart([]);
      setPage("products");
    } else {
      alert("Order failed. Try again.");
    }
  };

  console.log("my producys is >>", products);
  return (
    <Router>
      <div className="App">
        <Header cartCount={cart.length} />
        <Routes>
          <Route
            path="/"
            element={<ProductsPage products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                placeOrder={handlePlaceOrder}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
