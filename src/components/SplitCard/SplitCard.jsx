import React, { useEffect } from "react";
import { UpfiLittleButton } from "./UpfiLittleButton";
import "./splitcard.css";
import { useTheme } from '../theme';

const SplitCard = ({ className }) => {
    const [theme] = useTheme();

    useEffect(() => {
      document.body.className = theme;
    }, [theme]);

    const containerClassName = `UPFI-split-card-container ${theme} ${className || ""}`;

    return (
        <div className={containerClassName}>
            <div className={`UPFI-light-split  ${className || ""}`}>
                <div className="div">
                    <div className="UPFI-split-card-dark">
                        <div className="div">
                            <img className="group" alt="Group" src="/images/Cards/splitcard.png" />
                        </div>
                    </div>
                    <div className="schaumrolle">Schaumrolle</div>
                    <p className="a-delicate-pastry">
                        A delicate pastry filled with vanilla cream and encased in a crispy, golden puff pastry shell - a delightful
                        and authentic Viennese treat
                    </p>
                    <UpfiLittleButton className="UPFI-little-button-instance" />
                </div>
            </div>
            <div className={`UPFI-light-split  ${className || ""}`}>
                <div className="div">
                    <div className="UPFI-split-card-dark">
                        <div className="div">
                            <img className="group" alt="Group" src="/images/Cards/splitcard.png" />
                        </div>
                    </div>
                    <div className="schaumrolle">Krapfen</div>
                    <p className="a-delicate-pastry">
                        Delectable Austrian doughnuts filled with luscious creams and fruit compotes, handcrafted to perfection
                    </p>
                    <UpfiLittleButton className="UPFI-little-button-instance" />
                </div>
            </div>
        </div>
    );
};

export default SplitCard;