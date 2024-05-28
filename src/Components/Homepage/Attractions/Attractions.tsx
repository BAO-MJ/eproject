import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './Attractions.css';

function Portfolio({ image = '', description }: Readonly<{ image?: string, description: string }>) {
    return (
        <Col className={"image-wrapper portfolio flex-grow-1 d-flex"}>
            <div className="image-container">
                <Image fluid className={image == '' ? "image-placeholder" : ''} src={image} alt={"place of fun"}/>
            </div>
            <div className="portfolio-desc">
                <span>{description}</span>
            </div>
        </Col>
    );
}

export default function Attractions() {
    return (
        <Container className="container-xl-forced d-flex flex-column">
            <Row className="gx-20 px-5 py-4">
                <Portfolio image="https://keansburgamusementpark.com/wp-content/uploads/2024/03/water-park.png" description='hello' />
                <Portfolio image="https://keansburgamusementpark.com/wp-content/uploads/2024/03/rollercoaster.png" description='hi' />
                <Portfolio image="https://keansburgamusementpark.com/wp-content/uploads/2024/03/giant-slide.png" description='faku' />
            </Row>
        </Container>
    );
}