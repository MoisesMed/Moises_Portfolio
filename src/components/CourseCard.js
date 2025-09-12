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
      name: "NextJS: Documenting Your Front-end with Storybook",
      institution: "Alura",
      emission: "September of 2023",
      workload: "6 hours",
      hasLink: true,
      link: "https://cursos.alura.com.br/certificate/e4ff0bca-c101-49d6-b4be-bc26755984af",
      description:
        "Documenting Front-ends, Storybook Features with React, Themes and Providers, Customizing Storybook, Deployment and Final Tips",
    },
    {
      name: "React: Creating a Design System with TailwindCSS",
      institution: "Alura",
      emission: "September of 2023",
      workload: "12 hours",
      hasLink: true,
      link: "https://cursos.alura.com.br/certificate/29a6f1c1-29a5-4afb-b8d4-532902fc299d",
      description:
        "Getting Started, creating Interactive Documentation, importing Design Tokens, the Button Component and other Components",
    },
    {
      name: "Next.js: A Tour of Next.js",
      institution: "Alura",
      emission: "September of 2023",
      workload: "10 hours",
      hasLink: true,
      link: "https://cursos.alura.com.br/certificate/f044702b-e9eb-4eff-ac9f-ca2762449635",
      description:
        "Pages with Next.js, additional features of Next.js, Is Next.js a FullStack Framework? and final Tips and Deployment",
    },
    {
      name: "Next.js: Working with Front-end Architecture",
      institution: "Alura",
      emission: "September of 2023",
      workload: "8 hours",
      hasLink: true,
      link: "https://cursos.alura.com.br/certificate/b2d4e3b1-3a0c-42ea-9b1f-81b815aca119",
      description:
        "A Tour of Architecture and Monorepos, Structuring the Base of Our Monorepo, Shared Linter Configurations, Shared Test Configurations, Configurations on GitHub ",
    },
    {
      name: "Next.js: exploring the framework",
      institution: "Alura",
      emission: "September of 2023",
      workload: "8 hours",
      hasLink: true,
      link: "https://cursos.alura.com.br/certificate/682a63f1-c292-4fc1-af45-77a866d3cd2e",
      description:
        "Getting to know Next.js, build and SEO in practice, styling the project, dynamic data in Next.js and publishing your project",
    },
    {
      name: "Git and Github",
      institution: "Dio",
      emission: "June of 2021",
      workload: "5 hours",
      hasLink: true,
      link: "https://www.dio.me/certificate/EEDC0B77/share",
      description:
        "Git introduction course, command line, git commands, github introduction, merges, and conflict resolution.",
    },
    {
      name: "React + Redux",
      institution: "Udemy",
      emission: "March of 2021",
      workload: "49.5 hours",
      hasLink: true,
      link: "https://www.udemy.com/certificate/UC-47d71489-b422-44ba-a359-faf6ffd7371d/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email",
      description:
        "React course with Redux, Webpack, full-stacks application development, react componentization and good development practices.",
    },
    {
      name: "JavaScript and Node.js",
      institution: "Udemy",
      emission: "March of 2021",
      workload: "22 hours",
      hasLink: true,
      link: "https://www.udemy.com/certificate/UC-aeb01951-d83e-4ca0-ad12-e0a1f29224f9/",
      description:
        "Javascript course from basic to advanced, object orientation, web programming with Node, programming logic, regular expressions, events and DOM.",
    },
    {
      name: "Computer technician",
      institution: "Microlins",
      emission: "August of 2016",
      workload: "89 hours",
      hasLink: false,
      description:
        "The course involved assembly and maintenance of computers. He was taught in the course on hardware and software",
    },
  ];
  return (
    <>
      {courses.map((item, i) => (
        <StyledCourseDiv
          key={item.description + i}
          link={item.hasLink}
          href={item.link}
          target="_blank"
        >
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
