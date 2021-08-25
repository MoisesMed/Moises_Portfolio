/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
    Container,
    Col, Row
} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import Barricade from "../../assets/img/barricade.svg"

import "./styles.css";

const Projetos = [
    { nome: "Meu_Curriculo", descricao: "Projeto de um currículo responsivo online", github: "https://github.com/MoisesMed/Meu_Curriculo", vercel: "https://moises-portfolio.vercel.app/" },
    { nome: "Pharma Inc", descricao: "Front-End Challenge by coodesh 🏅 2021", github: "https://github.com/MoisesMed/Pharma_Inc", vercel: "https://pharma-inc-zeta.vercel.app/" },
    { nome: "Minhas Tarefas", descricao: "Projeto para organização pessoal. Em construção!", vercel: "https://minhas-tarefas.vercel.app/home", under: 1 },
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
                        <Col xs={3} className={item.under === 1 ? "projetoBoxUnder" : "projetoBox"} >
                            {item.under === 1 ?
                                <Col className="projeTitle" style={{ paddingRight: 0, paddingLeft: 0 }}>
                                    <img style={{ height: 22, width: 22, padding: 0, marginRight: 4 }} src="https://img.icons8.com/color/48/000000/maintenance.png" />
                                    {item.nome}
                                    <img style={{ height: 22, width: 22, padding: 0, marginLeft: 4 }} src="https://img.icons8.com/color/48/000000/maintenance.png" />
                                </Col> :
                                <Col className="projeTitle">
                                    {item.nome}
                                </Col>
                            }

                            <Row className="projeDesc" style={{ justifyContent: "center", paddingRight: 5, paddingLeft: 5 }}>{item.descricao}</Row>
                            <Row style={{ justifyContent: "center", alignItems: "flex-end", marginTop: 5, whiteSpace: "pre" }}>
                                {item.vercel === 0 ?
                                    <Row style={{ justifyContent: "center" }}>
                                        <Button className="onlyGithub" variant="contained" color="primary" href={item.github} target="_blank" >
                                            GitHub
                                        </Button>
                                    </Row>
                                    : item.github ?
                                        <Col>
                                            <Button className="githubButton" variant="contained" color="primary" href={item.github} target="_blank" >
                                                GitHub
                                            </Button>
                                            <Button className="vercelButton" variant="contained" color="primary" href={item.vercel} target="_blank" >
                                                Vercel
                                            </Button>
                                        </Col>
                                        :
                                        <Col>
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




