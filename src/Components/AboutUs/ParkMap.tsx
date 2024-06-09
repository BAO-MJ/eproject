import React from "react";
import { Container, Image, Row } from "react-bootstrap";

export default function ParkMap() {
    return (
        <Container>
            <Row>
                <h2>Park Map</h2>
            </Row>
            <Row>
                <Image src="park-map.png" rounded />
            </Row>
        </Container>
    )
}