import React from 'react'
import './fullcard.css'

const FullCard = () => {
    return (
        <div className="box1">
          <div className="UPFI-dark-full-card-wrapper">
            <div className="UPFI-dark-full-card">
              <div className="UPFI-light-full-card">
                <div className="overlap-group">
                  <div className="UPFI-full-card-light">
                    <img className="group" alt="Group" src="../../images/fullcard.png" />
                  </div>
                  <div className="text-wrapper">Apfelstrudel</div>
                  <p className="a-quintessential">
                    A quintessential Austrian pastry that boasts delicate layers of flaky, buttery dough enveloping a warm,
                    spiced apple filling
                  </p>
                  <div className="UPFI-big-button">
                    <div className="more-info"> More Info</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default FullCard