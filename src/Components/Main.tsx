import React from "react";
import { Container } from "react-bootstrap";

export default function Main()
{
    return (
        <body>
            <section id='attractions'>
                <Container className="justify-content-center" style={{minHeight: '300px'}}>
                    <p>Hello</p>
                </Container>
            </section>
            <section id='restaurant' style={{backgroundColor: 'lightblue'}}>
                <Container style={{minHeight: '300px'}}>
                    <p>Hello</p>
                </Container>
            </section>
            <section id='entertainment'>
                <Container style={{minHeight: '300px'}}>
                    <p>Hello</p>
                </Container>
            </section>
            <section id='pricing' style={{backgroundColor: 'lightblue'}}>
                <Container style={{minHeight: '300px'}}>
                    <p>Hello</p>
                </Container>
            </section>
        </body>
    )
}