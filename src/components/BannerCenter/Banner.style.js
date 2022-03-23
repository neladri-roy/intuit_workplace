import styled from "styled-components";

export const BannerContainer = styled.div`
   
display: flex;
align-items: center;
text-align: center;

`;


export const BannerTitle = styled.h2`
    color: ${(props) => props.theme.TextColor};
    font-weight: bold;
    font-size: 2.6rem;
    padding: 1rem;
`
export const BannerBody = styled.h3`
    color: ${(props) => props.theme.TextColor};
    font-weight: light;
    font-size: 15px;
    color: #696969;
    padding-left: 2rem;
`



export const BannerImage = styled.img`
    width: auto;
    height: 60%;
`