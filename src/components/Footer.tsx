// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>Créé en {new Date().getFullYear()} par - Ganina Wanne -</p>
        <p className="footer-subtitle">Fait pour briller en toute simplicité</p>
      </div>
    </footer>
  );
};

export default Footer;