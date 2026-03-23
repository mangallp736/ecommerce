import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>

      <h2>{product.title}</h2>
      <p>Rs.{product.price}</p>
      <p>{product.description}</p>

    </div>
  );
}

export default ProductDetails;