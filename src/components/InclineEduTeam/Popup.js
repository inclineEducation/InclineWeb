import React, { useState } from 'react';
import {PopupContainer, Text, Popup} from './PopupElements';
import { Button } from '../Button';


function Popups(props){ 
  const [isOpen, setIsOpen] = useState(false); 
  const togglePopup = () => { setIsOpen(!isOpen); } 
  return(props.trigger) ? 
  (<PopupContainer>
    <Popup> <Text>
      Andy is a third year student pursuing a Bachelor of Applied Sciences in Mechanical Engineering with a Thermofluids specialization. He is currently interning as a Fire Protection Engineer at Legacy Fire Protection and is the lead Test Driver and Powertrain Engineer at Formula UBC. Outside of academics, Andy enjoys playing the piano and guitar, practicing karate, participating in motorsports, and working on his personal cars.
      </Text> <Button handleClose={togglePopup}>Close</Button> {props.children} </Popup> </PopupContainer> ) : "";}



export default Popups;