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
        <Container className="containerFooter" id="rodape">
            <Col style={{ padding: 10 }}>
                <Row className="footerTop">
                    <img style={{ width: 45 }} src="https://png.pngtree.com/png-vector/20190927/ourlarge/pngtree-computer-screen-illustration-with-smile-emoticons-computer-vector-illustration-for-web-png-image_1745878.jpg" />
                    <text style={{ paddingRight: 5, paddingLeft: 5, fontSize: 17 }}>Aqui estão minhas formas de contato!</text>
                    {/* <img style={{ width: 40 }} src="https://png.pngtree.com/png-vector/20190927/ourlarge/pngtree-computer-screen-illustration-with-smile-emoticons-computer-vector-illustration-for-web-png-image_1745878.jpg" /> */}
                </Row>
                <Row className="footerBottom">
                    <a className="badge" href="https://www.linkedin.com/in/mois%C3%A9s-medeiros/" target="_blank" >
                        <img style={{ paddingRight: 2 }} src="https://img.icons8.com/color/30/000000/linkedin.png" />
                        <text>Linkedin</text>
                    </a>
                    <a className="badge" href="https://drive.google.com/u/0/uc?id=14Q_cAysrG2vWE-AoSHm4RguCKK9oDXJP&export=download" target="_blank">
                        <img style={{ paddingRight: 2 }} src="https://img.icons8.com/officel/30/000000/open-resume.png" />
                        <text>Currículo</text>
                    </a>
                    <a className="badge" href="https://github.com/MoisesMed" target="_blank">
                        <img style={{ paddingRight: 2 }} src="https://img.icons8.com/color/30/000000/github--v1.png" />
                        <text>GitHub</text>
                    </a>
                    <a className="badge" href="mailto:br.moises2605@gmail.com" target="_blank" >
                        <img style={{ paddingRight: 3 }} src="https://img.icons8.com/color/30/000000/gmail--v1.png" />
                        <text>Email</text>
                    </a>
                </Row>
                <Row className="footerBottom">
                </Row>
            </Col>
        </Container>
    );
};




