import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.css'; 

const CarouselComponent = ({ images }) => {
  return (
    <Carousel autoPlay interval={2000} infiniteLoop showStatus={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Carousel ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;