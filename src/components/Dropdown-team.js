import React, { useState } from 'react';
import { Button } from './Button';
import { MenuItemsteam } from './MenuItems-team';
import { Link } from 'react-router-dom';
import '../components/Dropdown-team.css';

function Dropdown2() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
  <>
  <ul onClick={handleClick}
  className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
    {MenuItemsteam.map((item, index) => {
      return (
        <li key={index}>
          <Link className={item.cName} 
          to={item.path} 
          onClick={() => setClick(false)}>
            {item.title}
          </Link>
        </li>
      )
            })}
  </ul>
  </>
  );
}

export default Dropdown2;