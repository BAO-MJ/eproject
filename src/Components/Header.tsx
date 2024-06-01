import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect, useState } from "react";
import { NavLink, NavbarBrand } from "react-bootstrap";
import "./Header.css";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
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

    return <p>Visitors:&nbsp;{visitors}</p>;
}

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const { height: vh } = useWindowDimensions();
  

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
    }, [vh]);

    return (
        <Navbar fixed="top" expand id="header" className={`${scrolled && 'mini-header'}`}>
            <Container className="me-0">
                <NavbarBrand href="/">
                    <img src="logo.png" alt="logo" />
                </NavbarBrand>
                <Nav>
                    <NavLink href="#attractions">
                        ATTRACTIONS
                    </NavLink>
                    <NavLink href="#events">
                        EVENTS
                    </NavLink>
                    <NavLink href="#restaurants">
                        RESTAURANTS
                    </NavLink>
                    <NavLink href="#pricing">
                        PRICING
                    </NavLink>
                    <NavLink href="#deets">
                        ABOUT US
                    </NavLink>
                    <NavLink href="#memes">
                        CONTACT US
                    </NavLink>
                    <NavLink id="buy-button" href="#trans">
                        BUY TICKETS
                    </NavLink>
                </Nav>
                <VisitorsCounter />
            </Container>
        </Navbar>
    )
}
