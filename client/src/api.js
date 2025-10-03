const API_BASE = "http://localhost:5000/api"; // Make sure backend is running on 5000

export const fetchProducts = async () => {
  const res = await fetch(`${API_BASE}/products`);
  return res.json();
};

export const placeOrder = async ({ items, firstName, lastName, address }) => {
  const res = await fetch(`${API_BASE}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items, firstName, lastName, address })
  });
  return res.json();
};
