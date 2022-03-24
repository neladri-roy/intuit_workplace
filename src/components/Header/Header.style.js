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
position:sticky;
width: 100%;
padding: 10px;
background-color: ${(props) => props.theme.BodyColor};
`;


export const Title = styled.h1`
    color: ${(props) => props.theme.TitleColor};
    font-weight: 600;
    font-size: 3.6rem;
`

