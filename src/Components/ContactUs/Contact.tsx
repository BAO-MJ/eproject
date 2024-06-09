import React, { useMemo } from "react";
import { Button, Col, Container, Form, FormControl, FormSelect, Row, Stack } from "react-bootstrap";
import './Contact.css';
import { ReactComponent as ContactImage } from './contact.svg';
import { FiPhone } from "react-icons/fi";
import { IconContext } from "react-icons";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";

const Contact = () => {
    const contactIconStyles = useMemo(() => ({size: '1.8em'}), []);
    return (
        <div id="contact" className="align-content-center">
            <Container fluid='lg' id="contact-inner" className="p-3">
                <Row>
                    <h2 className="text-center fw-bold">Contact Us</h2>
                </Row>
                <Row>
                    <Col md={'6'}>
                        <Stack className="m-2 p-4" id="contact-form" gap={4}>
                            <h3 style={{fontWeight: 'bold'}}>Please leave a message for support</h3>
                            <Form as={Stack} gap={3}>
                                <FormControl placeholder="Full name*" required />
                                <FormControl type="email" placeholder="Email*" required />
                                <FormControl placeholder="Phone number*" required />
                                <FormSelect>
                                    <option value="1">Support</option>
                                    <option value="2">Complain</option>
                                    <option value="3">Advise</option>
                                </FormSelect>
                                <FormControl style={{resize: 'none'}} as="textarea" placeholder="Message" cols={40} rows={7} />
                            </Form>
                            <Button className="ms-auto" type="submit">SEND</Button>
                        </Stack>
                        
                    </Col>
                    <Col md={'6'}>
                        <ContactImage/>
                        <h3>Head office address:</h3>
                        <IconContext.Provider value={contactIconStyles}>
                            <Container>
                                <Row>
                                    <Col xs={'1'}>
                                        <MdOutlineLocationOn/>
                                    </Col>
                                    <Col>
                                        <p>275 Beachway, Keansburg, NJ 07734</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={'1'}>
                                        <FiPhone/>
                                    </Col>
                                    <Col>
                                        <p>(732) 495-1400</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={'1'}>
                                        <MdOutlineEmail/>
                                    </Col>
                                    <Col>
                                        <p>Info@KeansburgAmusementPark.com</p>
                                    </Col>
                                </Row>
                            </Container>
                        </IconContext.Provider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
