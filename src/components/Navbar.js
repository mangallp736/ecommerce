import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        <Link className="navbar-brand" to="/">Navbar</Link>

        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart ({cart.length})
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
