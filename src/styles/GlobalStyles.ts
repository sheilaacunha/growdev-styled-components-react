import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{ 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'saira extra condensed', sans-serif;
        letter-spacing: 1px;
    }

    html{
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.colors.primary};
       
    }
`;

export default GlobalStyles;
