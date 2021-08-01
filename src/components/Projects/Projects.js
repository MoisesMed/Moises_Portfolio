/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
    Container,
    Col, Row
} from "react-bootstrap";
import Button from '@material-ui/core/Button';

import "./styles.css";

const Projetos = [
    { nome: "Meu_Curriculo", descricao: "Projeto de um currículo responsivo online", github: "https://github.com/MoisesMed/Meu_Curriculo", vercel: "https://moises-portfolio.vercel.app/" },
    { nome: "E-commerce", descricao: "Projeto de simulação de uma página de E-commerce", github: "https://github.com/MoisesMed/Ecommerce", vercel: "https://teamsoft.vercel.app/compra" },
    { nome: "ProjetoBebidas", descricao: "E-commerce de bebidas feito em 2 aulas da faculdade", github: "https://github.com/MoisesMed/ProjetoBebidas", vercel: 0 }
]
export default function Projects() {

    return (
        <Container style={{ backgroundColor: "#d5f7e6", maxWidth: "100%", paddingTop: 100, paddingBottom: 100 }}
            id="projetos">
            <Col className="ColProjetos">
                <Col className="mainTitle">Projetos</Col>
                <Row className="RowStacks">
                    {Projetos.map((item) =>
                        <Col xs={3} className="projetoBox" >
                            <Col className="projeTitle">{item.nome}</Col>
                            <Row className="projeDesc" style={{ justifyContent: "center", paddingRight: 5, paddingLeft: 5 }}>{item.descricao}</Row>
                            <Row style={{ justifyContent: "center", alignItems: "flex-end", marginTop: 5, whiteSpace: "pre" }}>
                                {item.vercel === 0 ?
                                    <Row style={{ justifyContent: "center" }}>
                                        <Button className="onlyGithub" variant="contained" color="primary" href={item.github} target="_blank" >
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




