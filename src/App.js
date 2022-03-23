import {ThemeProvider} from "styled-components";
import React, {  useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles.style";
import { darkTheme, lightTheme } from "./styles/theme.style";
import { BrowserRouter as Router, Route , Routes, Link } from 'react-router-dom';
import Header from "./components/Header/Header";
import { Container, Section, StyledButton, ThemeBtn } from './common/commonStyle';
import  Freelancer  from './components/Freelancer/Freelancer'
import Landing from "./components/Landing";
import BannerC from "./components/BannerCenter/BannerC";
import Employer from "./components/Employer/Employer";
import Applicants from "./components/Applicants/Applicants";
import Applicant from "./components/Applicant/Applicant";
import { FiMoon } from "react-icons/fi";
import { Title } from "./components/Header/Header.style";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () =>{
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Container>
        <Header/>
        <FiMoon style={{top: "5%", left: "25%",position: "fixed", fontSize: "25px",cursor:"pointer"}} onClick={() => themeToggler()}></FiMoon>
        </Container>
       
        
        <Routes>
          <Route exact path="/" element={<BannerC/>} />
          <Route exact path="/freelance" element={<Freelancer/>} />
          <Route exact path="/employer" element={<Employer/>} />
          <Route exact path="/applicants" element={<Applicants/>} />
          <Route path="/applicants/:applicantId" element={<Applicant/>}></Route>
        </Routes>
        
       
      </ThemeProvider>
    </Router>
  );
}

export default App;
