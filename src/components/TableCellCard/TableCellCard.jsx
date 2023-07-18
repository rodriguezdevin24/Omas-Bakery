import React from 'react';
import img10 from '../../SEIcollabAssets/Cards/Stacked Card/stackedcard1.png';
import img20 from '../../SEIcollabAssets/Cards/Stacked Card/stackedcard2.png';
import img30 from '../../SEIcollabAssets/Cards/Stacked Card/stackedcard3.png';
import '../TableCellCard/tablecellcard.css';
import line from '../../SEIcollabAssets/Symbols/upfi-light-upfi-dark-upfi-light-upfi-light-upfi-light-rectangle-25.png';
import { UpfiLittleButton } from "../SplitCard/UpfiLittleButton";

function TableCellCard() {
  return (
    <>
      <h2>Opa's Favorites</h2>
      <div className="table-container">
        <div className="table-img-container">
          <img src={img10} alt="rectangle" className="img10" />
          <img src={img20} alt="rectangle" className="img20" />
          <img src={img30} alt="rectangle" className="img30" />
        </div>

        <div className="Header3">
          <h3 className="h30">Streuselkuchen</h3>
          <h3 className="h31">Mandelhörnchen</h3>
          <h3 className="h32">Franzbrötchen</h3>
        </div>

        <div className="Paragraphs">
          <p className="p1">Classic German crumb cake with a buttery, cinnamon-infused streusel topping</p>
          <p className="p2">Delectable almond pastries handcrafted with precision and passion</p>
          <p className="p3">German pastry with a swirl of cinnamon-infused buttery goodness</p>
        </div>
        <UpfiLittleButton className="UP1" />
          <UpfiLittleButton className="UP2" />
          <UpfiLittleButton className="UP3" /> 
          <UpfiLittleButton className="UP4" />
          <UpfiLittleButton className="UP5" /> 

        <div className='rect'>
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          </div>

<div className='line-container'>
        <img src={line} alt="rectangle" className="l1" />
        <img src={line} alt="rectangle" className="l2" />
        <img src={line} alt="rectangle" className="l3" />
        </div>
      </div>

    </>
  );
}

export default TableCellCard;

