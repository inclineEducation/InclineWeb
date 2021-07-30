import React, { useState } from 'react';
 
import { Button } from 'styled-button-component';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownDivider,
} from 'styled-dropdown-component';
 
export const SimpleDropdown = () => {
  const [hidden, setHidden] = useState(true);
 
  return (
    <Dropdown>
      <Button dropdownToggle onClick={() => setHidden(!hidden)}>
        Dropdown Button
      </Button>
      <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Action after divider</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default SimpleDropdown;