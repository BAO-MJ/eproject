import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './Attractions.css';

function Portfolio({ image = '', description }: Readonly<{ image?: string, description: string }>) {
    return (
        <Col className={"portfolio"}>
            <div className="image-container">
                <Image fluid className={image === '' ? "image-placeholder" : ''} src={image} alt={"place of fun"}/>
                <div className="banner-darken"/>
            </div>
            <div className="portfolio-desc">
                <span>{description}</span>
            </div>
        </Col>
    );
}

export default function Attractions() {
    return (
        <Container className="container-xl-forced d-flex flex-grow-1 flex-column">
            <Row className="gx-20 px-5 py-4">
                <Portfolio image="https://keansburgamusementpark.com/wp-content/uploads/2024/03/water-park.png" description='Water park' />
                <Portfolio image="https://keansburgamusementpark.com/wp-content/uploads/2024/03/rollercoaster.png" description='Rollercoaster' />
                <Portfolio image="https://keansburgamusementpark.com/wp-content/uploads/2024/03/giant-slide.png" description='Giant slide' />
            </Row>
        </Container>
    );
}