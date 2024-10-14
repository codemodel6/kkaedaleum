import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="the-header-wrapper">
      <div className="header-logo-wrapper">
        <button className="logo-item">kkaedaleum</button>
      </div>
      <div className="header-menu-wrapper">
        <button className="menu-item">참깨</button>
        <button className="menu-item">들깨</button>
        <button className="menu-item">통깨</button>
        <button className="menu-item">깨소금</button>
      </div>
    </header>
  );
};

export default Header;
