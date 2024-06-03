import React from "react";
import './Title.css';
import { Container, Row } from "react-bootstrap";

export default function Title() {
    return (
        <div className="flex-grow-1">
            <div className="banner-darken" />
            <Container id="park-title" className="mx-5">
                <Row>
                    <h1 style={{textTransform: 'uppercase'}}>Keansburg Amusement Park</h1>
                </Row>
                <Row>
                    <h3 style={{textTransform: 'uppercase'}}><b>An amusement park for everyone</b></h3>
                </Row>
                <Row>
                    <h4>Opening hours: Varies</h4>
                </Row>
            </Container>
        </div>
    )
}