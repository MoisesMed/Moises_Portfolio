/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
    Container,
    Col, Row
} from "react-bootstrap";
import "../Tecnologies/Tecnologies"

import "./styles.css";

export default function Footer() {

    return (
        <Container className="containerFooter">
            <Col style={{ padding: 10 }}>
                <Row className="footerTop">
                    Projeto desenvolvido usando JavaScript, React e Bootstrap.
                </Row>
                <Row className="footerBottom">
                    <a href="https://www.linkedin.com/in/mois%C3%A9s-medeiros/" target="_blank" >
                        <img src="https://img.icons8.com/color/40/000000/linkedin.png" />
                    </a>
                    <text className="email" style={{ marginLeft: 10, marginRight: 10 }} ><img src="https://img.icons8.com/color/24/000000/gmail--v1.png" /> br.moises2605@gmail.com</text>
                    <a href="https://github.com/MoisesMed" target="_blank">
                        <img src="https://img.icons8.com/color/40/000000/github--v1.png" />
                    </a>
                </Row>
                <Row className="footerBottom">
                </Row>
            </Col>
        </Container>
    );
};




