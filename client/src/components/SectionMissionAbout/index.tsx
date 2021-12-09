import React, { FC } from 'react';

import styled from 'styled-components';

const SectionMissionAbout: FC = () => {
  return (
    <Linear>
      <BoxContent>
        <div>
          <h2>Notre Mission</h2>
          <p>
            Second souffle est une entreprise digitale, a vocation écologique.
            Nous proposons une application web et mobile permettant de trouver
            une benne a verre dans des secteurs donnés.
          </p>
          <Image/>
        </div>
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
  }
`;

const Image = styled.div`
  width: 100%;
  height: 250px;
  background: center / contain no-repeat url("./assets/img/mission.png");
`;

export default SectionMissionAbout;
