import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { StyledLabel, StyledTitle } from "../components/StyledComponents";

export default function Projects() {
  return (
    <Container fluid className="fluidContainer">
      <StyledTitle>Projects</StyledTitle>
      <StyledLabel responsive>These are the projects I did in my spare time.</StyledLabel>
      <StyledLabel responsive>
        Some are private or in progress, but will be posted here.
      </StyledLabel>
      <ProjectCard />
    </Container>
  );
}
