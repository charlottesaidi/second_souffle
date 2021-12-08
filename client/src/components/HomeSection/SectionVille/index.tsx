import Link from '@components/Link';
import React, { FC } from 'react';

import styled from 'styled-components';

import CityCard from '@components/CityCard';

const SectionLinearAbout: FC = () => {
  return (
    <Linear>
      <BoxContent>
        <div className="sectionVille">
          <div className="content">
            <h2>Sélectionner une ville disponible</h2>
            <p>
              Pour commencer à utiliser le site, vous devez choisir une ville correspond à votre localisation.<br/><br/> Si vous ne trouvez pas votre ville, nous vous invitons à nous la signaler. Nous nous efforcerons de la corriger dans les plus brefs délais.
            </p>
          </div>
          <div className="gridCard">
            <Link href={'/map/paris'} className='disabled-link'>
              <CityCard name={'Paris'} image={'./assets/img/paris.jpg'} />
            </Link>
            <Link href={'/map/toulouse'}>
              <CityCard name={'Toulouse'} image={'./assets/img/toulouse.jpg'} />
            </Link>
            <Link href={'/map/lyon'} className='disabled-link'>
              <CityCard name={'Lyon'} image={'./assets/img/lyon.jpg'} />
            </Link>
            <Link href={'/map/rouen'} className='disabled-link'>
              <CityCard name={'Rouen'} image={'./assets/img/rouen.jpg'} />
            </Link>
          </div>
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
  min-height: 100vh;
  background: linear-gradient(-45deg, #007ea7, #006b26);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;

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
  padding: 5vh 5%;

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
  }

  .content {
    margin-bottom: 50px;
    @media screen and (min-width : 1200px){
      width: 40%;
      margin-bottom: 0px;
    }
  }

  .gridCard {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    @media screen and (min-width : 1200px){
      width: 48%;
    }
    .disabled-link {
      pointer-events: none;
      opacity: 0.7;
    }
  }
  .sectionVille{
    @media screen and (min-width : 1200px){
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export default SectionLinearAbout;
