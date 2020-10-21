import React from "react";
import "./Nav.css";
import Self from "./images/self.png";
import About from "./About";

const Nav = () => {
  return (
    <div className="Nav">
      <h1>
        David Yuen
        <p className="sub">
          Front End Web Developer || Full Stack Web Developer
        </p>
        <p className="sub">Email: DAVIDYUEN0305@gmail.com</p>
        <p className="sub2"> San Francisco, California</p>
      </h1>
      <img
        src={Self}
        style={{ width: 300, height: 300, borderRadius: 400 / 2 }}
      />
    </div>
  );
};

export default Nav;
