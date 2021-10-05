/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
    Container,
    Col, Row
} from "react-bootstrap";

import "./styles.css";

const Sticks = [
    { nome: "JavaScript", img: "https://img.icons8.com/color/60/000000/javascript--v1.png" },
    { nome: "HTML", img: "https://img.icons8.com/color/60/000000/html-5--v1.png" },
    { nome: "CSS", img: "https://img.icons8.com/color/60/000000/css3.png" },
    { nome: "Bootstrap", img: "https://img.icons8.com/color/60/000000/bootstrap.png" },
    { nome: "TypeScript", img: "https://img.icons8.com/color/60/000000/typescript.png" },
    { nome: "React", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
    { nome: "React Native", img: "https://img.icons8.com/color/60/000000/react-native.png" },
    { nome: "SQL", img: "https://image.flaticon.com/icons/png/512/2772/2772128.png" },
    { nome: "Git", img: "https://img.icons8.com/color/48/000000/git.png" },
    { nome: "NPM", img: "https://img.icons8.com/color/48/000000/npm.png" },
    { nome: "SQL Server", img: "https://img.icons8.com/color/48/000000/microsoft-sql-server.png" },
    { nome: "FireBase", img: "https://img.icons8.com/color/48/000000/firebase.png" }
]


export default function Tecnologies() {
    return (
        <Container 
        style={{
            paddingTop: 100, paddingBottom: 100, backgroundColor: "#d5f7e6", maxWidth: "100%"
        }}
            id="tecnologias">
            <Col className="colStacks"  >
                <Col className="mainTitle">Habilidades</Col>
                <Row className="RowStacks">
                    {Sticks.map((item) =>
                        <Col xs={3} className="stack" id="stack" >
                            <Col className="tecTitle">{item.nome}</Col>
                            <Col>
                                <img src={item.img} className="tecImg" style={{ width: 60 }} />
                            </Col>
                        </Col>
                    )}
                </Row>
            </Col>
        </Container >
    );
};




