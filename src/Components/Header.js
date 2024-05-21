import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
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
                <a href="" className="zuka">
                  <h5>AMUSEMENT PARK</h5>
                </a>
              </li>
              <li>
                <a href=""className="zuka">
                  <h5>WATERPARK</h5>
                </a>
              </li>
              <li>
                <a href=""className="zuka">
                  <h5>DINING</h5>
                </a>
              </li>
              <li>
                <a href=""className="zuka">
                  <h5>GROUPS</h5>
                </a>
              </li>
              <li>
                <a href=""className="zuka">
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
    </>
  );
}

export default Header;
