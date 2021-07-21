/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
    Container,
    Col, Row
} from "react-bootstrap";
import "../Tecnologies/Tecnologies"

import "./styles.css";

export default function Header() {

    return (
        <Container className="containerMain">
            <Row>
                <Col className="nome">
                    <a href="#section1" style={{ color: "black" }}>
                        Moisés Medeiros
                    </a>
                </Col>
                <Col className="sobre">
                    <a href="#section2" style={{ color: "black" }}>
                        Sobre
                    </a>
                </Col>
                <Col className="sobre">
                    <a href="#section3" style={{ color: "black" }}>
                        Habilidades
                    </a>
                </Col>
                <Col className="projetos">
                    <a href="#section4" style={{ color: "black" }}>
                        Projetos
                    </a>
                </Col>
            </Row>
        </Container>
    );
};




