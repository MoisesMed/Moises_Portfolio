import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {StyledTitle} from "../components/StyledComponents";
import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {

    return (
        <Container fluid className="mt-4">
            <Row className="justify-content-md-center">
                <StyledTitle>Experience</StyledTitle>
            </Row>
            <Row className="justify-content-md-center">
                <ExperienceCard/>
            </Row>
        </Container>
    );
}