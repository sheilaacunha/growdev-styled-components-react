import styled from "styled-components";

const SectionStyled = styled.section`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const SectionStyledDiv = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 3% 0 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
interface SectionStyledDivImgProps {
  src: string;
}

const SectionStyledDivImg = styled.img<SectionStyledDivImgProps>`
  width: 50%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
`;

const SectionStyledH2 = styled.h2`
  font-size: 2em;
`;
const SectionStyledP = styled.p`
  font-size: 1em;
`;

export {
  SectionStyled,
  SectionStyledDiv,
  SectionStyledDivImg,
  SectionStyledH2,
  SectionStyledP,
};
