// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <h1>Mon Super Blog Article</h1>
        <p className="header-subtitle">Partagez vos idées et vos articles en toute simplicité</p>
      </div>
    </header>
  );
};

export default Header;