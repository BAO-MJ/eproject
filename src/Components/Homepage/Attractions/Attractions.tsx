import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './Attractions.css';
import TitleImage from "../TitleImage.tsx";

function Portfolio({ image = '', description }: Readonly<{ image?: string, description: string }>) {
    return (
        <Col>
            <TitleImage src={image} alt="place of fun">
                <div className="portfolio-desc">
                    <span>{description}</span>
                </div>
            </TitleImage>
        </Col>
    );
}

export default function Attractions() {
    return (
        <Container fluid className="d-flex flex-column">
            <Row>
                <h1>Attractions & Rides!</h1>
            </Row>
            <Row className="gx-20 flex-grow-1 px-5 py-4">
                <Portfolio image="header.png" description='hello' />
                <Portfolio description='hi' />
                <Portfolio description='faku' />
            </Row>
        </Container>
    );
}