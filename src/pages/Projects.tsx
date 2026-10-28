import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { StyledLabel, StyledTitle } from "../components/StyledComponents";

export default function Projects() {
  return (
    <Container fluid className="fluidContainer">
      <StyledTitle>Projects</StyledTitle>
      <StyledLabel responsive>
        Two products built for real clients and already in production.
      </StyledLabel>
      <ProjectCard />
    </Container>
  );
}
