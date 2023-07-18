import React from 'react';
import Carousel from '../Carousel/Carousel';
import image1 from '../../SEIcollabAssets/Carousel/Carousel1.png';
import image2 from '../../SEIcollabAssets/Carousel/Carousel2.png';
import image3 from '../../SEIcollabAssets/Carousel/Carousel3.png';
import image4 from '../../SEIcollabAssets/Carousel/Carousel4.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Carousel/carousel.css';
// import Footer from '../Footer/Footer';
// import NavBar from '../NavBar/NavBar';
// import HorizonalScroll from '../HorizonalScroll/HorizonalScroll';
// import FullCard from '../FullCard/FullCard';
// import SplitCard from '../SplitCard/SplitCard';
// import TableCellCard from '../TableCellCard/TableCellCard';
//import Navbar from '../NavBar/NavBar';
import '../NavBar/navbar.css';


const MainPage = () => {
    const images = [image1, image2, image3, image4];
  return (
    <div>
      <Carousel images={images}  showThumbs={false} /> 
    </div>
  );
};

export default MainPage;
