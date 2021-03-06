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
          <h1>Second Souffle</h1>
          <p>
            Second Souffle vous permettra de découvrir les bennes à verres présents dans nos différentes villes. Vous pourrez également vous géolocaliser et trouver les bennes les plus proches de chez vous.
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
  z-index: -999;

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
    @media screen and (max-width: 480px) {
      font-size: 3rem;
    }
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
     flex-direction: column;
     justify-content: center;
     align-items: center;
    }
  }
`;

export default SectionVideo;
