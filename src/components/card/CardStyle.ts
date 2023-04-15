import styled from "styled-components";

const CardStyle = styled.section`
  display: flex;
  width: 100%;
  height: 40%;
  justify-content: space-around;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.colors.primary};
  align-items: center;

  div {
    width: 20%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 40%;
    filter: ${(props) => props.theme.filter};
  }
  h2 {
    font-size: 25px;
  }
  p {
    font-size: 20px;
    text-align: center;
  }
`;

export default CardStyle;
