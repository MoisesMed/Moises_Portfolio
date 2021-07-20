/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
    Container,
    Col, Row
} from "react-bootstrap";

import "./styles.css";

export default function Tecnologies() {

    return (
        <Container style={{ marginTop: 100 }}>
            <Col className="colStacks">
                <Col className="mainTitle">Habilidades</Col>
                <Row className="RowStacks">
                    <Col xs={3} className="stack">
                        <Col className="tecTitle">JavaScript</Col>
                        <Col>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
                        </Col>
                    </Col>
                    <Col xs={3} className="stack">
                        <Col className="tecTitle">TypeScript</Col>
                        <Col>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" />
                        </Col>
                    </Col>
                    <Col xs={3} className="stack">
                        <Col className="tecTitle">Bootstrap</Col>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" />
                        <Col>
                        </Col>
                    </Col>
                </Row>
                <Row className="RowStacks">
                    <Col xs={3} className="stack">
                        <Col className="tecTitle">React</Col>
                        <Col>
                            <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40" />
                        </Col>
                    </Col>
                    <Col xs={3} className="stack">
                        <Col className="tecTitle">HTML</Col>
                        <Col>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
                        </Col>
                    </Col>
                    <Col xs={3} className="stack">
                        <Col className="tecTitle">Css</Col>
                        <Col>
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
                        </Col>
                    </Col>
                </Row>
            </Col>
        </Container>
    );
};




