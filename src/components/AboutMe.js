import React from "react";
import styled from "styled-components";
import { StyledTitle, StyledLabel, StyledDraftLabel } from "./StyledComponents";

const StyledAboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 700px) {
    padding: 0px 10px;
    height: 100vh;
  }

  @media screen and (max-width: 577px) {
    height: 100%;
  }
`;

export default function AboutMe() {
  return (
    <StyledAboutDiv>
      <StyledTitle>
        About <StyledDraftLabel>Me</StyledDraftLabel>
      </StyledTitle>
      <StyledLabel>
        My name is <StyledDraftLabel>Moises Medeiros Matos</StyledDraftLabel>, I
        am 26 years old, Brazilian, and I have already graduated in Information
        Systems. I am a{" "}
        <StyledDraftLabel>full-stack developer</StyledDraftLabel>, computer
        technician and technology lover.
      </StyledLabel>
      <StyledLabel>
        Because of college, I started programming in C++ and Java in early
        2019. In 2020, I switched to
        <StyledDraftLabel> JavaScript</StyledDraftLabel>, and soon after I got
        my first job as a{" "}
        <StyledDraftLabel>front-end developer.</StyledDraftLabel>
      </StyledLabel>
      <StyledLabel>
        In this job, I was a web development intern and worked with{" "}
        <StyledDraftLabel>
          JavaScript, HTML, CSS, React, React Native and Next.
        </StyledDraftLabel>
        Since then, I've been focusing on these stacks.
      </StyledLabel>
    </StyledAboutDiv>
  );
}
