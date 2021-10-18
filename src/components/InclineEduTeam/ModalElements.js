import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  width: 73%;
  height: 27%;
  
  position: fixed;
  justify-content: center;
  align-items: center;
  display:flex !important;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 550px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  border-radius: 10px;
  margin: auto;
  justify-content: center;
  z-index: 1;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 0.75rem;
    margin-top: 1rem;
    text-align: center;
    margin-left: 5rem;
    margin-right: 5rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const ProfileImage = styled.img`
border-radius: 50%;
width: 17%;
padding-bottom: 20px;

&:hover{
  transform: scale(1.08);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;