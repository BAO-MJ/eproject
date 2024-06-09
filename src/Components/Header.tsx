import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect, useState } from "react";
import { NavLink, NavbarBrand, NavbarCollapse, NavbarText, NavbarToggle } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import './Header.scss';
import MediaQuery from "react-responsive";

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

    return <NavbarText id="visit-counter"><b>Visitors:&nbsp;{visitors}</b></NavbarText>;
}

export default function Header({setModalShow}) {
    const [scrolled, setScrolled] = useState(false);
    const { width: vw, height: vh } = useWindowDimensions();
    const location = useLocation();

    useEffect(() => {
        if (window !== undefined) {
            if (vw < 992) {
                setScrolled(true);
                return;
            }

            let windowHeight = window.scrollY;
            if (windowHeight > 0) {
                setScrolled(true);
            }
        }
    }, [vw]);

    useEffect(() => {
        const shrinkNavbar = () => {
            if (window !== undefined) {
                if (vw < 992) {
                    setScrolled(true);
                    return;
                }

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

    return (
        <Navbar fixed="top" expand={'xl'} id="header" className={`${scrolled && 'mini-header'}`}>
            <Container fluid>
                <NavbarBrand href="/">
                    <img src="logo.png" alt="logo" />
                </NavbarBrand>
                <NavbarToggle/>
                <NavbarCollapse className="justify-content-end">
                    <Nav>
                        {
                            location.pathname === '/' ? 
                            [
                                <NavLink href="#attractions">
                                    ATTRACTIONS
                                </NavLink>,
                                <NavLink href="#events">
                                    EVENTS
                                </NavLink>,
                                <NavLink href="#restaurants">
                                    RESTAURANTS
                                </NavLink>
                            ] :
                            <NavLink as={Link} to="/">
                                HOME
                            </NavLink>
                        }
                        <NavLink as={Link} to="/pricing">
                            PRICING
                        </NavLink>
                        <NavLink as={Link} to="/about">
                            ABOUT US
                        </NavLink>
                        <NavLink as={Link} to="/contact">
                            CONTACT US
                        </NavLink>
                        <MediaQuery minWidth={992}>
                            <NavLink id="buy-button" onClick={() => setModalShow(true)}>
                                BUY TICKETS
                            </NavLink>
                        </MediaQuery>
                        <VisitorsCounter />
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}
