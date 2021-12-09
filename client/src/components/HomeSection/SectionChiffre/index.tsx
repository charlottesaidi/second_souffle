import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Chiffre from '@components/Chiffre';
import { countDumpsters } from 'src/stores/dumpsters';
import { countUsers } from 'src/stores/users';
import { countCities } from 'src/stores/villes';

const SectionChiffre: FC = () => {
 const [dumspterCount, setDumpsterCount] = useState<number>(0);
 const [usersCount, setUsersCount] = useState<number>(0);
 const [citiesCount, setCitiesCount] = useState<number>(0);

  useEffect(() => {
    const fetchDumpsters = async () => {
      const { data } = await countDumpsters();
      setDumpsterCount(data || 0);
     }; 
     fetchDumpsters();
    const fetchUsers = async () => {
      const { data } = await countUsers();
      setUsersCount(data || 0);
     }; 
     fetchUsers();
    const fetchCities = async () => {
      const { data } = await countCities();
      setCitiesCount(data || 0);
     }; 
     fetchCities();
  }, []);



  return (
    <ImgJarallax>
      <BoxContent>
        <div>
          <h2>Chiffres clés</h2>
        </div>
        <div className="box-chiffre">
          <Chiffre data={dumspterCount} title="nombre de bennes"/>
          <Chiffre data={usersCount} title="nombre d'utilisateurs"/>
          <Chiffre data={citiesCount} title="nombre de villes"/>
        </div>
        <p>
          Voici quelques chiffres clés qui nous permettent de vous connaître et de vous démontrer le potentiel de notre entreprise.<br/><br/> Nous sommes à la recherche de nouveaux clients et de nouveaux partenaires. 
        </p>
      </BoxContent>
    </ImgJarallax>
  );
};

const ImgJarallax = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, .4);
  background-image: url('./assets/img/chiffre.jpg');
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5vh 0;
`;

const BoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5%;

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
    @media screen and (min-width: 1200px) {
      width: 45%;
    }
  }

  .box-chiffre {
    margin-top: 50px;
    @media screen and (min-width: 1200px) {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      margin-bottom: 50px;
    }
  }
  @media screen and (min-width: 1200px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export default SectionChiffre;
