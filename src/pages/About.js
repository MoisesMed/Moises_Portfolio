import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Computer from "../assets/img/computer.svg"
import AboutMe from "../components/AboutMe";
import {StyledLogo} from "../components/StyledComponents";

export default function About() {

    return (
        <Container fluid className="fluidContainer">
            <Row>
                <Col xs={0} sm={4} lg={5}>
                    <StyledLogo src={Computer}/>
                </Col>
                <Col xs={12} sm={8} lg={7}>
                    <AboutMe/>
                </Col>
            </Row>
        </Container>
    );
}