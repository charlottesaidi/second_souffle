import React, { FC } from 'react';

import styled from 'styled-components';

const SectionLinearAbout: FC = () => {
  return (
    <Linear>
      <BoxContent>
        <div className="content">
          <h2>Nos Missions</h2>
          <p>
          Trouver la benne à verre le plus proche de chez vous, en proposant des services de qualité et de confiance.<br/><br/>
          Permettre une géolocalisation de votre emplacement.<br/><br/> 
          Effectuer des recherches des bennes à verre en fonction des villes disponibles sur notre site.  
          </p>
        </div>
        <BoxImage />
      </BoxContent>
    </Linear>
  );
};

const Linear = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #007ea7, #006b26);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  min-height: 100vh;
  padding: 50px 0;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const BoxContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px 5%;

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
    margin-bottom: 20px;
    font-size: 1em;
    font-weight: 500;
    line-height: 1.2em;
    @media screen and (min-width: 765px) {
      margin-bottom: 0;
    }
  }
  .content {
    width: 100%;
    margin-bottom: 20px;
    @media screen and (min-width: 769px) {
      width: 80%;
      margin: auto;
    }
  }
  @media screen and (min-width: 769px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const BoxImage = styled.div`
  width: 100%;
  height: 250px;
  background: center / contain no-repeat url("./assets/img/mission.png");

  @media screen and (min-width: 1200px) {
    height: 350px;
  }

  @media screen and (min-width: 765px) {
    height: 450px;
  }
`;

export default SectionLinearAbout;
