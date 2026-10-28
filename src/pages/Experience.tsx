import React from "react";
import { Container, Row } from "react-bootstrap";
import { StyledTitle } from "../components/StyledComponents";
import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {
  return (
    <Container fluid className="fluidContainer mb-4">
      <Row className="justify-content-md-center">
        <StyledTitle>Experience</StyledTitle>
      </Row>
      <Row className="justify-content-md-center">
        <ExperienceCard />
      </Row>
    </Container>
  );
}
