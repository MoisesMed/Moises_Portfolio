import React from "react";
import styled from "styled-components";
import {
  StyledLabel,
  StyledSmallTitle,
  StyledSmallLabel,
} from "./StyledComponents";
import { courses } from "../data/courses";

const StyledCourseCard = styled.a`
  display: flex;
  color: ${({ theme }) => theme.titleColor};
  background-color: ${({ theme }) => theme.backgroundSecondaryColor};
  flex-direction: column;
  padding: 0 8px 4px 8px;
  border-radius: 4px;
  text-align-last: start;
  margin: 8px 0px;

  &:hover {
    transform: scale(1.03, 1.03);
    text-decoration: none;
  }
`;

export default function CourseCard() {
  return (
    <>
      {courses.map((item) => (
        <StyledCourseCard
          key={item.id}
          as={item.url ? "a" : "div"}
          href={item.url || undefined}
          target={item.url ? "_blank" : undefined}
          rel={item.url ? "noreferrer noopener" : undefined}
        >
          <StyledSmallTitle noMarginTop>{item.name}</StyledSmallTitle>
          <StyledLabel noSpace >
            {item.institution}
          </StyledLabel>
          <StyledSmallLabel>{item.issued}</StyledSmallLabel>
          <StyledSmallLabel>Workload {item.workload}</StyledSmallLabel>
          <StyledLabel >{item.description}</StyledLabel>
        </StyledCourseCard>
      ))}
    </>
  );
}
