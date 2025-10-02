import React from "react";

type HeaderProps = {
  setPage: (page: 'home' | 'about' | 'skills' | 'contact') => void;
};

const Header: React.FC<HeaderProps> = ({ setPage }) => {
  return (
    <header>
      <h1>Martin Eriksson</h1>
      <nav>
        <a href="#home" onClick={() => setPage('home')}>Hem</a>
        <span> | </span>
        <a href="#about" onClick={() => setPage('about')}>Om mig</a>
        <span> | </span>
        <a href="#skills" onClick={() => setPage('skills')}>Kunskaper</a>
        <span> | </span>
        <a href="#contact" onClick={() => setPage('contact')}>Kontakt</a>
      </nav>
    </header>
  );
};

export default Header;
