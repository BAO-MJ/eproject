import React, { FormEvent, useState } from "react";
import './Newsletter.css';
import { Stack, Container, Row, Col, Button, FormControl, Form, FormGroup } from "react-bootstrap";


export default function Newsletter() {
    const [validated, setValidated] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        setSuccess(form.checkValidity());
        setValidated(true);
    };

    return (
        <div className="my-auto">
            <Stack>
                <h1>Sign Up for a Newsletter</h1>
                <h3>Sign up and be the first to know about all the latest stuff!</h3>
                <Container>
                    <Row>
                        <Col sm={'3'} />
                        <Col>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <FormGroup as={Stack} gap={2}>
                                    <FormControl onChange={() => { setValidated(false); }} type="email" placeholder="Your email address*" required />
                                    <FormControl.Feedback>You have successfully subscribed to the newsletter</FormControl.Feedback>
                                    <FormControl.Feedback type="invalid">Invalid email address</FormControl.Feedback>
                                    <Button className={"ms-auto" + (success ? " d-none" : "")} type="submit">Sign Up</Button>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col sm={'3'} />
                    </Row>
                </Container>
            </Stack>
        </div>
    )
}