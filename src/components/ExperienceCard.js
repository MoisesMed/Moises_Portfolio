import React from "react";
import styled from "styled-components";
import {StyledLabel, StyledIcon, StyledBadge, StyledSmallTitle} from "./StyledComponents"
import {Col, Row} from "react-bootstrap";

const StyledExperienceCard = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--brand-secondary-color);
  margin: 10px 20px;
  padding: 4px;
  border-radius: 2px;
  text-align: center;
`

export default function ExperienceCard() {
    const experienceArray = [
        {
            img: "https://media-exp1.licdn.com/dms/image/C4E0BAQGVw68nNmlpOw/company-logo_100_100/0/1635249282386?e=1654128000&v=beta&t=C5gN5UHFIAsH94ToaDvy5T79m3fnnlt9in-md8tBUbU",
            nome: "Neo Ventures",
            tempo: "Oct of 2021 - Until now",
            tipo: "Full time",
            cargo: "Front End Developer",
            stack: ["react", "JavaScript", "React Native", "html5", "css3", "npm", "git", "bootstrap", "context_api", "react router", "axios", "styled components"],
        },
        {
            img: "https://media-exp1.licdn.com/dms/image/C4E0BAQEVFOIVYXK0IQ/company-logo_100_100/0/1576084127236?e=1654128000&v=beta&t=zEMbgguOChp34wmcZYnBA3NHWPzPCDdS22znOlEq0yc",
            nome: "TeamSoft Tecnologia e Sistemas",
            tempo: "Apr of 2021 - Oct of 2021 (7 months)",
            tipo: "Part-time",
            cargo: "Front End Developer",
            stack: ["react", "JavaScript", "React Native", "html5", "css3", "NPM", "git", "bootstrap", "material_ui", "axios", "redux", "react router"],
        },
        {
            img: "https://media-exp1.licdn.com/dms/image/C510BAQEoyZSbzumUWw/company-logo_100_100/0/1519872692684?e=1654128000&v=beta&t=AlNo8buQ94PvkxW-hAKz4HMRempE4hhqORR0q5d5jPo",
            nome: "Banco do Nordeste do Brasil S.A",
            tempo: "Nov of 2020 - Aug of 2021 (10 months)",
            tipo: "Trainee",
            cargo: "Web developer trainee",
            stack: ["react", "javascript", "html5", "css3", "SQL", "sql_server", "material_ui", "npm", "git"],
        }]

    return (
        <>
            {experienceArray.map(item =>
                <StyledExperienceCard>
                    <Col>
                        <Row>
                            <Col xl={1} md={2} sm={12} xs={12} className="align-self-center">
                                <StyledIcon big circle src={item.img}/>
                            </Col>
                            <Col xl={5} md={10} sm={12} xs={12} className="align-self-center">
                                <Row>
                                    <StyledLabel responsive start> <StyledSmallTitle>Enterprise:</StyledSmallTitle> {item.nome}
                                    </StyledLabel>
                                    <StyledLabel responsive start><StyledSmallTitle>Type:</StyledSmallTitle> {item.tipo}
                                    </StyledLabel>
                                    <StyledLabel responsive start><StyledSmallTitle>Duration:</StyledSmallTitle> {item.tempo}
                                    </StyledLabel>
                                    <StyledLabel responsive start><StyledSmallTitle>Position:</StyledSmallTitle> {item.cargo}
                                    </StyledLabel>
                                </Row>
                            </Col>
                            <Col xl={6} md={12} sm={12} xs={12}>
                                <Row className="justify-content-center">
                                    <StyledSmallTitle dashed>Technologies</StyledSmallTitle>
                                    {item.stack.map(item => <StyledBadge
                                        src={`https://img.shields.io/badge/${item}-181818?style=for-the-badge&logo=${item === "React Native" ? "react" : item}`}/>)}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </StyledExperienceCard>)}
        </>
    );
}