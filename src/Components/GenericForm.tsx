import React, { ReactNode } from "react";
import { Container, Row } from "react-bootstrap";
import './GenericForm.css';

export default function GenericForm({title, children, containerClass = '', ...props})
{
    return (
        <main className="generic-form align-content-center" {...props}>
            <Container fluid={'lg'} id="contact-inner" className={"p-3 " + containerClass}>
                <Row>
                    <h2 className="text-center fw-bold">{title}</h2>
                </Row>
                <Row>
                    {children}
                </Row>
            </Container>
        </main>
    )
}