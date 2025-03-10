import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav id="nav">
      <Link to={''}>
        <button>
            Home
        </button>
      </Link>
      <Link to={'stuff'}>
        <button>
            Stuff
        </button>
      </Link>
    </nav>
  )
}