import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LinkItemContainer = styled(NavLink)`
  color: ${({ theme }) => theme.labelColor};
  fill: ${({ theme }) => theme.labelColor};
  font-size: 17px;
  text-align: -webkit-center;
  padding: 12px 0px;
  cursor: pointer;
  border-top: 1px solid #282828;

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.strongColor};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.strongColor};
  }

  &.active {
    text-decoration: none;
    color: ${({ theme }) => theme.strongColor};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.strongColor};
  }
`;

export default function NavItemLink({ to, children, ...props }) {
  return (
    <LinkItemContainer to={to} {...props} onClick={() => props.close()}>
      {children}
    </LinkItemContainer>
  );
}
