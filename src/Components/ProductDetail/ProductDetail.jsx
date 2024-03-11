import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data)
      })
      .catch(error => console.error(error))
  }, [id])

  return (
    <div>
      <h1>PRODUCT</h1>
      {product && (
        <div>
          <img src={product.image}/>
          <h2>{product.title}</h2>
          <p>Price: {product.price}$</p>
          <p>Description: {product.description}</p>
          <p>{product.rating.rate}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetail
