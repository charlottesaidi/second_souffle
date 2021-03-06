import React, { FC } from 'react';
import styled from 'styled-components';
import CardEquipe from '@components/CardEquipe';

const SectionEquipe: FC = () => {
  return (
    <ImgJarallax>
      <BoxContent>
        <div className="content">
          <h2>Notre équipe</h2>
          <p>
            Notre équipe est composée de développeurs, designers et chefs de projet. Nous sommes une équipe jeune et dynamique qui aime travailler ensemble.<br/><br/> Chaque personne de notre équipe est passionnée par le développement web et est motivée par le monde du numérique.
          </p>
        </div>
        <div className="box-card">
          <CardEquipe surname={'Quentin'} name={'Vannarath'} image={'./assets/img/profil.jpg'} job={'Développeur Frontend'}/>
          <CardEquipe surname={'Lucas'} name={'Barq'} image={'./assets/img/profil2.jpg'} job={'Développeur Frontend'}/>
          <CardEquipe surname={'Jérémy'} name={'Baudrin'} image={'./assets/img/profil3.jpg'} job={'Développeur Backend'}/>
          <CardEquipe surname={'Charlotte'} name={'Saidi'} image={'./assets/img/profil4.jpg'} job={'Développeuse Backend'}/>
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
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, .4);
  background-image: url('./assets/img/home_equipe.jpg');
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const BoxContent = styled.div`
  width: 100%;
  padding: 15px 5%;
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }

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
    @media screen and (min-width: 1200px) {
      width: 48%;
    }
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
      @media screen and (min-width: 1200px) {
      width: 48%;
      }
    }

    .box-card {
      grid-gap: 15px;
    }
  }
`;

export default SectionEquipe;
