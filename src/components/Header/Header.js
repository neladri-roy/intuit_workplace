import React from 'react'
import { Wrapper, HeaderContainer, Title } from './Header.style'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
      <Wrapper>
      
          <HeaderContainer>
          <Link to="/">
          <Title>Work@Tech</Title>
          </Link>
          </HeaderContainer>  
          
      </Wrapper>
    );
}

export default Header
