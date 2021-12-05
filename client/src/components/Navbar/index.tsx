import React, { FC, useState } from 'react';

import styled from 'styled-components';

import Link from '../Link';

type NavbarLink = {
  name: string;
  path: string;
};

type Props = {
  links: NavbarLink[];
};

const Navbar: FC<Props> = ({ links }: Props) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
    <Container>
      <NavItems active={menuActive}>
        {links.map(({ name, path }) => (
          <NavItem key={name}>
            <NavLink href={path}>{name}</NavLink>
          </NavItem>
        ))}
      </NavItems>
      <Burger onClick={() => setMenuActive(!menuActive)} active={menuActive}>
        <span></span>
      </Burger>
    </Container>
  );
};

const Container = styled.nav``;

const NavItems = styled.ul<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 0;
  position: absolute;
  overflow: hidden;
  top: 55%;
  right: 14%;
  transform: translate(0%, -50%);
  background: transparent;
  transition: width 0.250s;
  z-index: 100;
  border-radius: 10px;

  @media screen and (min-width: 1200px) {
    width: 250px;
    right: 3%;
  }

  ${({ active }) =>
    active &&
    `
    width: 200px;
  `};
`;

const NavItem = styled.li`
  text-align: center;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(Link)`
  display: inline-block;
  position: relative;
  padding: 0 0 4px 0;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.7em;
  letter-spacing: 2px;
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    border-radius: 10px;
  }

  &:hover&:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Burger = styled.div<{ active: boolean }>`

  display: none;
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
  float: right;
  z-index: 100;
  border-radius: 50%;
  

  span {
    width: 100%;
    height: 3px;
    position: absolute;
    background-color: #fff;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.25s ease-in-out;

    &:before,
    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: #fff;
      transition: all 0.25s ease-in-out;
    }

    &:before {
      margin-top: -8px;
      width: 60%;
    }

    &:after {
      margin-top: 8px;
      width: 35%;
    }

    ${({ active }) =>
      active &&
      `
        background: transparent;

        &::before {
          transform: rotate(135deg);
          margin-top: 0;
          width: 100%;
        }

        &::after {
          transform: rotate(-315deg);
          margin-top: 0;
          width: 100%;
        }
      `};
  }

  @media screen and (max-width: 811px) {
    display: block;
  }
`;

export type { NavbarLink };
export default Navbar;
