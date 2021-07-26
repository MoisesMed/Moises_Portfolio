/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
    Col,
    Row,
    Container,
    Button
} from "react-bootstrap";
import Popup from 'reactjs-popup';

import "./styles.css";

const montarConteudo = (lista) => {
    <span>{lista}</span>
}

const Cursos = [
    {
        img: "https://scontent.ffor23-1.fna.fbcdn.net/v/t1.6435-1/p148x148/51768489_2216868438642807_3460762326448209920_n.png?_nc_cat=103&ccb=1-3&_nc_sid=1eb0c7&_nc_ohc=LDQXShsEWHkAX-lcMHF&_nc_ht=scontent.ffor23-1.fna&oh=597603ab5547584ddf4718a8f72e7969&oe=61223F68",
        nome: "Introdução ao Git e ao GitHub ",
        instituicao: "Digital Innovation One",
        data: "Emitido em 25 de junho de 2021",
        carga: "5 horas",
        link: "https://certificates.digitalinnovation.one/EEDC0B77",
        conteudo: [
            "Configurar uma aplicação com Webpack",
            "Integrar o Redux em uma aplicação React",
            "Desenvolver uma aplicação full-stack em Javascript",
            "Criar componentes em React",
            "Desenvolver uma aplicação do zero com React/Redux",
            "Aplicar boas práticas de desenvolvimento"
        ]
    },
    {
        img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGwg6B2WR3_vw/company-logo_100_100/0/1544649290856?e=1634774400&v=beta&t=l4IDPB8AAdbV-LF6M1wwacTR355XJyNXAR_4yWrl9Rw",
        nome: "React + Redux: Fundamentos e 2 Apps",
        instituicao: "Udemy Brasil",
        data: "Emitido em 26 de março de 2021",
        carga: "49.5 horas",
        link: "https://www.udemy.com/certificate/UC-47d71489-b422-44ba-a359-faf6ffd7371d/",
        conteudo: [
            "Configurar uma aplicação com Webpack",
            "Integrar o Redux em uma aplicação React",
            "Desenvolver uma aplicação full-stack em Javascript",
            "Criar componentes em React",
            "Desenvolver uma aplicação do zero com React/Redux",
            "Aplicar boas práticas de desenvolvimento"
        ]
    },
    {
        img: "https://media-exp1.licdn.com/dms/image/C4D0BAQGwg6B2WR3_vw/company-logo_100_100/0/1544649290856?e=1634774400&v=beta&t=l4IDPB8AAdbV-LF6M1wwacTR355XJyNXAR_4yWrl9Rw",
        nome: "JavaScript do básico ao avançado",
        instituicao: "Udemy Brasil",
        data: "Emitido em 2 de março de 2021",
        carga: "22 horas",
        link: "https://www.udemy.com/certificate/UC-aeb01951-d83e-4ca0-ad12-e0a1f29224f9/",
        conteudo: [
            "JavaScript do básico ao avançado",
            "Orientação a objetos no JavaScript",
            "Programar web com Node (Express/Sequelize/Handlebars/Body Parser)",
            "Criar aplicações web completas",
            "Lógica de programação com base em JS",
            "Estruturas de condição, repetição e funções",
            "Programação de eventos e DOM com JS",
            "Expressão regular com JavaScript"
        ]
    },
    {
        img: "https://media-exp1.licdn.com/dms/image/C4E0BAQGKsgVCzy1NHw/company-logo_100_100/0/1519905336941?e=1635379200&v=beta&t=iFyHkrawQHQGxlwcK57DimnmJIUwXgfCCgf9vLiTwsM",
        nome: "Montagem e manutenção de computadores",
        instituicao: "Microlins",
        data: "Emitido em 2016",
        carga: "16 horas",
        link: "none",
        conteudo: [
            "Configurar uma aplicação com Webpack",
            "Integrar o Redux em uma aplicação React",
            "Desenvolver uma aplicação full-stack em Javascript",
            "Criar componentes em React",
            "Desenvolver uma aplicação do zero com React/Redux",
            "Aplicar boas práticas de desenvolvimento"
        ]
    },
]

export default function Certificates() {

    return (
        <Container className="certMain" id="certificacoes" >
            <Row className="rowMainTitle">Certificações</Row>
            <Row Row style={{ justifyContent: "space-evenly", width: "100%", margin: 0, padding: 10 }}>
                {Cursos.map((item) =>
                    <Row className="rowCard">
                        <Col xs={2} style={{ padding: 0, margin: 10 }}>
                            <Row className="certImg"><img className="imgCert" style={{ width: 70, borderRadius: 16 }} src={item.img} /></Row>
                        </Col>
                        <Col style={{ padding: 0, margin: 0, borderLeft: "2px solid white" }}>
                            <Row className="certTitle">{item.nome}</Row>
                            <Row className="certRow">{item.instituicao}</Row>
                            <Row className="certRow">{item.data}</Row>
                            <Row className="certRow">Carga horária: {item.carga}</Row>
                            <Row className="buttonRow">
                                <Col>
                                    {item.link == "none" ? "" :
                                        <Button href={item.link} target="_blank" className="buttonLeft" style={{ width: "45%", marginRight: 10, fontSize: 12, backgroundColor: "cornflowerblue", border: "0px", padding: 3, margin: 0 }}>
                                            Ver credencial
                                        </Button>}
                                    <Popup
                                        style={{ backgroundColor: "red", borderRadius: 8 }}
                                        trigger={open => (
                                            <Button className="buttonRight" style={{ width: "43%", marginLeft: 10, fontSize: 12, backgroundColor: "cornflowerblue", border: "0px", padding: 3, margin: 0 }}>
                                                Ver conteúdo
                                            </Button>
                                        )}
                                        // on={['hover', 'focus']}
                                        position="bottom center"
                                        closeOnDocumentClick
                                    >
                                        {item.conteudo.map((lista) =>
                                            (<Col >- {lista}</Col>))}
                                    </Popup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                )}
            </Row>
        </Container >
    );
};




