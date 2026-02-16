import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  StyledBadge,
  StyledCol,
  StyledDraftLabel,
  StyledLabel,
  StyledTitle,
} from "../components/StyledComponents";
import Computer from "../assets/img/coding.svg";
import CourseCard from "../components/CourseCard";
import styled from "styled-components";
import { skillsStack } from "../data/skills";

const StyledSkillImg = styled.img`
  height: 300px;
  width: 100%;
`;

const StyledBadgeDiv = styled.div`
  text-align: center;
  min-height: 100px;
`;

export default function Skills() {
  const toBadgeUrl = (label) => {
    const logo =
      label === "React Native"
        ? "react"
        : label.toLowerCase().replace(/\s+/g, "-");

    return `https://img.shields.io/badge/${encodeURIComponent(
      label
    )}-181818?style=for-the-badge&logo=${encodeURIComponent(logo)}`;
  };

  return (
    <Container fluid className="fluidContainer">
      <Row>
        <Col lg={6} sm={12}>
          <StyledSkillImg src={Computer} />
          <StyledCol>
            <StyledTitle>
              About <StyledDraftLabel>my Skills</StyledDraftLabel>
            </StyledTitle>
            <StyledLabel>
              {" "}
              <StyledDraftLabel>
                In 2016 I started my journey in the area of technology,
              </StyledDraftLabel>{" "}
              I started doing an
              <StyledDraftLabel>
                {" "}
                assembly and maintenance{" "}
              </StyledDraftLabel>{" "}
              course and computers at a local school.
            </StyledLabel>
            <StyledLabel>
              In 2021 I decided to try to enter the job market as a developer.
              In March 2021 I started two courses, one from{" "}
              <StyledDraftLabel>Javascript Programming Logic</StyledDraftLabel>{" "}
              and the other from
              <StyledDraftLabel>
                {" "}
                React + Advanced Javascript.
              </StyledDraftLabel>{" "}
            </StyledLabel>
            <StyledLabel>
              In 2022 I am focused on improving the technologies I already know,
              I am studying about{" "}
              <StyledDraftLabel>
                performance, good practices and practicing a lot.
              </StyledDraftLabel>
            </StyledLabel>
            <StyledLabel>
              Since 2021{" "}
              <StyledDraftLabel>
                I do personal projects parallel to work{" "}
              </StyledDraftLabel>{" "}
              to improve my codes, always trying to{" "}
              <StyledDraftLabel>
                build an application better and better.
              </StyledDraftLabel>{" "}
            </StyledLabel>
          </StyledCol>
          <StyledTitle>
            <StyledDraftLabel>Ski</StyledDraftLabel>lls
          </StyledTitle>
          <StyledBadgeDiv>
            {skillsStack.map((item) => (
              <StyledBadge
                key={item}
                src={toBadgeUrl(item)}
              />
            ))}
          </StyledBadgeDiv>
        </Col>
        <Col lg={6} sm={12}>
          <Row>
            <StyledTitle>
              Cour<StyledDraftLabel>ses</StyledDraftLabel>
            </StyledTitle>
          </Row>
          <CourseCard />
        </Col>
      </Row>
    </Container>
  );
}
