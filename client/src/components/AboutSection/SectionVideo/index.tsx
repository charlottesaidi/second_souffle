import React, { FC } from 'react';
import styled from 'styled-components';
import { jarallax, jarallaxVideo } from 'jarallax';

const SectionVideo: FC = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    jarallaxVideo();
    jarallax(ref.current, {
      type: 'scroll-opacity',
      speed: 0.2,
      videoSrc: 'https://www.youtube.com/watch?v=LkiBnkcNKk8'
    });
  }, [ref]);
  
  return (
    <VideoJarallax ref={ref}>
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
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 1) !important;
`;

const BoxContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 5%;
  mix-blend-mode: difference;
  z-index: -1;

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
     flex-direction: column;
     justify-content: center;
     align-items: center;
    }
  }
`;

export default SectionVideo;
