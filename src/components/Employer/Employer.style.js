import styled from "styled-components";
import { Label, Section, StyledButton } from "../../common/commonStyle";
import { HeaderContainer } from "../Header/Header.style";

export const SaveBtn = styled(StyledButton)`
  color: #fff;
  border-color: tomato;
  background-color: tomato;
`;


export const JobTitle = styled(Label)`
    font-size: 1.8rem;
    margin:0;
    padding:0;
`

export const JobCompany = styled(Label)`
font-size: 1.5rem;
`


export const JobSection = styled(Section)`
display: flex;
 margin: 0; 
 padding: 0;
 align-items: center;
 justify-content: space-between;
`

export const SalarySection = styled.section`
    
  padding: 0.4rem;
  background: rgba(52, 168, 83, 0.15);
  color: #34A853;
  margin: 0.4rem;
  width: fit-content;
`

export const SkillsSection = styled.section`
background: rgba(25, 103, 210, 0.15);
color: #1967D2;
padding: 0.4rem;
margin: 0.4rem;
border-radius: 0.2rem;
width: fit-content;
`

export const JobType = styled.section`
background: rgba(249, 171, 0, 0.15);
color: #F9AB00;
padding: 0.4rem;
margin: 0.4rem;
width: fit-content;
`

