import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}

    </div>
  );
}

export default Home;