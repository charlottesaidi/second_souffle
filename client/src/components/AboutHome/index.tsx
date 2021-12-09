import Link from '@components/Link';
import React, { FC } from 'react';

import styled from 'styled-components';

const AboutHome: FC = () => {
  return (
    <About>
      <h2>À propos</h2>
      <p>Second Souffle a pour vocation de simplifier la recherche de benne à verre présente sur un secteur géographique donné.</p>
      <AboutLink href={'/about'}>à propos</AboutLink>
    </About>
  );
};

const AboutLink = styled(Link)`
  color: #fff;
  padding: 20px 70px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 10px;
  font-size: .9em;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 700;
`;

const About = styled.div`
  color: #fff;

  h2,
  p {
    color: #fff;
    text-align: left;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 2.4em;
    font-weight: 700;
    line-height: 1.2em;
  }
  p {
    font-size: 1em;
    font-weight: 500;
    line-height: 1.2em;
    margin: 20px 0 40px 0;
  }

  @media screen and (min-width: 1200px) {   
    width: 38%;
  }
`;



export default AboutHome;
