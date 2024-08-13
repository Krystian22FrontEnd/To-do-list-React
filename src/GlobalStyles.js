import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
* {
  *, *::before, *::after {
  box-sizing: inherit;
}
}

body {
  font-family: "Lato", sans-serif;
  background-color: hsl(0, 0%, 90%);
  word-break: break-word;
}
`;




