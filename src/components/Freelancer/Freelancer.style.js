import styled from "styled-components";
import { StyledButton } from "../../common/commonStyle";

export const SearchContainer = styled.div`
    
display: flex;
justify-content:space-between;
align-items: center;
width:100vw;  

`




export const SearchBtn = styled(StyledButton)`
  color: #fff;
  border-color: tomato;
  background-color: tomato;
`;

export const ProfileBtn = styled(StyledButton)`
color: #fff;
border-color: tomato;
background-color: tomato;
float: right;
display: flex;
align-items: center;
text-align: center;
`;

export const FreelancerImage = styled.img`
width: auto;
height: 36rem;
margin-right: 15rem;
margin-left: auto;
`;

export const CloseModal = styled(StyledButton)`
    float: right !important;
    color: tomato;
    padding: 0.4rem;
`;


export const ImageContainer = styled.div`

height: 100%;
position: absolute !important;
/* z-index: 3; */
top: 0;
right: 0;
`
