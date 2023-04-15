import React from "react";
import styled from "styled-components";

const Container = styled.main<React.CSSProperties>`
  background-color: ${(props) => props.background};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default Container;

// display: ${(props) => props.display};
// flex-direction: ${(props) => props.flexDirection};
// align-items: ${(props) => props.alignItems};
// justify-content: ${(props) => props.justifyContent};
// width: ${(props) => props.width};
