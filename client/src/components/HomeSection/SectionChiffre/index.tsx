import React, { FC } from 'react';

import styled from 'styled-components';
import Chiffre from '@components/Chiffre';
import { jarallax } from 'jarallax';

const SectionChiffre: FC = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    jarallax(ref.current, {
      type: 'scroll-opacity',
      speed: 0.2,
      imgSrc: './assets/img/chiffre.jpg',
    });
  }, [ref]);

  return (
    <ImgJarallax ref={ref}>
      <BoxContent>
        <div>
          <h2>Chiffres clés</h2>
        </div>
        <div className="box-chiffre">
          <Chiffre />
          <Chiffre />
          <Chiffre />
        </div>
        <p>
          Second souffle est une entreprise digitale, a vocation écologique.
          Nous proposons une application web et mobile permettant de trouver une
          benne a verre dans des secteurs donnés.
        </p>
      </BoxContent>
    </ImgJarallax>
  );
};

const ImgJarallax = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 1);
  padding: 5vh 0;
`;

const BoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5%;

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
    @media screen and (min-width: 1200px) {
      width: 50%;
    }
  }

  .box-chiffre {
    margin-top: 50px;
    @media screen and (min-width: 1200px) {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      margin-bottom: 50px;
    }
  }
  @media screen and (min-width: 1200px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export default SectionChiffre;
