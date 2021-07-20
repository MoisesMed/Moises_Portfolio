/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
    Container,
} from "react-bootstrap";

import "./styles.css";

export default function Header() {

    return (
        <Container className="containerMain">
            <div className="nome">Moisés</div>
            <div className="sobre">Sobre</div>
            <div className="projetos">Projetos</div>
        </Container>
    );
};




