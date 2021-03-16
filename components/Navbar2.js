import React from "react";
import Link from 'next/link'


const Navbar2 = () => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <header >
      <img style={{float : 'right', paddingRight : '15px'}} src="/image.png" width="350" height="90" className="logo " onClick={toTheTop} ></img>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav >
        <ul className="text-2xl font-black ">
          <li><a href="/" onClick={toTheTop} passHref>inicio</a></li>
          <li><a href="/model" passHref>modelos</a></li>
          <li><a href="/concesionario" passHref>concesionario</a></li>
          <li><a href="/contact" passHref>Contacto</a></li> 
        </ul>
      </nav>
      <label for="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
};

export default Navbar2;