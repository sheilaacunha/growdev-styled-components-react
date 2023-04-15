import { DefaultTheme } from "styled-components";

const light: DefaultTheme = {
  name: "light",
  bgColor: "#fff",
  fontSize: {
    sm: "14px",
    md: "20px",
    lg: "36px",
  },
  colors: {
    primary: "#010101",
    secondary: "#363636",
    error: "#dc3545",
    success: "#198754",
  },

  filter: "drop-shadow(-8px 8px 4px #363636) ",
  textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue",
};

const dark: DefaultTheme = {
  name: "dark",
  bgColor: "#363636",
  fontSize: {
    sm: "14px",
    md: "20px",
    lg: "36px",
  },
  colors: {
    primary: "#fff",
    secondary: "#FFF",
    error: "#dc3545",
    success: "#198754",
  },
  filter: "drop-shadow(-5px 5px 4px black)",
  textShadow: "#FC0 1px 0 10px;",
};

export { light, dark };

