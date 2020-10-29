import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box
}

html{
    height: 100%
}

body{
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    background-color: #eaffd0;
    background-size: cover;
    color: #6a2c70;
}

`;
