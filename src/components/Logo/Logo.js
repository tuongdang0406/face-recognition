import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 30 }}
        style={{ height: 150, width: 150 }}
      >
        <span role="img" className="Tilt-inner">
          <img style={{ paddingTop: "25px" }} src={brain} alt="logo" />
        </span>
      </Tilt>
    </div>
  );
};

export default Logo;
