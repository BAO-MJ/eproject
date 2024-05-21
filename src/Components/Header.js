import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import logo from "../assets/images/Untitled-1-5-copy-5.png";
function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <h1>logo</h1>
          </Navbar.Brand>

          <Nav className="thor">
            <ul id="loki">
              <li>
                <a href="">
                  <h5>HOURS</h5>
                </a>
              </li>
              <li>
                <a href="">
                  <h5>JOIN OUR TEAM</h5>
                </a>
              </li>
              <li>
                <a href="">
                  <h5>TRANSLATE</h5>
                </a>
                <ul className="menu">
                  <li>INFORMACION GENERAL</li>
                  <li>INFORMACION DE LOS BOLETOS</li>
                  <li>DESCUENTOS & ESPECIALES</li>
                </ul>
              </li>
              <li>
                <a href="">
                  <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                </a>
              </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>

      <div id="wrapper">
        <div id="header">
          <nav className="container">
            <ul id="main-menu">
              <li>
                <a href="">
                  <h5>AMUSEMENT PARK</h5>
                </a>
              </li>
              <li>
                <a href="">
                  <h5>WATERPARK</h5>
                </a>
              </li>
              <li>
                <a href="">
                  <h5>DINING</h5>
                </a>
              </li>
              <li>
                <a href="">
                  <h5>GROUPS</h5>
                </a>
              </li>
              <li>
                <a href="">
                  <h5>PLAN YOUR VISIT</h5>
                </a>
              </li>
              <li>
                <a href="" className="hulk">
                  <h5>BUY TICKETS</h5>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <marquee>
        The amusement park is open this Friday 5/24 starting at 5pm for our $20
        unlimited wristband deal. The waterpark &amp; amusement park will be
        open Sat 5/25- Sun 5/27 starting at 11am. Waterpark &amp; Limited kiddie
        rides open at 11am, major rides, restaurants, arcades, and limited games
        open at 12pm. Majority attractions at go karts open at 1pm.
      </marquee>
      <div id="home-page">
        <img src={logo} />
        <div className="banner-content">
          <div className="content-treatment">
            <div className="content-inner">
              <div className="content-inner-headline">
                <img src="https://keansburgamusementpark.com/wp-content/themes/barebones/assets/images/blue-wave.svg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
