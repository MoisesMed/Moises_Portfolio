/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
    Container,
    Col, Row, Nav, NavDropdown
} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import "../Tecnologies/Tecnologies"

import "./styles.css";

export default function Header() {

    return (
        // <Container className="containerMain" id="cabecalho">
        //     <Row>
        //         <Col className="nome">
        //             <a href="#cabecalho" style={{ color: "black" }}>
        //                 Moisés Medeiros
        //             </a>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col className="sobre" style={{ padding: 0, marginRight: 10 }}>
        //             <a href="#sobre" style={{ color: "black" }}>
        //                 Sobre
        //             </a>
        //         </Col>
        //         <Col className="sobre" style={{ padding: 0, marginRight: 10 }}>
        //             <a href="#tecnologias" style={{ color: "black" }}>
        //                 Habilidades
        //             </a>
        //         </Col>
        //         <Col className="sobre" style={{ padding: 0, marginRight: 10 }}>
        //             <a href="#certificacoes" style={{ color: "black" }}>
        //                 Certificações
        //             </a>
        //         </Col>
        //         <Col className="sobre" style={{ padding: 0, marginRight: 10 }}>
        //             <a href="#projetos" style={{ color: "black" }}>
        //                 Projetos
        //             </a>
        //         </Col>
        //     </Row>
        // </Container>

        // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="NavBar">
        //     <Container>
        //         <Navbar.Brand href="#cabecalho" className="NavBarItemTitle">Moisés Medeiros</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav"  >
        //             <Nav className="me-auto" >
        //                 <Nav.Link href="#sobre" className="NavBarItem" >Sobre</Nav.Link>
        //                 <Nav.Link href="#tecnologias" className="NavBarItem" >Habilidades</Nav.Link>
        //                 <Nav.Link href="#certificacoes" className="NavBarItem" >Certificações</Nav.Link>
        //                 <Nav.Link href="#projetos" className="NavBarItem" >Projetos</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        < Navbar className="NavBar" bg="light" expand="lg" >
            <Navbar.Brand href="#cabecalho" className="NavBarItemTitle">Moisés Medeiros</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto" >
                    <Nav.Link href="#sobre" className="NavBarItem" >Sobre</Nav.Link>
                    <Nav.Link href="#tecnologias" className="NavBarItem" >Habilidades</Nav.Link>
                    <Nav.Link href="#certificacoes" className="NavBarItem" >Certificações</Nav.Link>
                    <Nav.Link href="#projetos" className="NavBarItem" >Projetos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};




