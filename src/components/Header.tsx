import React from "react";

type HeaderProps = {
  setPage: (page: 'home' | 'about' | 'skills' | 'contact') => void;
};

const Header: React.FC<HeaderProps> = ({ setPage }) => {
  return (
    <header>
      <h1>Martin Eriksson</h1>
      <nav>
        <button onClick={() => setPage('home')}>Hem</button>
        <span> | </span>
        <button onClick={() => setPage('about')}>Om mig</button>
        <span> | </span>
        <button onClick={() => setPage('skills')}>Kunskaper</button>
        <span> | </span>
        <button onClick={() => setPage('contact')}>Kontakt</button>
      </nav>
    </header>
  );
};

export default Header;
