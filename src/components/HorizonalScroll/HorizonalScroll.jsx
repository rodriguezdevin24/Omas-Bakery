import React from 'react';
import { useEffect } from 'react';
import '../HorizonalScroll/horizontalscroll.css';
import { useTheme } from '../theme';


const HorizonalScroll = () => {
  const [theme, setTheme] = useTheme();
  
//   const toggleTheme = () => {
//     if (theme === 'dark') {
//       setTheme('light');
//     } else {
//       setTheme('dark');
//     }
//   };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

    return (
      <div className="box">
        <div className="horizontal-scroll-wrapper">
          <div className="horizontal-scroll">
          <div className="item">
            <div className="overlap">
              <img className="rectangle" alt="Rectangle" src="../../images/Horizontal scroll/pic1.png" />
            </div>
              <div className="text-wrapper">Krapfen</div>
              </div>
              <div className="item">
            <div className="overlap">
              <img className="img" alt="Rectangle" src="../../images/Horizontal scroll/pic2.png" />
            </div>
            <div className="apfelstusel">Apfelstrudel</div>
            </div>
            <div className="item">
            <div className="overlap">
              <img className="rectangle-2" alt="Rectangle" src="../../images/Horizontal scroll/pic3.png" />
            </div>
            <div className="text-wrapper-2">Sachertorte</div>
            </div>
            <div className="item">
            <div className="overlap">
              <img className="rectangle-3" alt="Rectangle" src="../../images/Horizontal scroll/pic4.png" />
            </div>
            <div className="text-wrapper-5">Schaumrolle</div>
            </div>
            <div className="item">
            <div className="overlap">
              <img className="rectangle-4" alt="Rectangle" src="../../images/Horizontal scroll/pic5.png" />
            </div>
            <div className="text-wrapper-3">Lebkuchen</div>
            </div>
            <div className="item">
            <div className="overlap">
              <img className="rectangle-5" alt="Rectangle" src="../../images/Horizontal scroll/pic6.png" />
            </div>
            <div className="text-wrapper-6">Streuselkuchen</div>
            </div>
            <div className="item">
            <div className="overlap">
              <img className="rectangle-6" alt="Rectangle" src="../../images/Horizontal scroll/pic7.png" />
            </div>
            <div className="text-wrapper-4">Franzbrötchen</div>
            </div>
            <div className="item">
            <div className="overlap">
              <img className="img" alt="Rectangle" src="../../images/Horizontal scroll/pic8.png" />
            </div>
            <div className="mandel-ho-rnchen">
              Mandel-
              <br />
              hörnchen
            </div>
            </div>
            <div className="apfelstusel-wrapper">
           </div>
          </div>
        </div>
      </div>
    );
  };

export default HorizonalScroll;
