import React, { useEffect, useState } from 'react'

function Products() {
    const [products, setProducts] = useState([]);

    useEffect (() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
  return (    
    <div className='container my-2 mb-1'>
        <h1>Products</h1>
            <div className="row">
        {products.map(product => (
                <div className='col col-md-3' key={product.id}>
                    <div className="card" style={{width : '13rem'}}>
                        <img src={product.image} className="card-img-top" alt="product.title" style={{width:'100%', height:'200px'}} />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <h6 className="card-text">{product.category}</h6>
                            <p className="card-text">Rs.{product.price}</p>
                            <p className="card-text">{product.description}</p>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>
        ))};
            
            </div>
    </div>
  )
}

export default  Products;