import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect, useState } from "react";
import { Col, NavDropdown, NavLink, NavbarBrand, NavbarCollapse, NavbarText, NavbarToggle, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { useLocalStorage } from "usehooks-ts";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}

// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

function VisitorsCounter() {
    const [visitors, setVisitors] = useState(0);

    // Loading from localStorage
    useEffect(() => {
        const storedVisits = Number(localStorage.getItem("visitCounter")) || 0;
        setVisitors(storedVisits + 1);
    }, []);

    // Saving in localStorage
    useEffect(() => {
        localStorage.setItem("visitCounter", visitors.toString());
    }, [visitors]);

    return <NavbarText id="visit-counter" className="px-3"><b>Visitors:&nbsp;{visitors}</b></NavbarText>;
}

export default function Header({setModalShow}) {
    const [scrolled, setScrolled] = useState(false);
    const { width: vw, height: vh } = useWindowDimensions();
    const isMobile = useMediaQuery({maxWidth: 991.98});
    const location = useLocation();
    const [account, setAccount, removeAccount] = useLocalStorage('currentAccount', '');

    useEffect(() => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            if (windowHeight > 0) {
                setScrolled(true);
            }
        }
    }, [vw]);

    useEffect(() => {
        const shrinkNavbar = () => {
            if (window !== undefined) {
                let windowHeight = window.scrollY;
                setScrolled((prev) => {
                    if (!prev && (windowHeight >= 0.1 * vh)) {
                        return true;
                    }

                    if (prev && (windowHeight < 0.01 * vh)) {
                        return false;
                    }

                    return prev;
                });
            }
        };

        window.addEventListener('scroll', shrinkNavbar);

        return () => {
            window.removeEventListener('scroll', shrinkNavbar);
        };
    }, [vw, vh]);

    const [opaque, setOpaque] = useState(false);

    useEffect(() => {
        setOpaque(location.pathname.startsWith('/forms'));
    }, [location]);

    return (
        <Navbar collapseOnSelect expand={'xl'} id="header" className={`${(scrolled || opaque || isMobile) ? 'opaque-header' : ''} ${(opaque || isMobile ? 'sticky-top' : 'fixed-top')}`}>
            <Container fluid>
                <NavbarBrand as={Link} to="/">
                    <img src="/logo.png" alt="logo" />
                </NavbarBrand>
                <NavbarToggle/>
                <NavbarCollapse className="justify-content-end">
                    <Row>
                        <Col sm={'12'}>
                            
                            <Nav className="justify-content-end">
                                {account.length === 0 ?
                                    <NavLink as={Link} to="/forms/sign/in">
                                        Sign In
                                    </NavLink> :
                                    <NavDropdown title={"Welcome, " + account}>
                                        <NavDropdown.Item onClick={removeAccount}>Sign out</NavDropdown.Item>
                                    </NavDropdown>
                                }
                                <VisitorsCounter />
                            </Nav>
                        </Col>
                        <Col sm={'12'}>
                            <Nav className="justify-content-end">
                                <NavLink as={Link} to="/">
                                    HOME
                                </NavLink>
                                <NavLink as={Link} to="/pricing">
                                    PRICING
                                </NavLink>
                                <NavLink as={Link} to="/about">
                                    ABOUT US
                                </NavLink>
                                <NavLink as={Link} to="/forms/contact">
                                    CONTACT US
                                </NavLink>
                                { 
                                    !location.pathname.startsWith("/forms/checkout") &&
                                    <NavLink id="buy-button" onClick={() => setModalShow(true)}>
                                        BUY TICKETS
                                    </NavLink>
                                }
                            </Nav>
                        </Col>
                    </Row>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}