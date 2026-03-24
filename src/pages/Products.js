import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

    function Products() {

        const [products, setProducts] = useState([]);

        const { cart, setCart } = useContext(CartContext);
        const [search, setSearch] = useState("");

        useEffect(() => {
            //// use free API https://fakestoreapi.com/products
            fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
        }, []);

        // const addToCart = (product) => {
        //     setCart([...cart, product]);
        // }

        const addToCart = (product) => {

  const exist = cart.find(item => item.id === product.id);
  

  if (exist) {
    const updatedCart = cart.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updatedCart);
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};
    const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
);
    return (
    <>
        <div className='container'>
          <input type="text" placeholder="Search product..." value={search}
           onChange={(e) => setSearch(e.target.value)} className="my-1" />
            <h1 className='text-primary'>Products</h1>
            <div className="row">
                 {products.map(Product => (
                <div className="card col-md-4 m-1" style={{width: "18rem"}} key={Product.id}>
        <img src={Product.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h3 className="card-title ">{Product.title}</h3>
          <Link to={`/product/${Product.id}`}>
            View Details
          </Link>
            <p className="card-text">Rs.{Product.price}</p>
            <button onClick={() => addToCart(Product)}>
            Add to Cart
          </button> 
        </div>
        </div>
            ))}
            </div>
           
        </div>
        </>
    );
    }

export default Products;
