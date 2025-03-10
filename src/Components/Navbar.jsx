import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation(); // Hook to get the current route

  return (
    <nav id="nav">
    <Link to={'/Portfolio/'} className={location.pathname === '/Portfolio/' ? 'active' : ''}>
      <button className={location.pathname === '/Portfolio/' ? 'active' : ''}>
        Home
        <img className="right-arrow" src="/Portfolio/arrow-right-solid.svg" alt="Right Arrow" />
      </button>
    </Link>
    <Link to={'/Portfolio/stuff'} className={location.pathname === '/Portfolio/stuff' ? 'active' : ''}>
      <button className={location.pathname === '/Portfolio/stuff' ? 'active' : ''}>
        Stuff
        <img className="right-arrow" src="/Portfolio/arrow-right-solid.svg" alt="Right Arrow" />
      </button>
    </Link>
  </nav>
  );
}
