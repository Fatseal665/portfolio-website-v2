import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>©2025 Martin Eriksson</p>
      <div className="footer-icons">
        <a
          href="https://linkedin.com/in/martin-eriksson-5b0826218/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:martineriksson999@gmail.com"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a
          href="https://github.com/Fatseal665"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
