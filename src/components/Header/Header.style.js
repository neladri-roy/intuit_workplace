import styled from "styled-components";


export const Wrapper = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.5s;
    backdrop-filter: blur(3px);
`;


export const HeaderContainer = styled.div`
height: 15vh;
position:sticky;
width: 100%;
`;


export const Title = styled.h1`
    color: ${(props) => props.theme.TitleColor};
    font-weight: 600;
    font-size: 3.6rem;
    padding: 2rem 2rem;
`

