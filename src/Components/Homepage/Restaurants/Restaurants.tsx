import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import InfoImage from "./InfoImage.tsx";
import './Restaurants.css';

export default function Restaurants()
{
    return (
        <Container fluid className="d-flex flex-column" style={{backgroundColor: 'lightblue'}}>
            <Row>
                <h1>RESTAURANTS</h1>
            </Row>
            <Row className="gx-20 flex-grow-1 p-4">
                <Col className="col-5">
                    <InfoImage className="main-info-image" image="" location="A" name="V" openHours="C"/>
                </Col>
                <Col className="d-flex">
                    <Stack direction='vertical' className="justify-content-between" gap={5}>
                        <InfoImage direction='horizontal' image="" location="A" name="V" openHours="C"/>
                        <InfoImage direction='horizontal' image="" location="A" name="V" openHours="C"/>
                        <InfoImage direction='horizontal' image="" location="A" name="V" openHours="C"/>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}