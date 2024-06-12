import React, { FormEvent, useMemo, useState } from "react";
import { Button, Col, Container, Form, FormControl, FormSelect, Row, Stack } from "react-bootstrap";
import './Contact.css';
import { ReactComponent as ContactImage } from './contact.svg';
import { FiPhone } from "react-icons/fi";
import { IconContext } from "react-icons";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import GenericForm from "../GenericForm.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const contactIconStyles = useMemo(() => ({size: '1.8em'}), []);
    const navigateTo = useNavigate();

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        else {
            Swal.fire({title: 'Message sent', icon: 'success', html: 'Thank you for your help.<br/>We\'ll contact you in the near future.'})
                .then(() => navigateTo('/'));
        }
        setValidated(true);
    };

    return (
        <GenericForm title={"Contact Us"} id="contact">
            <Col md={'6'}>
                <Stack className="m-2 p-4" id="contact-form" gap={3}>
                    <h3 style={{fontWeight: 'bold',color:'#444'}}>Please leave a message for support</h3>
                    <Form id="contact-us-form" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Stack gap={3}>
                            <FormControl type="text" placeholder="Full name*" style={{background:'#fff'}} required />
                            <Form.Control.Feedback className="my-0" type="invalid">
                                Please provide your name.
                            </Form.Control.Feedback>
                            <FormControl type="email" placeholder="Email*" required />
                            <Form.Control.Feedback className="my-0" type="invalid">
                                Please provide your email.
                            </Form.Control.Feedback>
                            <FormControl placeholder="Phone number*" required />
                            <Form.Control.Feedback className="my-0" type="invalid">
                                Please provide your phone number.
                            </Form.Control.Feedback>
                        </Stack>
                    </Form>
                    <FormSelect>
                        <option value="1">Support</option>
                        <option value="2">Complain</option>
                        <option value="3">Advise</option>
                    </FormSelect>
                    <FormControl style={{resize: 'none'}} as="textarea" placeholder="Message" cols={40} rows={7} />
                    <div className="w-100 d-flex">
                        <Button form="contact-us-form" className="ms-auto" type="submit">Send</Button>
                    </div>
                </Stack>
            </Col>
            <Col md={'6'}>
                <ContactImage/>
                <h3 style={{color:'#0D3483'}}>Head office address:</h3>
                <IconContext.Provider value={contactIconStyles}>
                    <Container>
                        <Row>
                            <Col xs={'1'}>
                                <MdOutlineLocationOn/>
                            </Col>
                            <Col>
                                <p style={{color:'black'}}>01 Ly Tu Trong Street, Ninh Kieu District, Can Tho City, Vietnam</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={'1'}>
                                <FiPhone/>
                            </Col>
                            <Col>
                                <p style={{color:'black'}}>+84 292 383 5581</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={'1'}>
                                <MdOutlineEmail/>
                            </Col>
                            <Col>
                                <p style={{color:'black'}}>cusc@ctu.edu.vn</p>
                            </Col>
                        </Row>
                    </Container>
                </IconContext.Provider>
            </Col>
        </GenericForm>
    );
};

export default Contact;
