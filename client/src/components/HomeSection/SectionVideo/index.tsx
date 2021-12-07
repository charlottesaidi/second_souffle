import React, { FC } from 'react';
import styled from 'styled-components';

const SectionVideo: FC = () => {

  return (
    <VideoJarallax>
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/LkiBnkcNKk8?autoplay=1&loop=1&controls=0&mute=1&playlist=LkiBnkcNKk8"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <BoxContent>
        <div>
          <h1>Bienvenue sur Second Souffle</h1>
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
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    z-index: -999;
    pointer-events: none;
  }
`;

const BoxContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 5%;
  mix-blend-mode: difference;
  position: relative;
  z-index: -99;

  h1,
  p {
    color: #fff;
    text-align: center;
  }

  h1 {
    margin-bottom: 50px;
    font-size: 6.5em;
    font-weight: 700;
    line-height: 1.2em;
  }

  p {
    font-size: 1.2em;
    font-weight: 500;
    line-height: 1.2em;
    @media screen and (min-width: 1200px) {
      width: 72%;
    }
  }

  div {
    @media screen and (min-width: 1200px) {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default SectionVideo;
