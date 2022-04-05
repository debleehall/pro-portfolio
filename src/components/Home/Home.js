import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hello!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                My name is 
                                <strong className="main-name"> Debbie Hall </strong>
                            </h1>

                            
                            <div style={{ padding: 50, textAlign: "left" }}>
                            
                            <Type />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            
        </section>
    );
}

export default Home;