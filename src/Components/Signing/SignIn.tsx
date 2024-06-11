import React from "react";
import GenericForm from "../GenericForm";
import { Button, Col, Form, FormControl, FormGroup, FormLabel, FormSelect, FormText, NavLink, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SignIn()
{
    return (
        <GenericForm containerClass="container-md-forced" title={"Sign In"}>
            <Col md={'12'}>
                <Stack className="m-2 p-4" id="contact-form" gap={4}>
                    <Form as={Stack} gap={3}>
                        <FormGroup controlId="usernameInput">
                            <FormLabel>Username</FormLabel>
                            <FormControl type="text" name="username" required />
                        </FormGroup>
                        <FormGroup controlId="passwordInput">
                            <FormLabel>Password</FormLabel>
                            <FormControl type="password" name="password" required />
                        </FormGroup>
                        <div className="w-100 d-flex">
                            <FormText className="my-auto">Don't have an account? <Link to='/forms/sign/up'>Sign up now!</Link></FormText>
                            <Button className="ms-auto" type="submit">Login</Button>
                        </div>
                    </Form>
                </Stack>
            </Col>
        </GenericForm>
    )
}