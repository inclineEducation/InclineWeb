import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const CustomDropDown = props => {
  const {
    handleMouseEnter,
    handleMouseLeave,
    handleToggle,
    options,
    name,
    stateKeys
  } = props;
  return (
    <div className="dropdown-container">
      <Dropdown
        className="d-inline-block"
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isOpen={stateKeys[name]}
        toggle={handleToggle}
      >
        <DropdownToggle name={name} caret>
          Dropdown1
        </DropdownToggle>
        <DropdownMenu>
          {options.length &&
            options.map(({ header, title }) => (
              <DropdownItem header={header}>{title}</DropdownItem>
            ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default CustomDropDown;