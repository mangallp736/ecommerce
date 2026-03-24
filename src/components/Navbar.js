<<<<<<< HEAD
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
=======
import React from 'react';
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/" >Product</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Cart</Link>
                    </li>
                    {/* <li className="nav-item">
                    <Link className="nav-link" to="/">Pricing</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link disabled">Disabled</Link>
                    </li> */}
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
>>>>>>> b75b3eeef2203be75c5b9587ff7722018fa8ca4a

export default Navbar;
