import React from "react";
import {
  SectionStyled,
  SectionStyledDiv,
  SectionStyledDivImg,
  SectionStyledH2,
  SectionStyledP,
} from "./SectionStyle";

interface SectionPrincProps {
  titulo: string;
  primeiroTexto?: string;
  segundoTexto?: string;
  imagem: string;
  invertido?: boolean;
}

const SectionPrinc: React.FC<SectionPrincProps> = ({
  titulo,
  imagem,
  primeiroTexto,
  segundoTexto,
  invertido,
}) => {
  return (
    <SectionStyled
      style={
        invertido ? { flexDirection: "row-reverse" } : { flexDirection: "row" }
      }
    >
      <SectionStyledDiv>
        <SectionStyledH2>{titulo}</SectionStyledH2>
        <SectionStyledP>{primeiroTexto}</SectionStyledP>
        <SectionStyledP>{segundoTexto}</SectionStyledP>
      </SectionStyledDiv>
      <SectionStyledDivImg src={imagem} />
    </SectionStyled>
  );
};

export default SectionPrinc;
