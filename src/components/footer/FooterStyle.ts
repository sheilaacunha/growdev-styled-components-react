import styled from "styled-components";

const FooterContainer = styled.section`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
`;

const FooterDivStyled = styled.div`
  width: 50%;
  display: inline-block;
  align-items: center;
  margin: 2%;
  background: ${(props) => props.theme.bgColor};

  a {
    margin: 2%;
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    font-size: 20px;

    &:hover {
      text-shadow: ${(props) => props.theme.textShadow};
      color: #fff;
    }
  }

  p {
    margin: 2%;
    font-size: 18px;
    color: ${(props) => props.theme.colors};
  }
`;

const FooterDivLinksStyled = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: end;

  img {
    width: 60px;
    margin-right: 35px;

    &:hover {
      filter: ${(props) => props.theme.filter};
       transform: translate(-0.05em, -0.05em);

    }
  }
`;

export { FooterDivStyled, FooterDivLinksStyled, FooterContainer };

