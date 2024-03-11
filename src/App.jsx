import { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Carousel from './Components/Carousel/Carousel';
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';

function App() {
  const [data, setData] = useState([])


  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => console.log(error));
  }, []);

  const routeur = createBrowserRouter([
    {
      path: '/',
      element: <Home data={data} />,
    },
    {
      path: '/products',
      element: <Products data={data} />,
    },
    {
      path: '/productdetail/:id',
      element: <ProductDetail data={data} />,
    },
    {
      path: '/carousel',
      element: <Carousel data={data}></Carousel>
    }
  ]);

  return (
    <div>
      <RouterProvider router={routeur}></RouterProvider>
    </div>
  );
}

export default App


