/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
    Col,
    Row,
    Container,
} from "react-bootstrap";
import welcomeHands from "../../assets/img/welcomeHands.jpg";

import "./styles.css";

export default function Welcome() {

    return (
        <Container id="bemvindo" style={{ paddingTop: 100 }}>
            <Row className="RowMain" style={{ padding: 0, margin: 0 }} >
                <Col xs={7} className="ColEsquerda">
                    <p className="paragrafo">Oi <strong>:)</strong></p>
                    <p className="paragrafo">Meu nome é <strong className="nameStrong">Moisés</strong>, </p>
                    <p className="paragrafo">Sou desenvolvedor Front End.</p>
                </Col>
                <Col xs={5} className="imgCol">
                    <img className="img" src={welcomeHands}></img>
                    </Col>
            </Row>
        </Container>
    );
};




