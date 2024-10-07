import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="the-header-wrapper">
      <div className="header-logo-wrapper">
        <button className="logo-item">Codemodel6</button>
      </div>
      <div className="header-menu-wrapper">
        <button className="menu-item">Intro</button>
        <button className="menu-item">Career</button>
        <button className="menu-item">Project</button>
        <button className="menu-item">Education</button>
      </div>
    </header>
  );
};

export default Header;
