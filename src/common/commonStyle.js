import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(props) => props.theme.BtnBg};

  text-align: center;
  white-space: nowrap;
  border: none;
  font-size: 15px;
  line-height: 20px;
  border-radius: 8px;
  margin: 1rem;
  font-weight: 400;
  padding: 18px 35px 15px 35px;
  cursor: pointer;
  opacity: 0.5;
  color: ${(props) => props.theme.BtnBgColor};

  &:hover {
    //background-color: ${(props) => props.theme.BtnBgHover};
    opacity: 1;
  }
`;

export const ThemeBtn = styled(StyledButton)`
        width: 50%;
    `

export const Section = styled.section`
  display: grid;
  margin: 1rem;
  padding: 4em;
`;

export const Container = styled.div`
  //width: 100vw;
  margin: 3rem;
  
`;

export const Input = styled.input`
  padding: 2rem;
  min-width: 40rem;
  background-color: #f5f5f5;
  border: none;
  margin: 1rem 0rem;
  font-size: 1.6rem;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  margin: 1rem;
  font-size: 3rem;
`;

export const SecHeader= styled.div `
display: flex;
//justify-content: space-between;
// margin: 2rem;
    `

export const Form = styled.form``;

export const StyledTable = styled.table`
  border-collapse: collapse;
  // margin: 25px 25px;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  
`;

export const THead = styled.thead`
  font-size: 2.2rem;
  //background-color: #009879;
  //color: #ffffff;
  text-align: left;
`;

export const TFoot = styled.tfoot`
  // custom css goes here
`;

export const TBody = styled.tbody`
padding: 10px`;

export const TR = styled.tr`
text-align: left;
  &:hover {
    background-color: ${(props) => props.theme.BtnBgHover};
    color: #000;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const TH = styled.th`
  padding: 12px 15px;
  
`;

export const TD = styled.td`
  padding: 12px 15px;
  font-size: 1.4rem;
`;

export const Card = styled.div`
  display: list-item;
  list-style: none;
  margin: 2rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;
  width: 90wv;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;


