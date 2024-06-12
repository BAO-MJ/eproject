import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import InfoImage from "./InfoImage.tsx";
import './Restaurants.css';

export default function Restaurants()
{
    return (
        <Container className="container-xl-forced">
            <Row className="p-4">
                <Col md='5' className="pb-4 pb-md-0">
                    <InfoImage style={{minHeight: '50vh'}} id="main-info-image" image="images-6.jpg" location="Holly’s Lemonade Stand" name="9:00-19:00" openHours="C"/>
                </Col>
                <Col md='7'>
                    <Stack direction='vertical' className="justify-content-between" gap={3}>
                        <InfoImage direction='horizontal' image="images-7.jpg" location="Toucan Grille" name="9:00-19:00" openHours="C"/>
                        <InfoImage direction='horizontal' image="images-8.jpg" location="Pavilion Bar & Grille" name="9:00-19:00" openHours="C"/>
                        <InfoImage direction='horizontal' image="images-9.jpg" location="Flavor Burst" name="9:00-19:00" openHours="C"/>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}