import React, { FC } from 'react';

import styled from 'styled-components';

const Footer: FC = () => {
  return (
    <Container>
      <p>Second Souffle © 2021. Tous droits réservés.</p>
    </Container>
  );
};

const Container = styled.footer`
    /* padding: 20px 5%; */
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222222;

    p {
        font-size: .8em;
        font-weight: 600;
        color: #fff;
        text-align: center;
    }
`;

export default Footer;
