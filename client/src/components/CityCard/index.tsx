import React, { FC } from 'react';

import styled from 'styled-components';

type Props = {
  name: string;
  image: string;
};

const CityCard: FC<Props> = ({ name, image }: Props) => {
  return (
    <Card image={image}>
      <div className="cardVille-content">
        <div className="cardVille-content__icon"></div>
        <p>{name}</p>
      </div>
    </Card>
  );
};

const Card = styled.div<{ image: string }>`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: center / cover no-repeat url(${({ image }) => image});
  position: relative; 
  transition: all 0.3s ease-in-out;

  :hover {
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.4);
  }

  @media screen and (min-width: 769px) {
    height: 200px;
  }

  .cardVille-content {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .cardVille-content__icon {
      width: 50px;
      height: 50px;
      background: center / cover no-repeat url("./assets/img/ville.svg");
    }

    p {
      font-size: 1.2em;
      font-weight: 500;
      margin-bottom: 0;
    }
  }
`;

export default CityCard;
