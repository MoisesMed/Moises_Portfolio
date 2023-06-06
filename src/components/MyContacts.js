import React from "react";
import styled from "styled-components";
import { StyledA, StyledLabel, StyledTitle } from "./StyledComponents";
import { ReactComponent as Linkedin } from "../assets/img/linkedin.svg";
import { ReactComponent as Github } from "../assets/img/github.svg";
import { ReactComponent as Gmail } from "../assets/img/gmail.svg";
import { ReactComponent as File } from "../assets/img/file.svg";

const StyledMyContactsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
`;

const StyledContactItem = styled.div`
  display: flex;
  align-self: center;
  margin-left: 8px;
  margin-top: 8px;
  span {
    &:hover {
      color: ${({ theme }) => theme.strongColor};
    }
  }
  a {
    gap: 4px;
    display: flex;
    text-decoration: none;
    align-items: center;
  }
  svg {
    width: 32px;
    height: 32px;
  }
`;

export default function MyContacts() {
  return (
    <StyledMyContactsDiv>
      <StyledTitle>Contact Info</StyledTitle>
      <StyledLabel>
        Here are my main forms of contact, feel free to contact me at any time.
      </StyledLabel>
      <StyledContactItem>
        <StyledA
          href={"https://www.linkedin.com/in/moises-medeiros/"}
          target="_blank"
        >
          <Linkedin />{" "}
          <StyledLabel start>
            Here you will be redirected to my linkedin
          </StyledLabel>
          <Linkedin />{" "}
        </StyledA>
      </StyledContactItem>
      <StyledContactItem>
        <StyledA href={"https://github.com/MoisesMed"} target="_blank">
          <Github />
          <StyledLabel start>
            Here you will be redirected to my Github
          </StyledLabel>
          <Github />
        </StyledA>
      </StyledContactItem>
      <StyledContactItem>
        <StyledA href="mailto:br.moises2605@gmail.com" target="_blank">
          <Gmail />
          <StyledLabel start>Here you can send me an email</StyledLabel>
          <Gmail />
        </StyledA>
      </StyledContactItem>
      <StyledContactItem>
        <StyledA
          href={
            "https://drive.google.com/file/d/14O7tScsVnyDuFveImnFf82BFlmUJLVE6/view"
          }
          target="_blank"
        >
          <File />
          <StyledLabel start>Here you can see my curriculum</StyledLabel>
          <File />
        </StyledA>
      </StyledContactItem>
    </StyledMyContactsDiv>
  );
}
