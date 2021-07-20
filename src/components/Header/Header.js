/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
    Container,
    Col, Row
} from "react-bootstrap";

import "./styles.css";

export default function Header() {

    return (
        <Container className="containerMain">
            <Row>
                <Col className="nome">Moisés Medeiros</Col>
                <Col className="sobre">Início</Col>
                <Col className="sobre">Sobre</Col>
                <Col className="projetos">Projetos</Col>
            </Row>
        </Container>
    );
};




