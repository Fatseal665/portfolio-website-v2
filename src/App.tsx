import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

type Page = "home" | "about" | "skills" | "contact";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header setPage={setCurrentPage} />

      <main>
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
