import React from "react";
// components
import Banner from "../../components/Banner/Banner";
import Container from "../../components/Container";
import CardStyle from "../../components/card/CardStyle";
import { Footer, FooterLinks } from "../../components/footer/Footer";
import SectionPrinc from "../../components/section/Section";
// imagens
import coding from "../../../public/assets/image/coding.png";
import comp from "../../../public/assets/image/comp.png";
import development from "../../../public/assets/image/development.png";
import discord from "../../../public/assets/image/discord.png";
import github from "../../../public/assets/image/github.png";
import linkedin from "../../../public/assets/image/linkedin.png";
import revite from "../../../public/assets/image/revite.png";
import styledComp from "../../../public/assets/image/styledComp.png";
import tweet from "../../../public/assets/image/tweet.png";
import Card from "../../components/card/Card";
import {
  FooterContainer,
  FooterDivLinksStyled,
} from "../../components/footer/FooterStyle";

const Home: React.FC = () => {
  const ItemsCard = [
    {
      image: coding,
      titulo: "Somente para desktop",
      paragrafo: "Vamos aprender a utilizar um framework.",
    },
    {
      image: comp,
      titulo: "Criado com componentes",
      paragrafo: "Utilizamos o Styled Components.",
    },
    {
      image: development,
      titulo: "Fácil aproveitamento",
      paragrafo: "Estamos no caminho.",
    },
  ];

  const ItemsLink = [
    {
      link: "http://discordapp.com/users/953979290922389546#3848",
      img: discord,
    },
    {
      link: "https://github.com/sheilaacunha/SheilaAcunha",
      img: github,
    },
    {
      link: "https://www.linkedin.com/in/sheilaacunha90/",
      img: linkedin,
    },
  ];
  return (
    <Container height="100vh">
      <Banner titulo="Minha Primeira Página com React." />
      <CardStyle>
        {ItemsCard.map(({ image, titulo, paragrafo }) => {
          return <Card imagem={image} titulo={titulo} paragrafo={paragrafo} />;
        })}
      </CardStyle>

      <SectionPrinc
        titulo="React"
        primeiroTexto="ReactJs é uma biblioteca javascript de código aberto para construir interfaces de usuário. Usando o React podemos criar UIs complexas a partir de pequenos pedaços de código reutilizável chamados Componentes. Tão menor o código, mais para conseguir. Ele usa Javascript Virtual DOM, que é mais rápido que o DOM normal para melhorar o desempenho do aplicativo.
        React Js foi criado pela primeira vez por Jordan Walke, que era engenheiro de software no Facebook. React foi implantado pela primeira vez na seção Newsfeed do Facebook em 2011 e no Instagram em 2012. A reação foi de código aberto em maio de 2013. React Native, que permite o desenvolvimento de androides nativos e ios foi de código aberto em março de 2015."
        imagem={revite}
        invertido
      />

      <SectionPrinc
        titulo="Styled-components"
        primeiroTexto="Seu primeiro componente com estilo
        Digamos que você queira criar um simples e reutilizável<Botão />componente que você pode usar em todo o seu aplicativo. Deve haver uma versão normal e uma versão grande eprimárioversão para os botões importantes. Styled-components permite que você escreva CSS real em seu JavaScript. Isso significa que você pode usar todos os recursos de CSS que você usa e ama, incluindo (mas não limitado a) consultas de mídia, todos os pseudo-seletores, aninhamento, etc.
        A última etapa é que precisamos definir a aparência de um botão principal. Para isso também importamos{css}decomponentes de estiloe interpolar uma função em nosso literal de modelo, que é passado pelas props de nosso componente."
        imagem={tweet}
      />

      <SectionPrinc
        titulo="Componentes"
        primeiroTexto="Aprenda uma vez, escreva em qualquer lugar. programação com React é praticamente baseada em componentes. Isso ajuda muito na modularização do nosso código e na parte de abstração de funções complexas. Além de que permite a reutilização de código em diversas aplicações.
        O site do NPM contém diversas bibliotecas criadas por empresas e comunidades que podem ser integradas em seus projetos como um componente comum. Isso facilita e agiliza muito a criação de aplicativos."
        imagem={styledComp}
        invertido
      />

      <Banner titulo="Lading Page React." />
      <FooterContainer>
        <Footer />
        <FooterDivLinksStyled>
          {ItemsLink.map(({ link, img }) => {
            return <FooterLinks link={link} img={img} />;
          })}
        </FooterDivLinksStyled>
      </FooterContainer>
    </Container>
  );
};

export default Home;
