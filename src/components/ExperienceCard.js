import React from "react";
import styled from "styled-components";
import {
  StyledLabel,
  StyledIcon,
  StyledBadge,
  StyledSmallTitle,
} from "./StyledComponents";
import { Col, Row } from "react-bootstrap";
import bnbImg from "../assets/img/bnb.jpeg";
import tsImg from "../assets/img/ts.jpeg";
import neoImg from "../assets/img/neo.jpeg";
import osfImg from "../assets/img/osfdigital.jpeg";

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
  const experienceArray = [
    {
      img: osfImg,
      nome: "OSF Digital",
      tempo: "Oct of 2022 - Until now",
      tipo: "Full time",
      cargo: "Front End and Mobile Developer",
      stack: [
        "React",
        "TypeScript",
        "JavaScript",
        "React Native",
        "Next JS",
        "HTML5",
        "tailwind",
        "CSS3",
        "npm",
        "Git",
        "bootstrap",
        "context_api",
        "react router",
        "axios",
        "styled components",
      ],
    },
    {
      img: neoImg,
      nome: "Neo Ventures",
      tempo: "Oct of 2021 - Oct of 2022 (1 year)",
      tipo: "Full time",
      cargo: "Front End Developer",
      stack: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "npm",
        "Git",
        "bootstrap",
        "context_api",
        "React router",
        "axios",
        "styled components",
      ],
    },
    {
      img: tsImg,
      nome: "TeamSoft Tecnologia e Sistemas",
      tempo: "Apr of 2021 - Oct of 2021 (7 months)",
      tipo: "Part-time",
      cargo: "Front End and Mobile Developer",
      stack: [
        "React",
        "JavaScript",
        "React Native",
        "html5",
        "CSS3",
        "NPM",
        "Git",
        "bootstrap",
        "material_ui",
        "axios",
        "redux",
        "React router",
      ],
    },
    {
      img: bnbImg,
      nome: "Banco do Nordeste do Brasil S.A",
      tempo: "Nov of 2020 - Aug of 2021 (10 months)",
      tipo: "Trainee",
      cargo: "Web developer trainee",
      stack: [
        "React",
        "javascript",
        "html5",
        "css3",
        "SQL",
        "sql_server",
        "material_ui",
        "npm",
        "Git",
      ],
    },
  ];

  return (
    <>
      {experienceArray.map((item, i) => (
        <StyledExperienceCard key={item.cargo + i}>
          <Col>
            <Row>
              <Col xl={1} md={2} sm={12} xs={12} className="align-self-center">
                <StyledIcon big circle src={item.img} />
              </Col>
              <Col xl={5} md={10} sm={12} xs={12} className="align-self-center">
                <Row>
                  <StyledLabel responsive start>
                    {" "}
                    <StyledSmallTitle>Enterprise:</StyledSmallTitle> {item.nome}
                  </StyledLabel>
                  <StyledLabel responsive start>
                    <StyledSmallTitle>Type:</StyledSmallTitle> {item.tipo}
                  </StyledLabel>
                  <StyledLabel responsive start>
                    <StyledSmallTitle>Duration:</StyledSmallTitle> {item.tempo}
                  </StyledLabel>
                  <StyledLabel responsive start>
                    <StyledSmallTitle>Position:</StyledSmallTitle> {item.cargo}
                  </StyledLabel>
                </Row>
              </Col>
              <Col xl={6} md={12} sm={12} xs={12}>
                <Row className="justify-content-center">
                  <StyledSmallTitle dashed>Technologies</StyledSmallTitle>
                  {item.stack.map((item, iS) => (
                    <StyledBadge
                      key={item + iS}
                      src={`https://img.shields.io/badge/${item}-181818?style=for-the-badge&logo=${
                        item === "React Native" ? "react" : item
                      }`}
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
