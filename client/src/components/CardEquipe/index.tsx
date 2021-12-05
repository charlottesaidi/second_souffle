import React, { FC } from 'react';

import styled from 'styled-components';

type Props = {
  name: string;
  surname: string;
  image: string;
};

const CardEquipe: FC<Props> = ({ name, surname, image }: Props) => {
  return (
    <Card>
      {/* top */}
      {/* <div className="card-image"></div> */}
      <CardImage image={image}/>
      {/* bottom */}
      <div className="card-content">
        {/* name */}
        <p className="card-content__name">{ surname } { name }</p>
        {/* text */}
        <p className="card-content__text">
          Développeur Front sur le projet Second Souffle
        </p>
        {/* box-icon name */}
        <div className="card-content__box-icon__name">
          <div className="card-content__box-icon">
            <div className="card-content__box-icon__icon card-content__box-icon__icon-phone"></div>
            <div className="card-content__box-icon__icon card-content__box-icon__icon-email"></div>
          </div>
          <p className="card-content__box-name">Second Souffle</p>
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

  .card-content {
    border-radius: 5px;
  }

  .card-content {
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    padding: 10px;
    margin-top: 5px;

    .card-content__name {
      font-size: 1.5em;
      font-weight: 700;
    }

    p {
      color: #000;
      margin-bottom: 0;
    }

    .card-content__box-icon__name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .card-content__box-icon__icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      .card-content__box-icon {
        display: flex;
        justify-content: space-between;
        width: 100px;

        .card-content__box-icon__icon-email {
          background: center no-repeat url("./assets/img/email_white.png");
          background-color: #000;
        }
        .card-content__box-icon__icon-phone {
          background: center no-repeat url("./assets/img/phone_white.png");
          background-color: #2196f3;
        }
      }

      .card-content__box-name {
        font-weight: 600;
        font-size: 0.8em;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }
  }

  @media screen and (min-width: 765px) {
    margin-bottom: 0;
  }
`;

const CardImage = styled.div<{ image: string }>`
  border-radius: 5px;
  height: 200px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default CardEquipe;
