import React from "react";
import GenericForm from "../GenericForm";
import { Button, Col, Form, FormControl, FormGroup, FormLabel, FormText, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SignUp()
{
    return (
        <GenericForm containerClass="container-md-forced" title={"Sign Up"}>
            <Col md={'12'}>
                <Stack className="m-2 p-4" id="contact-form" gap={4}>
                    <Form as={Stack} gap={3}>
                        <div>
                            <Row>
                                <Col lg={'6'}>
                                    <FormGroup controlId="nameInput">
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl type="text" name="name" required />
                                    </FormGroup>
                                </Col>
                                <Col lg={'6'} className="mt-3 mt-lg-0">
                                    <FormGroup controlId="emailInput">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl type="email" name="email" required />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </div>
                        <FormGroup controlId="usernameInput">
                            <FormLabel>Username*</FormLabel>
                            <FormControl type="text" name="username" required />
                        </FormGroup>
                        <FormGroup controlId="passwordInput">
                            <FormLabel>Password*</FormLabel>
                            <FormControl type="password" name="password" required />
                        </FormGroup>
                        <FormGroup controlId="rePasswordInput">
                            <FormLabel>Confirm Password*</FormLabel>
                            <FormControl type="password" name="password" required />
                        </FormGroup>
                        <div className="w-100 d-flex">
                            <FormText className="my-auto">Already have an account? <Link to='/forms/sign/in'>Sign in now!</Link></FormText>
                            <Button className="ms-auto" type="submit">Sign Up</Button>
                        </div>
                    </Form>
                </Stack>
            </Col>
        </GenericForm>
    )
}