import React, { useMemo } from "react";
import './Footer.css';
import { Container, Row, Col, Image, Stack } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLocationDot, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Footer()
{
    const socialIconStyles = useMemo(() => ({size: '1.5em'}), []);
    const contactIconStyles = useMemo(() => ({size: '1.8em'}), []);

    return (
        <footer id="footer">
            <Container>
                <Row>
                    <Col lg={'3'}>
                        <Image fluid id="footer-logo" src="logo.png"/>
                        <Stack direction="horizontal" className="justify-content-center" gap={2}>
                            <IconContext.Provider value={socialIconStyles}>
                                <div id="fb-icon" className="social-icon">
                                    <FaFacebookF/>
                                </div>
                                <div id="x-icon" className="social-icon">
                                    <FaXTwitter/>
                                </div>
                                <div id="ytb-icon" className="social-icon">
                                    <FaYoutube/>
                                </div>
                                <div id="inst-icon" className="social-icon">
                                    <FaInstagram/>
                                </div>
                                <div id="tiktok-icon" className="social-icon">
                                    <FaTiktok/>
                                </div>
                            </IconContext.Provider>
                        </Stack> 
                    </Col>
                    <Col lg={'5'} className="mt-5 mt-lg-0">
                        <Row>
                        <Col>
                            <h2 className="pb-3">Pages</h2>
                            <Stack>
                                <span>Home</span>
                                <span>About us</span>
                                <span>Contact us</span>
                            </Stack>
                        </Col>
                        <Col>
                            <h2 className="pb-3">Hours</h2>
                            <Stack>
                                <span>Mon - Closed</span>
                                <span>Tue - 9:00 pm - 2:00 am</span>
                                <span>Wed - 9:00 pm - 2:00 am</span>
                                <span>Thu - 9:00 pm - 2:00 am</span>
                                <span>Fri - 9:00 pm - 5:00 am</span>
                                <span>Sat - Noon - 2:00 am</span>
                            </Stack>
                        </Col>
                        </Row>
                    </Col>
                    <Col className="mt-5 mt-lg-0">
                        <h2 className="pb-3">Contacts</h2>
                        <Stack gap={3}>
                            <IconContext.Provider value={contactIconStyles}>
                                <Container>
                                    <Row>
                                        <Col className="contact-icon align-items-center col-2"><FaLocationDot/></Col>
                                        <Col><span>275 Beachway<br/>Keansburg, NJ 07734</span></Col>
                                    </Row>
                                    <Row>
                                        <Col className="contact-icon justify-content-center col-2"><IoIosMail/></Col>
                                        <Col><a href="mailto:Info@KeansburgAmusementPark.com"><span>Info@KeansburgAmusementPark.com</span></a></Col>
                                    </Row>
                                </Container>
                            </IconContext.Provider>
                            <a id="contact-tel" href="tel:1234567891"><h1><b>123 456 7891</b></h1></a>
                        </Stack>
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}