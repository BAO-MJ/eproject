import React, { FormEvent, useRef, useState } from "react";
import GenericForm from "../GenericForm";
import { Button, Col, Form, FormControl, FormGroup, FormLabel, FormText, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import Swal from "sweetalert2";

export default function SignUp()
{
    const [accounts, setAccounts] = useLocalStorage('accounts', {}, { deserializer: (value) => JSON.parse(value), serializer: (value) => JSON.stringify(value) });
    const [currentAccount, setCurrentAccount] = useLocalStorage('currentAccount', '');

    const [validated, setValidated] = useState(false);
    const navigateTo = useNavigate();
    const fullNameInput = useRef(null);
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);
    const rePasswordInput = useRef(null);
    const rePasswordFeedback = useRef(null);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        else {
            const username = usernameInput.current.value;
            if (username in accounts) {
                Swal.fire({title: 'User Exists', icon: 'error', text: 'Username already exists. Please use another username.'});
            }
            else {
                let newAccounts = accounts;
                const fullName = fullNameInput.current.value;
                const password = passwordInput.current.value;
                const rePassword = rePasswordInput.current.value;

                if (password === rePassword) {
                    newAccounts[username] = { password: password, name: fullName.length > 0 ? fullName : username };
                    setAccounts(newAccounts);
    
                    Swal.fire({title: 'Sign Up Complete', icon: 'success', text: 'You have signed up successfully. Welcome!'})
                        .then(() => {
                            if (currentAccount.length === 0) {
                                setCurrentAccount(newAccounts[username].name);
                            }
            
                            navigateTo('/');
                        });
                }

                
            }
        }
        setValidated(true);
    };

    return (
        <GenericForm containerClass="container-md-forced" title={"Sign Up"}>
            <Col md={'12'}>
                <Stack className="m-2 p-4" id="contact-form" gap={3}>
                    <div>
                        <Row>
                            <Col lg={'6'}>
                                <FormGroup controlId="nameInput">
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl ref={fullNameInput} type="text" name="name" />
                                </FormGroup>
                            </Col>
                            <Col lg={'6'} className="mt-3 mt-lg-0">
                                <FormGroup controlId="emailInput">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl type="email" name="email" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                    <Stack gap={3}>
                        <Form noValidate id="sign-up-form" validated={validated} onSubmit={handleSubmit}>
                            <FormGroup controlId="usernameInput">
                                <FormLabel>Username*</FormLabel>
                                <FormControl ref={usernameInput} type="text" name="username" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide your preferred username.
                                </Form.Control.Feedback>
                            </FormGroup>
                            <FormGroup controlId="passwordInput">
                                <FormLabel>Password*</FormLabel>
                                <FormControl ref={passwordInput} type="password" name="password" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide your preferred password.
                                </Form.Control.Feedback>
                            </FormGroup>
                        </Form>
                            <FormGroup controlId="rePasswordInput">
                                <FormLabel>Confirm Password*</FormLabel>
                                <FormControl ref={rePasswordInput} type="password" name="rePassword" required onChange={(event) => { rePasswordFeedback.current.className = (event.currentTarget.value !== passwordInput.current.value) ? "invalid-feedback d-block" : "invalid-feedback d-none"}} />
                                <Form.Control.Feedback ref={rePasswordFeedback} type="invalid">
                                    The re-entered password is not the same.
                                </Form.Control.Feedback>
                            </FormGroup>
                            <div className="w-100 d-flex">
                                <FormText className="my-auto">Already have an account? <Link to='/forms/sign/in'>Sign in now!</Link></FormText>
                                <Button form="sign-up-form" className="ms-auto" type="submit">Sign Up</Button>
                            </div>
                    </Stack>
                </Stack>
            </Col>
        </GenericForm>
    )
}