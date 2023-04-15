import React from "react";

import { FooterDivStyled } from "./FooterStyle";

const Footer: React.FC = () => {
  return (
    <FooterDivStyled>
      <a href="#"> About</a>&#8226;
      <a href="#">Contact</a>&#8226;
      <a href="#">Terms of Use</a>&#8226;
      <a href="#">Privacy Policy</a>
      <p>&#169; Sheila Acunha 2023. </p>
    </FooterDivStyled>
  );
};

interface FooterLinksProps {
  link: string;
  img: string;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ link, img }) => {
  return (
    <>
      <a href={link} target="_blank">
        <img src={img} alt="" />
      </a>
    </>
  );
};

export { Footer, FooterLinks };
