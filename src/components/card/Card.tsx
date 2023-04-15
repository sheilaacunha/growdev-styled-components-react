import React from "react";

interface CardProps {
  imagem: string;
  titulo: string;
  paragrafo: string;
}

const Card: React.FC<CardProps> = ({ imagem, titulo, paragrafo }) => {
  return (
    <div>
      <img src={imagem} alt="Uma imagem feliz" />
      <h2>{titulo}</h2>
      <p>{paragrafo}</p>
    </div>
  );
};

export default Card;
