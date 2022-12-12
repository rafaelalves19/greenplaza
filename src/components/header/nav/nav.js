import { useState } from "react";
import React from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleIsMenuOpen = (bool) => {
    setIsMenuOpen(bool);
  };

  return (
    <nav>
      <section>
        <button
          ismenuopen={isMenuOpen}
          onClick={() => handleIsMenuOpen(!isMenuOpen)}
        >
          <img src="images/hamburger.svg" alt="burger menu" />
        </button>
      </section>

      <ul className={isMenuOpen ? "menu-open" : ""}>
        <li>
          <a href="#gallery">Green Plaza</a>
        </li>
        <li>
          <a href="#location">Localização</a>
        </li>
        <li>
          <a href="#graphic">Vantagens</a>
        </li>
        <li>
          <a href="#table">Tipologias</a>
        </li>
        <li>
          <a href="#contact">Contactos</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
