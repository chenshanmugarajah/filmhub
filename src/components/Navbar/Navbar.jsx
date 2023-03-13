import React, { useEffect, useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  function transitionNavbar() {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  });

  return (
    <div className={`navbar ${show && 'navbar__black'}`}>
      <header className="navbar__content">
        <img
          className="navbar__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png"
          alt="logo"
        />
      </header>
    </div>
  );
};

export default Navbar;
