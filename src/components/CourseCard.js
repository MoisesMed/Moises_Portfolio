import React from "react";
import styled from "styled-components";
import {
  StyledLabel,
  StyledSmallTitle,
  StyledSmallLabel,
} from "./StyledComponents";

const StyledCourseDiv = styled.a`
  display: flex;
  color: var(--brand-primary-color);
  background-color: ${({ theme }) => theme.backgroundSecondaryColor};
  flex-direction: column;
  padding: 4px 8px;
  border-radius: 4px;
  text-align-last: start;
  margin: 8px 0px;

  &:hover {
    transform: scale(1.03, 1.03);
    text-decoration: none;
  }
`;

export default function CourseCard() {
  const courses = [
    {
      name: "Git and Github",
      institution: "Dio",
      emission: "Jun of 2021",
      workload: "5 hours",
      hasLink: true,
      link: "https://www.dio.me/certificate/EEDC0B77/share",
      description:
        "Git introduction course, command line, git commands, github introduction, merges, and conflict resolution.",
    },
    {
      name: "React + Redux",
      institution: "Udemy",
      emission: "Mar of 2021",
      workload: "49.5 hours",
      hasLink: true,
      link: "https://www.udemy.com/certificate/UC-47d71489-b422-44ba-a359-faf6ffd7371d/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email",
      description:
        "React course with Redux, Webpack, full-stacks application development, react componentization and good development practices.",
    },
    {
      name: "JavaScript and Node.js",
      institution: "Udemy",
      emission: "Mar of 2021",
      workload: "22 hours",
      hasLink: true,
      link: "https://www.udemy.com/certificate/UC-aeb01951-d83e-4ca0-ad12-e0a1f29224f9/",
      description:
        "Javascript course from basic to advanced, object orientation, web programming with Node, programming logic, regular expressions, events and DOM.",
    },
    //     {
    //     name: "Computer technician",
    //     institution: "Microlins",
    //     emission: "Aug of 2016",
    //     workload: "89 hours",
    //     hasLink:false,
    //     description: "The course involved assembly and maintenance of computers. He was taught in the course on hardware and software"
    // },
  ];
  return (
    <>
      {courses.map((item) => (
        <StyledCourseDiv link={item.hasLink} href={item.link} target="_blank">
          <StyledSmallTitle>{item.name}</StyledSmallTitle>
          <StyledLabel noSpace responsive>
            {item.institution}
          </StyledLabel>
          <StyledSmallLabel>{item.emission}</StyledSmallLabel>
          <StyledSmallLabel>Workload {item.workload}</StyledSmallLabel>
          <StyledLabel responsive>{item.description}</StyledLabel>
        </StyledCourseDiv>
      ))}
    </>
  );
}
