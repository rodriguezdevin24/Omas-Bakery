import React, { useContext } from 'react';
import { ThemeProvider } from '../ThemeContext';
import Navbar from '../NavBar/NavBar';
import Carousel from '../Carousel/Carousel';
import HorizonalScroll from '../HorizonalScroll/HorizonalScroll';
import FullCard from '../FullCard/FullCard';
import Footer from '../Footer/Footer';
import image1 from '../../SEIcollabAssets/Carousel/Carousel1.png';
import image2 from '../../SEIcollabAssets/Carousel/Carousel2.png';
import image3 from '../../SEIcollabAssets/Carousel/Carousel3.png';
import image4 from '../../SEIcollabAssets/Carousel/Carousel4.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Carousel/carousel.css';
import '../NavBar/navbar.css';
import SplitCard from '../SplitCard/SplitCard';
// import TableCellCard from '../TableCellCard/TableCellCard';




const MainPage = () => {
    const images = [image1, image2, image3, image4];
  return (
    <div>
      <ThemeProvider>
      <Navbar /> 
      <Carousel images={images}  showThumbs={false} />
      <HorizonalScroll />
      <FullCard />
      <SplitCard />
      <Footer />
      </ThemeProvider>
    </div>
  );
};

export default MainPage;
