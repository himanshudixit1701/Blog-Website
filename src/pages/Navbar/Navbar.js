import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" >
      <div className="logo">Blog</div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <Link to={'/Blogs'} ><li>Blogs</li></Link>
          <Link to={'/Login'} ><li>Login</li></Link>
          <Link to={'/SignUp'} ><li>SignUp</li></Link>
          <Link to={'/MyProfile'} ><li>MyProfile</li></Link>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
