import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faNode } from "@fortawesome/free-brands-svg-icons";
import Sprite from "./images/sprites.png";
import "./Application.css";

const Applications = () => {
  return (
    <div>
      <img src={Sprite} className="image" />
    </div>
  );
};

export default Applications;
