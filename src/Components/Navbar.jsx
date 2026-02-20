import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {

  const location = useLocation();

  return (
    <nav id="nav">
    <Link to={'/'} className={location.pathname === '/' ? 'active' : ''} title="Main">
      <button className={location.pathname === '/' ? 'active' : ''}>
        <img className="house" src="/house-solid.svg" alt="House" data-skip-on-tab="true"/>
        <img className="right-arrow" src="/arrow-right-solid.svg" alt="Right Arrow" data-skip-on-tab="true"/>
      </button>
    </Link>
    <Link to={'/gamedev/'} className={location.pathname === '/gamedev' ? 'active' : ''} title="Game Dev Artifacts">
      <button className={location.pathname === '/gamedev' ? 'active' : ''}>
        <img className="game-pad" src="/gamepad-solid.svg" alt="Gamepad" data-skip-on-tab="true"/>
        <img className="right-arrow" src="/arrow-right-solid.svg" alt="Right Arrow" data-skip-on-tab="true"/>
      </button>
    </Link>
    <Link to={'/websoftware/'} className={location.pathname === '/websoftware' ? 'active' : ''} title="Web & Software Artifacts">
      <button className={location.pathname === '/websoftware' ? 'active' : ''}>
        <img className="code" src="/code-solid.svg" alt="Code Bracket" data-skip-on-tab="true"/>
        <img className="right-arrow" src="/arrow-right-solid.svg" alt="Right Arrow" data-skip-on-tab="true"/>
      </button>
    </Link>
    {/* <Link to={'/3d'} className={location.pathname === '/3d' ? 'active' : ''} title="3D Artifacts">
      <button className={location.pathname === '/3d' ? 'active' : ''}>
        <img className="cube" src="/cube-solid.svg" alt="Cube" data-skip-on-tab="true"/>
        <img className="right-arrow" src="/arrow-right-solid.svg" alt="Right Arrow" data-skip-on-tab="true"/>
      </button>
    </Link> */}
    <Link to={'/iot'} className={location.pathname === '/iot' ? 'active' : ''} title="IoT Artifacts">
      <button className={location.pathname === '/iot' ? 'active' : ''}>
        <img className="network" src="/network.svg" alt="Network" data-skip-on-tab="true"/>
        <img className="right-arrow" src="/arrow-right-solid.svg" alt="Right Arrow" data-skip-on-tab="true"/>
      </button>
    </Link> 
    {/* <Link to={'/join'} className={location.pathname === '/join' ? 'active' : ''} title="Join me">
      <button className={location.pathname === '/join' ? 'active' : ''}>
        <img className="door-open" src="/door-open-solid.svg" alt="Door Open" data-skip-on-tab="true"/>
        <img className="right-arrow" src="/arrow-right-solid.svg" alt="Right Arrow" data-skip-on-tab="true"/>
      </button>
    </Link> 
    !CHANGE CSS TO ACCOMODATE! */}
  </nav>
  );
}
