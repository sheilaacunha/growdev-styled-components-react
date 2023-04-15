import React from "react";
import BannerStyle from "./BannerStyle";

interface BannerProps {
  titulo: string;
}

const Banner: React.FC<BannerProps> = ({ titulo }) => {
  return (
    <BannerStyle>
      <div>
        <h1>{titulo}</h1>
      </div>
    </BannerStyle>
  );
};

export default Banner;
