import React, { useEffect } from "react";
import { UpfiBigButton } from "./UpfiBigButton";
import "./fullcard.css";
import { useTheme } from '../theme';

const FullCard = ({ className = "" }) => {
  const [theme] = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="fullcard-whole">
    <div className={`UPFI-light-full-card ${className}`}>
      <div className="overlap">
        <div className="UPFI-full-card-light">
          <img className="group" alt="Group" src="/images/Cards/fullcard.png" />
        </div>
        <div className="apfelstrudel">Apfelstrudel</div>
        <div className = "content-wrap">
        <p className="a-quintessential">
          A quintessential Austrian pastry that boasts delicate layers of flaky, buttery dough enveloping a warm, spiced
          apple filling.
        </p>
        <UpfiBigButton className="UPFI-big-button-instance" />
      </div>
      </div>
    </div>
    </div>
  );
};

export default FullCard;