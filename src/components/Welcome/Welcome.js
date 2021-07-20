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
        <Container>
            <Row className="RowMain" >
                <Col xs={7} className="ColEsquerda">
                    <p className="paragrafo">Oi :)</p>
                    <p className="paragrafo">Meu nome é <strong>Moisés Medeiros.</strong> </p>
                    <p className="paragrafo">Sou desenvolvedor Front End...</p>
                </Col>
                <Col xs={5}>
                    <img style={{ width: 500 }} src={welcomeHands}></img></Col>
            </Row>
        </Container>
    );
};




