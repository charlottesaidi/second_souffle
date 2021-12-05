import Link from '@components/Link';
import React, { FC } from 'react';

import styled from 'styled-components';

const AboutHome: FC = () => {
  return (
    <About>
      <h2>À propos</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor sed eros eu molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at bibendum tellus, quis lobortis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vestibulum, ante.</p>
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
