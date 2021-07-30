import styled from 'styled-components';
import arrow from '../../images/organize-resume.svg';

const Up = styled.div`
position: fixed;
right: 6rem;
bottom: 5rem;
cursor: pointer;
img{
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-radius: 50%;
  border: 2px solid white;
  transition: transform 0.3s;

  &:hover{
    transform: scale(1.2);
  }

  &:active{
    transform: scale(0.9);
  }
}
`;
const ScrollToTop = () => {
  const ScrollUp = () => {
    const element = document.getElementById("home");
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <Up onClick={() => ScrollUp()}>
      <img src={arrow} alt="to top" />

    </Up>
  );
};

export default ScrollToTop;