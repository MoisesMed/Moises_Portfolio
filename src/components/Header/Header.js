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