import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import NavItemLink from "./NavItemLink";
import { ReactComponent as Github } from "../assets/img/github.svg";
import { ReactComponent as Linkedin } from "../assets/img/linkedin.svg";
import computerIcon from "../assets/img/computerIcon.png";
import MenuOpen from "../assets/img/menu_open.svg";
import MenuClosed from "../assets/img/menu_close.svg";
import { StyledIcon } from "./StyledComponents";

const StyledNavBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 5;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-bottom: 1px solid #282828;
`;

const StyledNavBarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  max-width: 1200px;
  min-height: 72px;
  margin: 0 auto;
  padding: 8px 16px;
`;

const StyledNavBarLogo = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  img {
    display: block;
    width: 32px;
    margin: 0;
  }
`;

const StyledNavBarMenuContent = styled.div<{ isOpen: boolean }>`
  display: contents;

  @media screen and (max-width: 700px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    padding: 8px 16px 16px;
    background-color: ${({ theme }) => theme.backgroundColor};
    border-bottom: 1px solid #282828;
  }
`;

const StyledNavBarLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const StyledNavBarActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  flex-shrink: 0;

  @media screen and (max-width: 700px) {
    margin-top: 16px;
    justify-content: center;
  }
`;

const StyledSocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledSocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.labelColor};
  border-radius: 50%;
  color: ${({ theme }) => theme.titleColor};
  transition: color 150ms ease, border-color 150ms ease,
    background-color 150ms ease;

  svg {
    width: 20px;
    height: 20px;
  }

  svg path {
    fill: currentColor;
  }

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.strongColor};
    background-color: ${({ theme }) => theme.backgroundSecondaryColor};
    color: ${({ theme }) => theme.strongColor};
  }
`;

const StyledMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  padding: 4px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
  }

  @media screen and (max-width: 700px) {
    display: flex;
  }
`;

const StyledThemeButton = styled.button`
  min-height: 38px;
  padding: 0 14px;
  border: 1px solid ${({ theme }) => theme.strongColor};
  border-radius: 20px;
  background-color: transparent;
  color: ${({ theme }) => theme.titleColor};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: color 150ms ease, background-color 150ms ease;

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.strongColor};
    color: ${({ theme }) => theme.backgroundColor};
  }
`;

interface NavBarProps {
  isDarkTheme: boolean;
  handleChangeTheme: () => void;
}

export default function NavBar({
  isDarkTheme,
  handleChangeTheme,
}: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navBarRef = useRef<HTMLElement | null>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleOutsidePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !navBarRef.current?.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsidePointerDown);
    return () =>
      document.removeEventListener("pointerdown", handleOutsidePointerDown);
  }, [isMenuOpen]);

  return (
    <StyledNavBar ref={navBarRef}>
      <StyledNavBarContent>
        <StyledNavBarLogo>
          <StyledIcon src={computerIcon} alt="Portfolio home" />
        </StyledNavBarLogo>
        <StyledNavBarMenuContent isOpen={isMenuOpen}>
          <StyledNavBarLinks aria-label="Main navigation">
            <NavItemLink close={closeMenu} to="/about">
              About
            </NavItemLink>
            <NavItemLink close={closeMenu} to="/experience">
              Experience
            </NavItemLink>
            <NavItemLink close={closeMenu} to="/projects">
              Projects
            </NavItemLink>
            <NavItemLink close={closeMenu} to="/skills">
              Skills
            </NavItemLink>
            <NavItemLink close={closeMenu} to="/contact">
              Contact
            </NavItemLink>
          </StyledNavBarLinks>
          <StyledNavBarActions>
            <StyledThemeButton
              type="button"
              onClick={handleChangeTheme}
              aria-label={`Switch to ${isDarkTheme ? "light" : "dark"} mode`}
            >
              {isDarkTheme ? "Light mode" : "Dark mode"}
            </StyledThemeButton>
            <StyledSocialLinks>
              <StyledSocialLink
                href="https://www.linkedin.com/in/moises-medeiros/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </StyledSocialLink>
              <StyledSocialLink
                href="https://github.com/MoisesMed"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
              >
                <Github />
              </StyledSocialLink>
            </StyledSocialLinks>
          </StyledNavBarActions>
        </StyledNavBarMenuContent>
        <StyledMenuButton
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <img src={isMenuOpen ? MenuOpen : MenuClosed} alt="" />
        </StyledMenuButton>
      </StyledNavBarContent>
    </StyledNavBar>
  );
}
