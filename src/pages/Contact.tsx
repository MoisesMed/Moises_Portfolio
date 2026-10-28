import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SendEmail from "../components/SendEmail";
import MyContacts from "../components/MyContacts";

export default function Contact() {
  return (
    <Container fluid className="fluidContainer fullHeight">
      <Row className="justify-content-center align-items-center g-4 w-100 mx-0">
        <Col xs={12} lg={6} className="d-flex justify-content-center">
          <MyContacts />
        </Col>
        <Col xs={12} lg={6} className="d-flex justify-content-center">
          <SendEmail />
        </Col>
      </Row>
    </Container>
  );
}
