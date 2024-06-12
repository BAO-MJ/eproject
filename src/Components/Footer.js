import React, { useMemo } from "react";
import './Footer.css';
import { Container, Row, Col, Image, Stack } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLocationDot, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export default function Footer()
{
    const socialIconStyles = useMemo(() => ({size: '1.5em'}), []);
    const contactIconStyles = useMemo(() => ({size: '1.8em'}), []);

    return (
        <footer id="footer">
            <Container>
                <Row>
                    <Col sm={'6'} lg={'3'}>
                        <Image fluid id="footer-logo" src="/logo.png"/>
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
                    <Col id="pages" sm={'6'} lg={'2'} className="mt-5 mt-lg-0">
                        <h2 className="pb-3">Pages</h2>
                        <Stack>
                            <Link to={"/"}>Home</Link>
                            <Link to={"/pricing"}>Pricing</Link>
                            <Link to={"/about"}>About us</Link>
                            <Link to={"/forms/contact"}>Contact us</Link>
                        </Stack>
                    </Col>
                    <Col sm={'6'} lg={'3'} className="mt-5 mt-lg-0">
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
                    <Col sm={'6'} lg={'4'} className="mt-5 mt-lg-0">
                        <h2 className="pb-3">Contacts</h2>
                        <Stack gap={3}>
                            <IconContext.Provider value={contactIconStyles}>
                                <Container>
                                    <Row>
                                        <Col className="contact-icon align-items-center col-2"><FaLocationDot/></Col>
                                        <Col><span>01 Ly Tu Trong Street, Ninh Kieu District,<br/>Can Tho City, Vietnam</span></Col>
                                    </Row>
                                    <Row>
                                        <Col className="contact-icon justify-content-center col-2"><IoIosMail/></Col>
                                        <Col><a href="mailto:cusc@ctu.edu.vn"><span>cusc@ctu.edu.vn</span></a></Col>
                                    </Row>
                                </Container>
                            </IconContext.Provider>
                            <a id="contact-tel" href="tel:+842923835581"><h1><b>+84 292 383 5581</b></h1></a>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}