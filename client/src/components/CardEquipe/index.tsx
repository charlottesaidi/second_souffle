import React, { FC } from 'react';

import styled from 'styled-components';

const CardEquipe: FC = () => {
  return (
    <Card>
      {/* top */}
      <div className="card-image"></div>
      {/* bottom */}
      <div className="card-content">
        {/* name */}
        <p className="card-content__name">John Doe</p>
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

  .card-image,
  .card-content {
    border-radius: 5px;
  }

  .card-image {
    height: 139px;
    background: center / cover no-repeat url("./assets/img/profil.jpg");
  }

  .card-content {
    height: 196px;
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

export default CardEquipe;
