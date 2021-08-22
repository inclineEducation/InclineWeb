import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';
import Dropdown from './Dropdown';
import logo from './favicon.png';
import { MenuItemsteam } from './MenuItems-team';
import { MenuItemsservice } from './MenuItemsservice';

function Navbar(){
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [drop, setDrop] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseOn = () => {
    if (window.innerWidth < 960) {
      setDrop(false);
    } else {
      setDrop(true);
    }
  };

  const onMouseOff = () => {
    if (window.innerWidth < 960) {
      setDrop(false);
    } else {
      setDrop(false);
    }
  };

  return(
    <>
    <nav className='navbar' >
              <img src={logo} alt="Logo"/>
      <Link to='/' className='navbar-logo'>
        INCLINE EDUCATION
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li className='nav-item' onMouseLeave={onMouseLeave} >
          <Link to='/' className='nav-links' onClick={closeMobileMenu} onMouseEnter={onMouseEnter}>
            Services <i className='fas fa-caret-down' />
          </Link>
          {dropdown && <Dropdown items={MenuItemsservice}/>}
        </li>
        <li className='nav-item' onMouseLeave={onMouseOff}>
          <Link to='/' className='nav-links' onClick={closeMobileMenu} onMouseEnter={onMouseOn}>
            Team <i className='fas fa-caret-down' />
          </Link>
          {drop && <Dropdown items={MenuItemsteam}/>}
        </li>
        <li className='nav-item'>
          <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
</>
  );
}

export default Navbar;