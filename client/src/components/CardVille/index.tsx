import React, { FC } from 'react';

import styled from 'styled-components';

const CardEquipe: FC = () => {
  return (
    <Card>
      <div className="cardVille-content">
        <div className="cardVille-content__icon"></div>
        <p>Toulouse</p>
      </div>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: center / cover no-repeat url("./assets/img/toulouse.jpg");
  position: relative;

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

export default CardEquipe;
