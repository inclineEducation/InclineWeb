import React, { useState } from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, SmallBars, TitleLink } from './NavbarElements';
import Dropdown1 from '../Dropdown-service';
import Dropdown2 from '../Dropdown-team';
import Dropdown from '../Dropdown/index';

function Navbar(){
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [drop, setDrop] = useState(false);

  const handleClick = () => setClick(!click);

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
    <Nav >
      <TitleLink to="/home" activeStyle >
        <h1>Incline Education</h1>
        </TitleLink>
       <Bars /> 
        <NavMenu>
          <NavLink to='/home' activeStyle >
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle
          onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            Services <i className='fas fa-caret-down' />
          </NavLink>
          {dropdown && <Dropdown1 />}
          <NavLink to='/team' activeStyle onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            Team<i className='fas fa-caret-down' />
            {dropdown && <Dropdown2 />}
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact
          </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
      </NavBtn>
    </Nav>
    </>
  );
};

export default Navbar;
