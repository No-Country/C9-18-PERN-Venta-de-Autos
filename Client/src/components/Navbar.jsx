import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <p className='NavBar-Name'>AUTOSUSADOS.COM</p>
      <input type="search" name="" id="searchBar" />
      <p><a href="">Login</a> / <a href="">Register</a></p>
    </nav>
  );
};

export default Navbar;