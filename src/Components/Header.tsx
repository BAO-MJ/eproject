import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./Header.css";
import { NavLink, NavbarBrand } from "react-bootstrap";


export default function Header() {
    return (
        <>
            <Navbar sticky="top" expand id="header" bg="light">
                <Container>
                    <NavbarBrand href="/">
                        <img alt="logo"/>
                    </NavbarBrand>
                    <Nav>
                        <NavLink href="#attractions">
                            ATTRACTIONS
                        </NavLink>
                        <NavLink href="#restaurants">
                            RESTAURANTS
                        </NavLink>
                        <NavLink href="#entertainment">
                            ENTERTAINMENT
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
                </Container>
            </Navbar>
            {/* <img style={{width: '100%'}} src='header.png' alt=''/> */}
            
            {/* <div id="wrapper">
                <div id="header">
                    <Nav className="justify-content-center">
                        <HeaderDropdown title={"AMUSEMENT PARK"} to={"#duh"}>
                            <a className="dropdown-item" href="#">Rides</a>
                            <a className="dropdown-item" href="#">Go Karts</a>
                            <a className="dropdown-item" href="#">Keansburg Games</a>
                            <a className="dropdown-item" href="#">Beach</a>
                            <a className="dropdown-item" href="#">Batting Cages</a>
                            <a className="dropdown-item" href="#">Arcades</a>
                            <a className="dropdown-item" href="#">Fishing Pier</a>
                        </HeaderDropdown>
                        <HeaderDropdown title={"WATERPARK"} to={"#duh"}>
                            <a className="dropdown-item" href="#">Slides</a>
                            <a className="dropdown-item" href="#">Kiddie Lagoon</a>
                            <a className="dropdown-item" href="#">Hot Tub & Warming Pools</a>
                            <a className="dropdown-item" href="#">Changing Rooms</a>
                            <a className="dropdown-item" href="#">Lockers</a>
                            <a className="dropdown-item" href="#">Dining</a>
                            <a className="dropdown-item" href="#">Pricing</a>
                        </HeaderDropdown>
                        <HeaderDropdown title={"DINING"} to={"#duh"}>
                            <a className="dropdown-item" href="#">Flavor Burst</a>
                            <a className="dropdown-item" href="#">Boardwalk Grill At The Pavilion Bar</a>
                            <a className="dropdown-item" href="#">Cotton Candy</a>
                            <a className="dropdown-item" href="#">Zeppole's</a>
                            <a className="dropdown-item" href="#">Mambo Nando's</a>
                            <a className="dropdown-item" href="#">Glenda's Great Fries</a>
                            <a className="dropdown-item" href="#">Candid Confections</a>
                            <a className="dropdown-item" href="#"><span className="see-more">More...</span></a>
                        </HeaderDropdown>
                        <HeaderDropdown title={"GROUPS"} to={"#duh"}>
                            <a className="dropdown-item" href="#">Group Packages</a>
                            <a className="dropdown-item" href="#">Birthday Packages</a>
                            <a className="dropdown-item" href="#">Fundraising</a>
                        </HeaderDropdown>
                        <HeaderDropdown title={"PLAN YOUR VISIT"} to={"#duh"}>
                            <a className="dropdown-item" href="#">General Information</a>
                            <a className="dropdown-item" href="#">Directions & Parking</a>
                            <a className="dropdown-item" href="#">Operating Calendar</a>
                            <a className="dropdown-item" href="#">History</a>
                            <a className="dropdown-item" href="#">News</a>
                            <a className="dropdown-item" href="#">Park Map</a>
                            <a className="dropdown-item" href="#">Accommodations</a>
                            <a className="dropdown-item" href="#">Service Animals</a>
                            <a className="dropdown-item" href="#">Location Shoots</a>
                            <a className="dropdown-item" href="#">Events</a>
                        </HeaderDropdown>
                        <HeaderDropdown className="buy-button" title={"BUY TICKETS"} to={"#duh"}>
                            <a className="dropdown-item" href="#">Ride Height & Ticketing</a>
                            <a className="dropdown-item" href="#">Special Offers</a>
                            <a className="dropdown-item" href="#">Ticket Information</a>
                        </HeaderDropdown>
                    </Nav>
                    <Marquee className="header-marquee">
                        The amusement park is open this Friday 5/24 starting at 5pm for our $20 unlimited wristband deal. The waterpark & amusement park will be open Sat 5/25- Sun 5/27 starting at 11am. Waterpark & Limited kiddie rides open at 11am, major rides, restaurants, arcades, and limited games open at 12pm. Majority attractions at go karts open at 1pm.
                    </Marquee>
                </div>

            </div> */}
        </>
    )
}
