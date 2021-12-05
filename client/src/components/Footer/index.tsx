import React, { FC } from 'react';

import styled from 'styled-components';

const Footer: FC = () => {
  return (
    <Container>
      <p>Second Souffle © 2019 - 2021. Tous droits réservés.</p>
    </Container>
  );
};

const Container = styled.footer`
    padding: 20px 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222222;

    p {
        font-size: .8em;
        font-weight: 600;
        color: #fff;
    }
`;

export default Footer;
