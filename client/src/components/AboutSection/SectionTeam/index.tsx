import React, { FC } from 'react';
import styled from 'styled-components';
import { jarallax } from 'jarallax';
import CardEquipe from '@components/CardEquipe';

const SectionEquipe: FC = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    jarallax(ref.current, {
      type: 'scroll-opacity',
      speed: 0.2,
      imgSrc: './assets/img/home_equipe.jpg',
    });
  }, [ref]);

  return (
    <ImgJarallax ref={ref}>
      <BoxContent>
        <div className="content">
          <h2>Notre équipe</h2>
          <p>
            Notre équipe composer de quatres développeurs, est une équipe jeune
            et dynamique.
          </p>
        </div>
        <div className="box-card">
          <CardEquipe surname={'Quentin'} name={'Vannarath'} image={'./assets/img/profil.jpg'}/>
          <CardEquipe surname={'Lucas'} name={'Barq'} image={'./assets/img/profil2.jpg'}/>
          <CardEquipe surname={'Jérémy'} name={'Baudrin'} image={'./assets/img/profil3.jpg'}/>
          <CardEquipe surname={'Charlotte'} name={'Saidi'} image={'./assets/img/profil4.jpg'}/>
        </div>
      </BoxContent>
    </ImgJarallax>
  );
};

const ImgJarallax = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  width: 100%;
  min-height: 100vh;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 1);
  padding: 10vh 0;
`;

const BoxContent = styled.div`
  width: 100%;
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

  .box-card {
    @media screen and (min-width: 765px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 30px;
    }
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    .content {
      width: 40%;
    }

    .box-card {
      grid-gap: 30px;
    }
  }
`;

export default SectionEquipe;
