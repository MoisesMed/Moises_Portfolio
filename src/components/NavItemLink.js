import React from "react";
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const LinkItemContainer = styled(NavLink)`
  color: var(--brand-primary-color);
  fill: var(--brand-primary-color);
  font-size: 17px;
  text-align: -webkit-center;
  padding: 12px 0px;
  cursor: pointer;
  border-top: 1px solid #282828;

  &:hover {
    text-decoration: none;
    color: var(--brand-tertiary-color);
  }

  &:hover svg {
    fill: var(--brand-tertiary-color);
  }

  &.active {
    text-decoration: none;
    color: var(--brand-tertiary-color);
  }

  &:hover svg {
    fill: var(--brand-tertiary-color);
  }

`

export default function NavItemLink({to, children, ...props}) {
    return (
        <LinkItemContainer to={to} {...props} onClick={() => props.close()}>
            {children}
        </LinkItemContainer>

    )
}