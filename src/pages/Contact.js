import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Computer from "../assets/img/computer.svg"
import AboutMe from "../components/AboutMe";
import {StyledLogo} from "../components/StyledComponents";
import Map from "../components/Map";

export default function Contact() {

    return (
        <Container fluid className="fluidContainer">
          contact
            <Map/>
        </Container>
    );
}