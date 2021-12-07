import React, { FC } from 'react';

import styled from 'styled-components';
import AboutHome from '../../AboutHome';


const SectionLinear: FC = () => {
  return (
    <Linear>
      <BoxContent>
        <AboutHome />
        <BoxImage/>
      </BoxContent>
    </Linear>
  );
};

const Linear = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(-45deg, #007ea7, #006b26);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
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

  @media screen and (min-width: 1200px) {   
    flex-direction: row-reverse;
  } 
`;

const BoxImage = styled.div`
  display: none;
  width: 60%;
  height: 250px;
  background: center / contain no-repeat url("./assets/img/illu-about.png");
  @media screen and (min-width: 1200px) {  
    display: block;
  }
`;

export default SectionLinear;
