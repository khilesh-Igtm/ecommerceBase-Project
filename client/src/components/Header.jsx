import { Link } from "react-router-dom";

export default function Header({ cartCount }) {
  return (
     <header className="header">
      <Link to="/"><h1 style={{ cursor: "pointer" }}>My E-Commerce</h1></Link>
      <Link to="/cart"><button>Cart ({cartCount})</button></Link>
    </header>
  );
}
