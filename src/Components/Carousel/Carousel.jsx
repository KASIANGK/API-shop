// import React, { useState, useEffect } from 'react';
// import './Carousel.css'; // Import your CSS file

// function Carousel({ data }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [slides, setSlides] = useState([]);

//   // Calculer le nombre total de slides 
//   const totalSlides = Math.ceil(data.length / 3);

//   useEffect(() => {
//     // Diviser les donnees en slides de trois elements chacun
//     const dividedSlides = []
//     for (let i = 0; i < data.length; i += 1) {
//       dividedSlides.push(data.slice(i, i + 1))
//     }
//     setSlides(dividedSlides)
//   }, [data])

//   const goToNextSlide = () => {
//     setCurrentIndex(currentIndex + 1) 
//   };

//   const goToPrevSlide = () => {
//     setCurrentIndex(currentIndex - 1)
//   };

//   return (
//     <div className="carousel-container">
//       <div className="carousel">
//         <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//           {slides.map((slide, index) => (
//             <div key={index} className="slide">
//               {slide.map((product, productIndex) => (
//                 <div key={productIndex} className="slide-content">
//                   <img src={product.image} alt={product.title} />
//                   <h3>{product.title}</h3>
//                   <p>{product.rating.rate}</p>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
//       <button className="next" onClick={goToNextSlide}>&#10095;</button>
//     </div>
//   );
// }

// export default Carousel;
import React, { useState, useEffect } from 'react';
import './Carousel.css'

function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  // Calculer le nombre total de slides 
  const totalSlides = Math.ceil(data.length / 3);

  useEffect(() => {
    // Diviser les donnees en slides de trois elements chacun
    const dividedSlides = [];
    for (let i = 0; i < data.length; i += 1) {
      dividedSlides.push(data.slice(i, i + 1));
    }
    setSlides(dividedSlides);
  }, [data]);

  const goToNextSlide = () => {
    if (currentIndex === totalSlides - 3) {
      setCurrentIndex(0); // Revenir a la premiere diapositive si c'est le dernier slide
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(totalSlides - 3); // Passer au dernier slide si c'est le premier slide
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              {slide.map((product, productIndex) => (
                <div key={productIndex} className="slide-content">
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>{product.price}$</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
      <button className="next" onClick={goToNextSlide}>&#10095;</button>
    </div>
  );
}

export default Carousel
