import React from "react";
import styled from "styled-components";
import NavItemLink from "./NavItemLink";
import { ReactComponent as Github } from "../assets/img/github.svg";
import { ReactComponent as Linkedin } from "../assets/img/linkedin.svg";
import computerIcon from "../assets/img/computerIcon.png";
import MenuOpen from "../assets/img/menu_open.svg";
import MenuClosed from "../assets/img/menu_close.svg";
import { StyledA, StyledCol, StyledIcon } from "./StyledComponents";

const StyledNavBarDiv = styled.div`
  background-color: #181818;
  position: sticky;
  top: 0;
  height: 100vh;
  width: 120px;
  min-width: 120px;
  flex-direction: column;
  display: flex;
  align-items: center;
  border-right: 1px solid #282828;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    display: ${(props) => (props.showMenu ? "flex" : "none")};
    width: 100%;
    position: fixed;
    z-index: 2;
  }
`;

const StyledNavBarLogo = styled.div`
  height: 100%;
`;

const StyledNavBarIcons = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
  border-top: 1px solid #282828;
  div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: flex-end;
  }
`;

const StyledNavBarMenu = styled.img`
  width: 45px;
  margin: 4px 6px 0px 0px;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 700px) {
    background-color: #181818;
    padding: 4px;
    display: block;
    border-radius: 50%;
  }
`;
const StyledButtonSend = styled.button`
  font-size: 18px;
  height: 35px;
  margin-top: 8px;
  border-radius: 4px;
  background-color: #2a2a2a;
  color: #e5e5e5;
  border: 1px solid #e5e5e5;
`;
export default function NavBar({ isDarkTheme, handleChangeTheme }) {
  const [showMenu, setShowMenu] = React.useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <StyledNavBarMenu
        src={showMenu ? MenuOpen : MenuClosed}
        onClick={() => setShowMenu(!showMenu)}
      />
      <StyledNavBarDiv showMenu={showMenu}>
        <StyledNavBarLogo>
          <StyledIcon src={computerIcon} />
        </StyledNavBarLogo>
        <StyledCol>
          <NavItemLink close={closeMenu} to={"about"}>
            About
          </NavItemLink>
          <NavItemLink close={closeMenu} to={"experience"}>
            Experience
          </NavItemLink>
          <NavItemLink close={closeMenu} to={"projects"}>
            Projects
          </NavItemLink>
          <NavItemLink close={closeMenu} to={"skills"}>
            Skills
          </NavItemLink>
          <NavItemLink close={closeMenu} to={"contact"}>
            Contact
          </NavItemLink>
        </StyledCol>
        <StyledNavBarIcons>
          <StyledButtonSend onClick={handleChangeTheme}>
            {!isDarkTheme ? "Dark Mode" : "White Mode"}
          </StyledButtonSend>
          <div>
            {" "}
            <StyledA
              href={"https://www.linkedin.com/in/moises-medeiros/"}
              target="_blank"
            >
              <Linkedin />
            </StyledA>
            <StyledA href={"https://github.com/MoisesMed"} target="_blank">
              <Github />
            </StyledA>
          </div>
        </StyledNavBarIcons>
      </StyledNavBarDiv>
    </>
  );
}
