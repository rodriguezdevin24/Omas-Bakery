import React from "react";
import "./greenbutton.css";

export const UpfiBigButton = ({ className }) => {
  return (
    <div className={`UPFI-big-button ${className}`}>
      <div className="overlap-group">
        <div className="rectangle" />
        <div className="more-info"> More Info</div>
      </div>
    </div>
  );
};
