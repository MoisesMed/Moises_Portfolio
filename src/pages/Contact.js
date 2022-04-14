import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import SendEmail from "../components/SendEmail";
import MyContacts from "../components/MyContacts";

export default function Contact() {

    return (
        <Container fluid className="fluidContainer">
            <Row>
                <Col lg={6} >
                <MyContacts/>
                </Col>
                <Col lg={6}>
                    <SendEmail/>
                </Col>
            </Row>
        </Container>
    );
}