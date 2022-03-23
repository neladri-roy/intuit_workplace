import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;

    }

    body {
        background-color: ${(props) => props.theme.BodyColor};
        color: ${(props) => props.theme.TextColor};
        font-family: 'Jost', sans-serif;
        font-size: 1.4rem;
    }

    img{
        max-width: 100%;
        height: auto;
    }

    h1{
        font-size: 2.6rem;
    }
    
    span{
        color: ${(props) => props.theme.AltTextColor};;
    }

    html {
        font-size: 10px;
        scroll-behavior: smooth;
    }

    a{
        text-decoration: none;
        color: rgb(0, 89, 178);
    }

    p{
        font-size: 1.5rem;
        width: 30rem;
    }

`