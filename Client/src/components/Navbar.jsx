import React from 'react';
import svgs from '../assets/svg/svgs';

const Navbar = () => {
  return (
    <>
      <nav className='Navbar'>
        <div><ul>
          <li>Catalogo</li>
          <li>Comprar</li>
          <li>Vender</li>
        </ul></div>
        <div><h1>LOGO NAME</h1></div>
        <div>
          <ul>
            <li><img className='login-svg svg' src={svgs.userLog} alt="icono de iniciar sesión" /></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;