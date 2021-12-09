import React, { FC } from 'react';

import styled from 'styled-components';

const SectionLinearAbout: FC = () => {
  return (
    <Linear>
      <BoxContent>
        <div>
          <h2>Notre histoire</h2>
          <p>
            Le site est né en 2021, et nous sommes toujours à la recherche de nouveaux talents.<br/><br/> Nous avons décidé de créer un site web qui permet de trouver des bennes à verres et facilite la vie des citoyens pour leur permettre de recycler rapidement et facilement le verre. 
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    @media screen and (min-width: 769px) {
      margin-bottom: 0;
    }
  }

  div {
    @media screen and (min-width: 1200px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 48%;
    }
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const BoxImage = styled.div`
  width: 100%;
  height: 250px;
  background: center / contain no-repeat url("./assets/img/illu-histoire.jpg");

  @media screen and (min-width: 1200px) {
    height: 350px;
    width: 48%;
  }

  @media screen and (min-width: 765px) {
    height: 450px;
  }
`;

export default SectionLinearAbout;
