import React from "react";
import { Container, Image, Row } from "react-bootstrap";

export default function ParkMap() {
    return (
        <Container>
            <Row>
                <h2 style={{color:'#0D3483',fontSize:'3.5rem',marginBottom:'30px'}}>Park Map</h2>
            </Row>
            <Row>
                <Image src="park-map.png" rounded />
            </Row>
        </Container>
    )
}