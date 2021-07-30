import React, {useRef, useEffect, useCallback} from 'react';
import {useSpring, animated} from 'react-spring';
import {Background, Container, ModalWrapper, ModalContent, CloseModalButton, ProfileImage } from './ModalElements';
import Andy from '../../images/team/Andy.jpg'
import { Link } from "react-router-dom";

export const Modal = ({showModal, setShowModal}) => {
  const modalRef = useRef();
  
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transfrom: showModal ? `translateY(0%)` : `translateY(-100%)` 
  });

    const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return(
    <>
    {showModal ? (
      <Background onClick={closeModal} ref={modalRef}>
        <animated.div style={animation}>
        <ModalWrapper showModal={showModal}>
          <ModalContent>
            <Link to="https://www.google.com/">
    <ProfileImage src={Andy} />
            </Link>
            <h1>Andy Chung</h1>
            <p >Andy is a third year student pursuing a Bachelor of Applied Sciences in Mechanical Engineering with a Thermofluids specialization. He is currently interning as a Fire Protection Engineer at Legacy Fire Protection and is the lead Test Driver and Powertrain Engineer at Formula UBC. Outside of academics, Andy enjoys playing the piano and guitar, practicing karate, participating in motorsports, and working on his personal cars.</p>
          </ModalContent>
          <CloseModalButton aria-label='Close modal' onClick={() => setShowModal (prev => !prev)} />
        </ModalWrapper>
        </animated.div>
      </Background>
    ) : null}

    </>
  )

}