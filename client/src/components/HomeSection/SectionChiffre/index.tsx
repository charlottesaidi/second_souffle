import React, { FC } from 'react';

import styled from 'styled-components';
import Chiffre from '@components/Chiffre';

const SectionChiffre: FC = () => {

  return (
    <ImgJarallax>
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
          Voici quelques chiffres clés qui nous permettent de vous connaître et de vous démontrer le potentiel de notre entreprise.<br/><br/> Nous sommes à la recherche de nouveaux clients et de nouveaux partenaires. 
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
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, .4);
  background-image: url('./assets/img/chiffre.jpg');
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
      width: 45%;
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
