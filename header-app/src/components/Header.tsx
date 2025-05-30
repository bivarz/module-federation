import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <nav className="header">
      <div className="header-content">
        <p>Header app with react</p>
        <div className="header-links"></div>
      </div>
    </nav>
  );
};

export default Header;
