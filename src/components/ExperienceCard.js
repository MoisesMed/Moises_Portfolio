import React from "react";
import styled from "styled-components";
import {
  StyledLabel,
  StyledIcon,
  StyledBadge,
  StyledSmallTitle,
} from "./StyledComponents";
import { Col, Row } from "react-bootstrap";
import { experiences } from "../data/experience";

const StyledExperienceCard = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundSecondaryColor};
  margin: 10px 20px;
  padding: 4px;
  border-radius: 2px;
  text-align: center;
`;

export default function ExperienceCard() {
  return (
    <>
      {experiences.map((item) => (
        <StyledExperienceCard key={item.id}>
          <Col>
            <Row>
              <Col xl={1} md={2} sm={12} xs={12} className="align-self-center">
                <StyledIcon big circle src={item.logo} />
              </Col>
              <Col xl={5} md={10} sm={12} xs={12} className="align-self-center">
                <Row className="ml-1">
                  <StyledLabel>
                    <StyledSmallTitle>Enterprise:</StyledSmallTitle>{" "}
                    {item.company}
                  </StyledLabel>
                  <StyledLabel>
                    <StyledSmallTitle>Type:</StyledSmallTitle> {item.type}
                  </StyledLabel>
                  <StyledLabel>
                    <StyledSmallTitle>Duration:</StyledSmallTitle> {item.period}
                  </StyledLabel>
                  <StyledLabel>
                    <StyledSmallTitle>Position:</StyledSmallTitle> {item.role}
                  </StyledLabel>
                </Row>
              </Col>
              <Col xl={6} md={12} sm={12} xs={12}>
                <Row className="justify-content-center">
                  <StyledSmallTitle center dashed>
                    Technologies
                  </StyledSmallTitle>
                  {item.technologies.map((tech) => (
                    <StyledBadge
                      key={`${item.id}-${tech}`}
                      src={`https://img.shields.io/badge/${encodeURIComponent(
                        tech,
                      )}-181818?style=for-the-badge&logo=${encodeURIComponent(
                        tech === "React Native"
                          ? "react"
                          : tech.toLowerCase().replace(/\s+/g, "-"),
                      )}`}
                    />
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </StyledExperienceCard>
      ))}
    </>
  );
}
