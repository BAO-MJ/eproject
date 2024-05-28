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
                    <InfoImage style={{minHeight: '50vh'}} className="main-info-image" image="https://keansburgamusementpark.com/wp-content/uploads/2024/03/DSC04446-Edit.jpg_compressed-600x420.jpeg" location="A" name="V" openHours="C"/>
                </Col>
                <Col md='7'>
                    <Stack direction='vertical' className="justify-content-between" gap={3}>
                        <InfoImage direction='horizontal' image="https://keansburgamusementpark.com/wp-content/uploads/2024/03/grilled-burgers-recipe-how-to-grill-burgers-1-of-9-650x650-1-600x420.jpg" location="A" name="V" openHours="C"/>
                        <InfoImage direction='horizontal' image="https://keansburgamusementpark.com/wp-content/uploads/2024/02/1A0C78F4-2588-47D7-B2F3-AF60EFD6A470-600x420.jpg" location="A" name="V" openHours="C"/>
                        <InfoImage direction='horizontal' image="https://keansburgamusementpark.com/wp-content/uploads/2016/01/IMG_4365-600x420.jpg" location="A" name="V" openHours="C"/>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}