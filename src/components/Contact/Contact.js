import React from "react";
import ContactForm from "./ContactForm";
import ContactForm2 from "./ContactForm2";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
    return (
        <Container fluid className="contact-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Contact <strong className="blue">Me</strong>
                        </h1>
                        {/* <ContactForm /> */}
                        <ContactForm2 />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                    >
                        <p className="contact-info">Phone: (740) 816-6226</p>
                        <p className="contact-info">Email: debleehall15@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;