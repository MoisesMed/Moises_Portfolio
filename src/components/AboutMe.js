import React from "react";
import styled from "styled-components";
import {StyledTitle, StyledLabel, StyledDraftLabel} from "../components/StyledComponents"

const StyledAboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  text-align: center;
  //margin-top: 8%;
  @media screen and (max-width: 700px) {
    padding: 0px;
  }
`

export default function AboutMe() {

    return (
        <StyledAboutDiv>
            <StyledTitle>About <StyledDraftLabel> Me</StyledDraftLabel> </StyledTitle>
            <StyledLabel>My name is <StyledDraftLabel> Moisés Medeiros Matos</StyledDraftLabel>, I am 22 years old
                and I do college of Information Systems.
                I am a <StyledDraftLabel> Web and Mobile developer</StyledDraftLabel>, computer technician and
                technology lover.
            </StyledLabel>
            <StyledLabel>Because of college, I started programming in C++ and Java in early 2019.In 2020, I
                switched to<StyledDraftLabel> JavaScript</StyledDraftLabel>, and soon after I got my first job as
                a <StyledDraftLabel>Front End developer.</StyledDraftLabel>
            </StyledLabel>
            <StyledLabel>In this job, I was a Web development intern and worked with <StyledDraftLabel>JavaScript,
                HTML, CSS, React and SQL. </StyledDraftLabel>
                 Since then, I've been focusing on these stacks.
            </StyledLabel>
        </StyledAboutDiv>
    );
}