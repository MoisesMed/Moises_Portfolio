/* eslint-disable react-hooks/exhaustive-deps */
import React, {
    useState,
    useEffect
} from "react";
import {
    Container,
    Col,
    Row
} from "react-bootstrap";
import "./styles.css"

export default function Experience() {
    const experienceArray = [
        {
            img:"https://media-exp1.licdn.com/dms/image/C4E0BAQGVw68nNmlpOw/company-logo_100_100/0/1635249282386?e=1654128000&v=beta&t=C5gN5UHFIAsH94ToaDvy5T79m3fnnlt9in-md8tBUbU",
            nome: "Neo Ventures",
            tempo: "Out de 2021 - Até o momento",
            tipo:"Tempo integral",
            cargo:"Desenvolvedor de software",
            atribuicoes:[{atr:"Desenvolvimento de aplicações Web usando React"}]
        },
    {
        img:"https://media-exp1.licdn.com/dms/image/C4E0BAQEVFOIVYXK0IQ/company-logo_100_100/0/1576084127236?e=1654128000&v=beta&t=zEMbgguOChp34wmcZYnBA3NHWPzPCDdS22znOlEq0yc",
        nome: "TeamSoft Tecnologia e Sistemas",
        tempo: "Abr de 2021 - Out de 2021 (7 meses)",
        tipo:"Meio período",
        cargo:"Desenvolvedor Front End",
        atribuicoes:[
            {atr:"Desenvolvimento de aplicações Web e Mobile"},
        {atr:"Manutenção de códigos em JavaScript e React"}
    ]
        },
     { 
         img:"https://media-exp1.licdn.com/dms/image/C510BAQEoyZSbzumUWw/company-logo_100_100/0/1519872692684?e=1654128000&v=beta&t=AlNo8buQ94PvkxW-hAKz4HMRempE4hhqORR0q5d5jPo",
        nome: "Banco do Nordeste do Brasil S.A",
        tempo: "Nov de 2020 - Ago de 2021 (10 meses)",
        tipo:"Estágio",
        cargo:"Estagiário de desenvolvimento web",
        atribuicoes:[
            {atr:"Desenvolvimento de aplicações web com React e JavaScript"},
            {atr:"Implementação e manutenção de aplicações web"},
            {atr:"Realização de testes"},
            {atr:"Criação e alimentação de bancos de dados (SQL Server e SQLite)"},
        ]
        }]

    return ( 
        <Container 
        style={{ paddingTop: 100, maxWidth: "100%" }}
            id="experience">
            <Col className="colStacks"  >
                <Col className="mainTitle">Experiências e Certificações </Col>
                <Row className="RowStacks">
                    {experienceArray.map((item) =>
                        <Col lg={11} sm={12} className="experienceColCard" id="stack" >
                            <Col className="experienceRowImg">
                                <img src={item.img} className="expImg"/>
                               <Row>
                                   <Col>
                                   <span className="titleItems">Instituição: </span> 
                                   <span className="valueItems">{item.nome}</span>
                                   </Col>
                                   <Col>
                                   <span className="titleItems">Tipo: </span> 
                                   <span className="valueItems">{item.tipo}</span>
                                   </Col>
                               </Row>
                               <Row>
                                   <Col>
                                   <span className="titleItems">Permanência: </span> 
                                   <span className="valueItems">{item.tempo}</span>
                                   </Col>
                                   <Col>
                                   <span className="titleItems">Cargo: </span> 
                                   <span className="valueItems">{item.cargo}</span>
                                   </Col>
                               </Row>
                            </Col>
                            <Row>
                                <Col className="mt-3 mb-3">
                                {item.atribuicoes.map(item =>
                                    <li className="expLi">{item.atr}</li>
                                    )}
                                </Col>
                            </Row>
                        </Col>
                    )}
                </Row>
            </Col>
        </Container >
    );
};