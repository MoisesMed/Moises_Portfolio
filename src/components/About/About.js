/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
    Col,
    Row,
    Container,
} from "react-bootstrap";

import "./styles.css";

export default function About() {

    return (
        <Container className="containerSobre" id="sobre">
            <Col>
                <Row className="textoSobreTitle"><text>Sobre</text></Row>
                <Row className="textoSobre"><text>Meu nome é Moisés Medeiros, tenho 22 anos, sou desenvolvedor Web e Mobile, técnico de informática e amante de tecnologia.</text></Row>
                <Row className="textoSobre"><text>Por conta da faculdade comecei a programar em C++ e Java no começo de 2019. Em 2020, mudei para JavaScript, e logo depois arrumei meu primeiro emprego como desenvolvedor Front End.</text></Row>
                <Row className="textoSobre"><text>Meu primeiro emprego foi como estagiário de desenvolvimento Web utilizando JavaScript, HTML, CSS, React e SQL.</text></Row>
            </Col>
        </Container>
    );
};




