import React, { FC } from 'react';

import styled from 'styled-components';

import Navbar, { NavbarLink } from '../Navbar';

const Header: FC = () => {
  const navLinks: NavbarLink[] = [
    {
      name: 'Accueil',
      path: '/'
    },
    {
      name: 'À propos',
      path: '/about'
    },
    {
      name: 'Carte',
      path: '/map'
    }
  ];

  return (
    <Container>
      <BoxHeader>
        <Logo />
        <Navbar links={navLinks} />
      </BoxHeader>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  position: fixed;
  top: 0; 
  left: 0;
  width: 100%;
  z-index: 9999;
`;

const BoxHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 3%;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.4);
`;

const Logo = styled.div`
  width: 40px;
  height: 30px;
  background: center / contain no-repeat url("./assets/img/logo.png");
`;

export default Header;