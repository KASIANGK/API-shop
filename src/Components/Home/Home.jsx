import './Home.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import Style from '../../assets/LIFE.png'
import Shine from '../../assets/STATEMENT.png'


function Home() {
  const [data, setData] = useState([])
  const [highRatedProducts, setHighRatedProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(response => {
        setData(response);
        setHighRatedProducts(data.filter(data => data.rating.rate > 4))
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div className='home'>
      <h1>iStyle</h1>
      <img className="Walk" src={Style}></img>
      <h3>DISCOVER THE COLLECTION</h3>
      <Carousel data={data} />
      <h3>HOTTEST TRENDS</h3>
      <div className='content-rate'>
        {data.map(product => (
          <div key={product.id} className='rate'>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.rating.rate}</p>
            <Link to={`/productdetail/${product.id}`}>👀</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home