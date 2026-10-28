import React from "react";
import styled from "styled-components";
import { NavLink, To } from "react-router-dom";

const LinkItemContainer = styled(NavLink)`
  color: ${({ theme }) => theme.titleColor};
  fill: ${({ theme }) => theme.titleColor};
  font-size: 17px;
  text-align: center;
  padding: 10px 12px 8px;
  cursor: pointer;
  border-bottom: 2px solid transparent;

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.strongColor};
  }

  &.active {
    text-decoration: none;
    color: ${({ theme }) => theme.strongColor};
    border-bottom-color: ${({ theme }) => theme.strongColor};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.strongColor};
  }
`;

interface NavItemLinkProps {
  to: To;
  children: React.ReactNode;
  close?: () => void;
  onClick?: () => void;
}

export default function NavItemLink({
  to,
  children,
  close,
  onClick,
}: NavItemLinkProps) {
  const handleClick = () => {
    if (typeof close === "function") {
      close();
    }
    if (typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <LinkItemContainer to={to} onClick={handleClick}>
      {children}
    </LinkItemContainer>
  );
}
