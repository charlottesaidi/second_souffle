import React, { FC } from 'react';

import styled from 'styled-components';

const SectionVideo: FC = () => {
  return (
    <VideoJarallax>
      <BoxContent>
        <div>
          <h1>Second Souffle</h1>
          <p>
            Second souffle est une entreprise digitale, a vocation écologique.
            Nous proposons une application web et mobile permettant de trouver
            une benne a verre dans des secteurs donnés.
          </p>
        </div>
      </BoxContent>
    </VideoJarallax>
  );
};

const VideoJarallax = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: center / cover no-repeat url("./assets/img/home_banner.png");
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.35);
`;

const BoxContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 5%;

  h1,
  p {
    color: #fff;
    text-align: center;
  }

  h1 {
    margin-bottom: 50px;
    font-size: 3.5em;
    font-weight: 700;
    line-height: 1.2em;
  }
  p {
    font-size: 1.2em;
    font-weight: 500;
    line-height: 1.2em;
    @media screen and (min-width:1200px){
      width: 72%;
    }
  }
  div{
    @media screen and (min-width: 1200px){
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }
  
`;

export default SectionVideo;
