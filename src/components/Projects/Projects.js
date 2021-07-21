/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
    Container,
    Col, Row
} from "react-bootstrap";
import Button from '@material-ui/core/Button';

import "./styles.css";

const Projetos = [
    { nome: "Meu_Curriculo", descricao: "Curriculo online", github: "https://github.com/MoisesMed/Meu_Curriculo", vercel: "https://teamsoft.vercel.app/compra" },
    { nome: "E-commerce", descricao: "Teste para uma vaga de estágio", github: "https://github.com/MoisesMed/Ecommerce", vercel: "https://meu-curriculo-vert.vercel.app/" },
    { nome: "ProjetoBebidas", descricao: "Projeto feito em 2 aulas para a faculdade", github: "https://github.com/MoisesMed/ProjetoBebidas", vercel: 0 }
]
export default function Projects() {

    return (
        <Container style={{
            marginTop: 60, backgroundColor: "white", maxWidth: "100%", paddingTop: 100, paddingBottom: 100
        }}
            id="section4">
            <Col className="ColProjetos">
                <Col className="mainTitle">Projetos</Col>
                <Row className="RowStacks">
                    {Projetos.map((item) =>
                        <Col xs={3} className="projetoBox" >
                            <Col className="projeTitle">{item.nome}</Col>
                            <Row style={{ justifyContent: "center" }}>{item.descricao}</Row>
                            <Row style={{ justifyContent: "center", bottom: 0, position: "absolute", alignItems: "flex-end" }}>
                                {item.vercel === 0 ?
                                    <Row style={{ justifyContent: "center" }}>
                                        <Button className="onlyGithub" variant="contained" color="primary" target="_blank">
                                            GitHub
                                        </Button>
                                    </Row>
                                    :
                                    <Col>
                                        <Button className="githubButton" variant="contained" color="primary" href={item.github} target="_blank" >
                                            GitHub
                                        </Button>
                                        <Button className="vercelButton" variant="contained" color="primary" href={item.vercel} target="_blank" >
                                            Vercel
                                        </Button>
                                    </Col>
                                }
                            </Row>
                        </Col>
                    )}
                </Row>
            </Col>
        </Container>
    );
};




