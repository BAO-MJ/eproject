import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import InfoImage from "./InfoImage.js";
import './Restaurants.css';

export default function Restaurants()
{
    return (
        <Container className="container-xl-forced">
            <Row className="p-4">
                <Col md='5' className="pb-4 pb-md-0">
                    <InfoImage style={{minHeight: '50vh',color:'black'}} id="main-info-image" image="images-6.jpg" location="Keansburg Amusement Park " name="Holly’s Lemonade Stand" openHours="9:00-19:00"/>
                </Col>
                <Col md='7'>
                    <Stack direction='vertical' className="justify-content-between" gap={3}>
                        <InfoImage direction='horizontal' image="images-7.jpg" location="Keansburg Amusement Park " name="Toucan Grille"style={{color:'black'}} openHours="9:00-19:00"/>
                        <InfoImage direction='horizontal' image="images-8.jpg" location="Keansburg Amusement Park " name="Pavilion Bar & Grille"style={{color:'black'}} openHours="9:00-19:00"/>
                        <InfoImage direction='horizontal' image="images-9.jpg" location="Keansburg Amusement Park " name="Flavor Burst"style={{color:'black'}} openHours="9:00-19:00"/>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}