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
        <Container className="containerMain" id="cabecalho">
            <Row>
                <Col className="nome">
                    <a href="#cabecalho" style={{ color: "black" }}>
                        Moisés Medeiros
                    </a>
                </Col>
            </Row>
            <Row>
                <Col className="sobre">
                    <a href="#sobre" style={{ color: "black" }}>
                        Sobre
                    </a>
                </Col>
                <Col className="sobre">
                    <a href="#tecnologias" style={{ color: "black" }}>
                        Habilidades
                    </a>
                </Col>
                <Col className="sobre">
                    <a href="#certificacoes" style={{ color: "black" }}>
                        Certificações
                    </a>
                </Col>
                <Col className="sobre">
                    <a href="#projetos" style={{ color: "black" }}>
                        Projetos
                    </a>
                </Col>
            </Row>
        </Container>
    );
};




