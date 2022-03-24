import React from 'react'
import { BannerContainer, BannerTitle, BannerBody } from './Banner.style'
import BannerLogo from "../../assets/landing.png"
import { Section, StyledButton } from "../../common/commonStyle"
import { Link } from 'react-router-dom';

const BannerCenter = () => {
    return (
      <>
     
      <BannerContainer style={{marginTop: "15vh"}}>
      <div
          style={{
            background: `url(${BannerLogo})`,
            height: "100vh",
            position: "absolute",
            width: "500px",
            top: 0,
            right: 0,
          }}
        ></div>
        <Section>
          <BannerTitle>Choose from <span style={{color: "#0059B2"}}>93,178</span> Postings</BannerTitle>
          <BannerBody>
            Settle only with the best, work with the brillant minds
          </BannerBody>
        </Section>
       
        <Link to="/freelance">
          <StyledButton>Freelancer</StyledButton>
        </Link>
        <Link to="/employer">
          <StyledButton>Employer</StyledButton>
        </Link>
        
      </BannerContainer>
      </>
    );
}

export default BannerCenter
