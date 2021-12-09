import React, { FC } from 'react';

import styled from 'styled-components';

type Props = {
  data: number;
  title: string;
};

const ChiffreClef: FC<Props> = ({ data, title }: Props) => {
  return (
    <Chiffre>
      <div className="chiffre-content">
        <div className="chiffre-content__number">{data}</div>
        <p>{title}</p>
      </div>
    </Chiffre>
  );
};

const Chiffre = styled.div`
  display: flex;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.25);
  background: #006B2660;
  position: relative;
  margin-bottom: 20px;

  .chiffre-content {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .chiffre-content__number {
      margin-bottom: 10px;
      color: #fff;
      font-weight: 600;
      font-size: 1.3em;
    }

    p {
      font-size: 1em;
      font-weight: 500;
      margin-bottom: 0;
      text-align: center;
      @media screen and (min-width: 1200px){
        width: 100%;
      }
    }
    
  }

`;

export default ChiffreClef;
