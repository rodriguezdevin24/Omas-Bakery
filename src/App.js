import React from 'react';
import MainPage from './components/MainPage/MainPage';
import './App.css';
import HorizonalScroll from './components/HorizonalScroll/HorizonalScroll.jsx';
import FullCard from './components/FullCard/FullCard';


function App() {
  return (
    <div>
      <MainPage />
      <HorizonalScroll/>
      <FullCard/>
    </div>
  );
}

export default App;

