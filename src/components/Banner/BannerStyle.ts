import styled from "styled-components";
import imgBanner from "../../../public/assets/image/pexel.png";

const BannerStyle = styled.section`
  height: 40%;
  background-image: url(${imgBanner});
  background-size: cover;
  background-position: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    box-sizing: border-box;
    width: 90%;
    height: 90%;
    border-radius: 17px;
    text-align: center;

    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-weight: bolder;
    color: black;

    &:hover {
      backdrop-filter: blur(3px);
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.95) rotateZ(1.7deg);
    }
    h1 {
      color: #fff;
      height: 300px;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      font-size: 60px;
      text-shadow: 4px 3px 2px black;
    }
  }
`;

export default BannerStyle;
