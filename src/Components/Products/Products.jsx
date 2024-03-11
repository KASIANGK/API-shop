import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })
      .catch(error => console.error( error))
  }, [])

  return (
    <div>
      <h1>PRODUCTS</h1>
      <div>
        {products.map((product, i) => (
          <div key={i}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.rating.rate}</p>
            <Link to={`/productdetail/${product.id}`}>CLICK 2 SEE MORE</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
