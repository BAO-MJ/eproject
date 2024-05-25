import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Attractions.css';

function Portfolio({ image = '', description }: { image?: string, description: string }) {
    return (
        <Col>
            <div className="portfolio">
                <div className="image-container d-flex flex-grow-1">
                    <img className={'img-fluid ' + (image == '' ? "image-placeholder" : '')} src={image} alt="place of fun" />
                </div>
                <div className="portfolio-desc">
                    <span>{description}</span>
                </div>
            </div>
        </Col>
        
    )
}

export default function Attractions() {
    return (
        <div style={{ backgroundColor: 'lightblue' }}>
            <Container fluid className="d-flex flex-column" style={{backgroundColor: 'lightblue'}}>
                <Row>
                    <h1>Attractions & Rides!</h1>
                </Row>
                <Row className="gx-20 flex-grow-1 px-5 py-3">
                    <Portfolio image="header.png" description='hello' />
                    <Portfolio description='hi' />
                    <Portfolio description='faku' />
                </Row>
            </Container>
        </div>
        
    )
}