import React from "react";
import styled from "styled-components";
import NavItemLink from "./NavItemLink";
import {ReactComponent as Github} from '../assets/img/github.svg'
import {ReactComponent as Linkedin} from '../assets/img/linkedin.svg'
import computerIcon from "../assets/img/computerIcon.png"
import {StyledA, StyledCol, StyledIcon} from "../components/StyledComponents"

const StyledNavBarDiv = styled.div`
  background-color: #181818;
  position: sticky;
  top: 0;
  height: 100vh;
  width: 120px;
  min-width:120px;
  flex-direction: column;
  display: flex;
  align-items: center;
  border-right: 1px solid #282828;
  justify-content: space-between
`

const StyledNavBarLogo = styled.div`
  height: 100%
`

const StyledNavBarIcons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  height: 100%;
  align-items: flex-end;
  border-top: 1px solid #282828;
`

export default function NavBar() {

    return (
        <StyledNavBarDiv>

            <StyledNavBarLogo>
                <StyledIcon src={computerIcon}/>
            </StyledNavBarLogo>

            <StyledCol>
                <NavItemLink to={"about"}>About</NavItemLink>
                <NavItemLink to={"skills"}>Skills</NavItemLink>
                <NavItemLink to={"experience"}>Experience</NavItemLink>
                {/*<NavItemLink to={"projects"}>Projects</NavItemLink>*/}
                {/*<NavItemLink to={"contact"}>Contact</NavItemLink>*/}
            </StyledCol>

            <StyledNavBarIcons>
                <StyledA href={"https://www.linkedin.com/in/moises-medeiros/"} target="_blank"><Linkedin/></StyledA>
                <StyledA href={"https://github.com/MoisesMed"} target="_blank"><Github/></StyledA>
            </StyledNavBarIcons>

        </StyledNavBarDiv>
    );
};