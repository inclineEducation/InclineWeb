import styled from 'styled-components';

export const PopupContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: rbga(0,0,0,0.2);

display: flex;
justify-content: center;
align-items: center;
`

export const Popup = styled.div`
position: relative;
padding: 32px;
width: 100%;
max-width: 640px;
background-color: #fff;
`

export const Text = styled.p`
font-size: 1rem;
text-align: center;
`